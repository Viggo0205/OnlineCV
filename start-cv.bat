@echo off
echo Starting Victor's React CV...
echo.

cd /d "c:\Users\victo\Desktop\OnlineCV"

echo Installing dependencies if needed...
"C:\Program Files\nodejs\npm.cmd" install

echo.
echo Starting development server...
echo Your CV will open at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server when you're done.
echo.

"C:\Program Files\nodejs\npm.cmd" run dev

pause