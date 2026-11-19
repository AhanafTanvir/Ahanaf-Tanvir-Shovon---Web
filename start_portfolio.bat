@echo off
echo ===================================================
echo   Starting Ahanaf Tanvir Shovon Portfolio Local Server
echo ===================================================
echo Opening browser at http://127.0.0.1:5173/ ...
start "" "http://127.0.0.1:5173/"
npm run dev -- --host 0.0.0.0 --port 5173
pause
