@echo off
echo ========================================
echo Portfolio CMS - Backend Startup Script
echo ========================================
echo.

:: Check if MySQL is running
echo [1/4] Checking MySQL connection...
mysql -u root -e "SELECT 1" >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: MySQL is not running!
    echo Please start XAMPP/WAMP MySQL service first.
    pause
    exit /b 1
)
echo OK: MySQL is running

:: Create database if it doesn't exist
echo.
echo [2/4] Setting up database...
mysql -u root -e "CREATE DATABASE IF NOT EXISTS portfolio_cms"
echo OK: Database ready

:: Fix the projects table (remove live_url column)
echo.
echo [3/4] Fixing database schema...
mysql -u root portfolio_cms -e "ALTER TABLE projects DROP COLUMN IF EXISTS live_url" 2>nul
echo OK: Schema fixed

:: Start Spring Boot backend
echo.
echo [4/4] Starting Spring Boot backend...
echo Backend will start on http://localhost:8080
echo Press Ctrl+C to stop the backend
echo.
cd /d "%~dp0"
call mvnw.cmd spring-boot:run
