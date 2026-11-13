@echo off
setlocal enabledelayedexpansion
title JJCET-STIF - Local Server
cd /d "%~dp0"

echo ============================================================
echo    JJCET-STIF Website - Local Server
echo    http://localhost:3000
echo ============================================================
echo.

REM --- 1. Check Node -------------------------------------------------------
where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js was not found on this PC.
  echo         Install Node.js 18.17 or newer, then run this file again.
  echo.
  pause
  exit /b 1
)
for /f "delims=" %%v in ('node -v') do echo [OK] Node %%v

REM --- 2. Install dependencies if missing ----------------------------------
if exist "node_modules" (
  echo [OK] Dependencies already installed.
) else (
  echo.
  echo [1/3] Installing dependencies for the first time...
  call npm install
  if errorlevel 1 (
    echo.
    echo [ERROR] npm install failed. Check your internet connection.
    pause
    exit /b 1
  )
)

REM --- 3. Build ------------------------------------------------------------
set "REBUILD=N"
if not exist ".next\BUILD_ID" (
  set "REBUILD=Y"
  echo.
  echo No build found yet - building now.
) else (
  echo.
  set /p REBUILD=Rebuild the site before starting? [Y/N, default N]:
)
if /I "!REBUILD!"=="Y" (
  echo.
  echo [2/3] Building the site. This can take a minute...
  call npm run build
  if errorlevel 1 (
    echo.
    echo [ERROR] Build failed. Read the errors above, fix them, then retry.
    pause
    exit /b 1
  )
) else (
  echo [2/3] Using the existing build.
)

REM --- 4. Free port 3000 if something is already on it ---------------------
echo [3/3] Checking port 3000...
for /f "tokens=5" %%p in ('netstat -ano ^| findstr "LISTENING" ^| findstr /C:":3000 "') do (
  echo       Stopping the process already using port 3000 ^(PID %%p^)
  taskkill /F /PID %%p >nul 2>nul
)

echo.
echo ============================================================
echo    Starting... keep this window open.
echo    Stop the server with Ctrl+C in this window.
echo ============================================================
echo.
call npm run start -- --port 3000

echo.
echo Server stopped.
pause
