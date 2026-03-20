@echo off
REM Silicon City Pet Hospital - Web Server Startup Script
REM This script starts a local web server to view the website

echo.
echo ================================================
echo Silicon City Pet Hospital Website
echo ================================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Starting web server on http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
) else (
    echo Python is not installed. Please use one of these methods:
    echo.
    echo Method 1: Install Node.js and run 'npx http-server -p 8000'
    echo Method 2: Install Python from https://www.python.org
    echo Method 3: Use VS Code Live Server extension
    echo.
    echo For VS Code Live Server:
    echo 1. Install the "Live Server" extension
    echo 2. Right-click on index.html
    echo 3. Select "Open with Live Server"
    echo.
    pause
)
