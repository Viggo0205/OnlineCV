# PowerShell script to start React CV
Write-Host "Starting Victor's React CV..." -ForegroundColor Green
Write-Host ""

# Set Node.js path
$nodePath = "C:\Program Files\nodejs"
$env:PATH = "$nodePath;$env:PATH"

# Change to project directory
Set-Location "c:\Users\victo\Desktop\OnlineCV"

Write-Host "Node.js version:" -ForegroundColor Yellow
& node --version

Write-Host "npm version:" -ForegroundColor Yellow
& npm --version

Write-Host ""
Write-Host "Starting development server..." -ForegroundColor Green
Write-Host "Your CV will be available at: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server when you're done." -ForegroundColor Yellow
Write-Host ""

# Start the development server
& npm run dev