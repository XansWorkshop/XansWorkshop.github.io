# Godot Engine: *Conservatory Edition*

&nbsp;&nbsp;The Conservatory runs on a custom version of the [Godot game engine](https://godotengine.org) with modifications ranging from "generally helpful" to "required for proper function". This page outlines the features that have been added or changed.

&nbsp;&nbsp;To view the original contributors and creators, please visit [https://godotengine.org/license](https://godotengine.org/license).

## Core Changes

&nbsp;&nbsp;Changes relevant only to The Conservatory.

### `SimulationDomain`

&nbsp;&nbsp;`SimulationDomain` is a highly complex type fundamental to the game. It is a mix between `SubViewport` and `Viewport` with several unique properties:

* Only one `SimulationDomain` can be active at a time; an instance must be made active explicitly.
    * Active `SimulationDomain`s override the root viewport, effectively becoming that viewport.
    * All settings that affect the viewport (like graphics settings) are proxies to that of the root viewport; `SimulationDomain` inherits the properties but doesn't actually use them since it still piggybacks off of the root viewport.
* `SimulationDomain`s always have their own 2D and 3D physics spaces and render scenarios, meaning their own `World2D` and `World3D` as well. These simulate in the background regardless of if the domain is active.
* `SimulationDomain` is highly protected. You cannot create new instances of it, only the engine can. Even the *slightest* misuse of it outside of its strict specification will purposely crash the game. It's basically the only class in the game where I growl at you and say **don't touch.** It's very sensitive!
    * You can still query its `World2D` and `World3D`, as well as its `PhysicsSpace` and `RenderScenario` properties to access the respective RIDs.
    * Don't you even think about freeing these objects. Unless you like it when the game crashes on you. I'm not your mom.

### `ConservatoryDebugBridge`

&nbsp;&nbsp;This class is largely internal, but the short description is that it allows debug versions of the engine to hook into The Conservatory itself, permitting the C# debugger to also debug the engine using its associated .pdb files. This was especially useful when designing `SimulationDomain` since I could see exactly how the managed and unmanaged parts of the code worked together.

&nbsp;&nbsp;In essence, `SimulationDomain` does what it says on the tin - it's an entire *domain* upon which the game is simulated, physics and rendering. As you may be able to infer, these are used for running several worlds at once, primarily on servers where players may be on different planets at once, and so all of them need to be simulated in their own little isolated box.

## Physics and Space/Vector Improvements

&nbsp;&nbsp;Changes to the physics engine, its API, and types relating to space.

### `RayCast3DDirect` and `ShapeCast3DDirect`

&nbsp;&nbsp;These two classes are, unlike their siblings `RayCast3D` and `ShapeCast3D`, *not* based on `Node`. Instead, these instances provide fast, low level physics engine access to perform raycasts on demand. This is used by several systems in the game, in particular deferred casting, which uses an instance of this type to effectively perform and store a raycast so that it can be done in an `async` method (see `Star3D.Maths.Physics.Raycasting::RaycastAsync()`).

&nbsp;&nbsp;The primary benefits of these types include:

* No scene tree access is required to operate them.
* They avoid the slow `Godot.Collections.Dictionary` return from `PhysicsServer3D.intersect_ray` and `PhysicsServer3D.intersect_shape`.
* They cast only when you tell them to, and can export their results.

#### `RayCastResult` Improvements

* `RayCastResult` now provides a new enum property `HitObjectType`. This will be either `Invalid`, `Area`, `Body`, or `SoftBody`, and can be used to appropriately handle raw `RID`s since The Conservatory makes extensive use of physics objects without nodes.
* `ShapeCastResult` is now a thing to go with `ShapeCast3DDirect`.

### `Vector` and `Rect` Changes
* All `Vector` types (`Vector2`, `Vector3`, `Vector4`, and their integer counterparts) now implement `IComparable` which will sort them by magnitude extremely quickly.
* All `Vector` types now include two new spatial metrics:
    * [Manhattan Distance](https://en.wikipedia.org/wiki/Taxicab_geometry)
    * [Chebyshev Distance](https://en.wikipedia.org/wiki/Chebyshev_distance)
* All `Vector` types now have a micro-optimized `IsExactlyZero` method which uses bitwise comparison. This is one of those things that saves a few nanoseconds so it's not really that important.
* `Rect2` and `Rect2I` have new API:
    * `FromSize` static methods now exist which create a new `Rect2(I)` at `[0, 0]` with the provided size.
    * Arithmetic operators `+` and `-` are now defined with `Vector2(I)` which translates the `Rect2(I)`.
    * The `&` operator is now a proxy for `Intersect()`

### Other

* `PhysicsServer3D::body_get_shape_disabled` (and an `area` equivalent) were added.
* Added `PhysicsServer3D::BODY_PARAM_INVERSE_INERTIA_TENSOR` as a new parameter for `PhysicsServer3D::body_get_param`. Saves having to get a reference to the entire physics state.

### Unsorted Changes

* `Engine::get_version_info` now returns improved data:
    * New `version` field which is a stringified Godot version following the display rules, i.e. `"4.5"`
    * New `commit` field, which is the last 6 digits of the commit hash.
    * New `modules` field, an array of features, like `mono` and `double`
* Added `Mathf.IsOneApprox` and `Mathf.IsExactlyOne`.

## Rendering Improvements

&nbsp;&nbsp;Changes related to rendering, both 2D and 3D

### 2D Changes

* `CharFXTransform` now provides several new properties.
    * `Label` is a reference to the current `RichTextLabel` that the effect is rendering for.
    * `Glyph` (**C# Only!**) is a `Rune` representing the first unicode codepoint of the rendered character. This is useful primarily for English, but falls apart with other languages, so handle with care. It can be set to replace the displayed character.
        * `get_glyph_index` exists for GDScript and returns an `Int`
    * `FontSize` represents the size of the font *as of the currently rendered character*, respective of text styling.
* New `Control.pivot_is_relative` property which changes `Control.pivot` to be expressed as a continuously updating percentage of the `Control`'s size. This allows the pivot to maintain its relative location if the control is resized.
* `RichTextLabel` now provides several new API members.
    * (**C# Only!**) `RichTextLabel` now declares `public virtual string BBCode { get; }` which can be overridden to achieve the same purpose as declaring a `bbcode` field.
        * To make this work, the engine now represents a property named `BBCode` as well as the legacy, all-lowercase `bbcode`.
    * (**C# Only!**) `RichTextLabel.InstallEffect<T>()` (where `T` is `RichTextEffect`) can be used to automatically instantiate an instance of the effect.
    * (**C# Only!**) `RichTextLabel.PushCustomfx<T>()` (where `T` is `RichTextEffect`) can be used to push a custom effect onto the effect stack.
    * New `parsing` signal (`Parsing` event in C#) has been added, which fires before and after the `Text` property parses the contained bbcode.


### 3D Changes

* The Stencil Buffer was added, though this is officially in Godot now.
* `#pragma features` and `#pragma exclusive_variants` are now usable in Godot shaders. These allow static compliation of branches in shaders with configurable options in the inspector.
* `Shader::set_include_path` and `Shader::get_include_path` are now exposed, allowing procedurally generated shaders without a file path to still referenece from an `#include` directory as if they are in that directory.

### Other Changes

* `MaterialStorage::global_shader_parameter_get` is no longer an error, but will still print one to the console. The Conservatory uses this to initialize shader globals in its own data storage from the values set in the engine.

***
