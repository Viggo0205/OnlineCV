# PowerShell script to start React CV
Write-Host "Starting Victor's React CV..." -ForegroundColor Green
Write-Host ""

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptRoot

Write-Host "Node.js version:" -ForegroundColor Yellow
node --version

Write-Host "npm version:" -ForegroundColor Yellow
npm --version

Write-Host ""
Write-Host "Starting development server..." -ForegroundColor Green
Write-Host "Your CV will be available at: http://localhost:3000/OnlineCV/" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server when you're done." -ForegroundColor Yellow
Write-Host ""

npm run dev
