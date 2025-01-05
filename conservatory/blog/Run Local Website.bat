@ECHO OFF
start "" "mkdocs" "serve"
TIMEOUT /T 3
start "" "http://127.0.0.1:8000"