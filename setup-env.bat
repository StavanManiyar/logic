@echo off
echo Logic2Code Environment Setup
echo ===============================
echo.

REM Check if .env file exists
if exist ".env" (
    echo [OK] .env file found
) else (
    echo [INFO] Creating .env file from template...
    copy ".env.example" ".env"
    echo [OK] .env file created
)

echo.
echo Configuration Steps:
echo 1. Go to https://supabase.com and create a new project
echo 2. Get your project URL and anon key from Project Settings ^> API
echo 3. Update the .env file with your actual credentials:
echo    - VITE_SUPABASE_URL=your-project-url
echo    - VITE_SUPABASE_ANON_KEY=your-anon-key
echo.

REM Check if using demo credentials
findstr /C:"demo.supabase.co" .env >nul
if %errorlevel%==0 (
    echo [WARNING] You're still using demo credentials!
    echo           The app will work but authentication and data won't persist.
    echo.
)

echo Docker Commands:
echo    Development: docker-compose --profile dev up --build
echo    Production:  docker-compose up --build -d
echo.

echo Access URLs:
echo    Development: http://localhost:5173
echo    Production:  http://localhost:3000
echo.

echo [OK] Setup complete! Update your .env file with real Supabase credentials before building.
pause
