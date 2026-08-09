@echo off
echo Starting Victor's React CV...
echo.

cd /d "%~dp0"

echo Installing dependencies if needed...
"C:\Program Files\nodejs\npm.cmd" install

echo.
echo Starting development server...
echo Your CV will open at: http://localhost:3000/OnlineCV/
echo.
echo Press Ctrl+C to stop the server when you're done.
echo.

"C:\Program Files\nodejs\npm.cmd" run dev

pause
