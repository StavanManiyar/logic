# Logic2Code Environment Setup Script
Write-Host "🚀 Logic2Code Environment Setup" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Check if .env file exists
if (Test-Path ".env") {
    Write-Host "✅ .env file found" -ForegroundColor Green
} else {
    Write-Host "📄 Creating .env file from template..." -ForegroundColor Yellow
    Copy-Item ".env.example" ".env"
    Write-Host "✅ .env file created" -ForegroundColor Green
}

Write-Host ""
Write-Host "🔧 Configuration Steps:" -ForegroundColor Yellow
Write-Host "1. Go to https://supabase.com and create a new project" -ForegroundColor White
Write-Host "2. Get your project URL and anon key from Project Settings > API" -ForegroundColor White
Write-Host "3. Update the .env file with your actual credentials:" -ForegroundColor White
Write-Host "   - VITE_SUPABASE_URL=your-project-url" -ForegroundColor Gray
Write-Host "   - VITE_SUPABASE_ANON_KEY=your-anon-key" -ForegroundColor Gray
Write-Host ""

$envContent = Get-Content ".env" -Raw
if ($envContent -match "demo.supabase.co" -or $envContent -match "demo-key") {
    Write-Host "⚠️  WARNING: You're still using demo credentials!" -ForegroundColor Red
    Write-Host "   The app will work but authentication and data won't persist." -ForegroundColor Red
    Write-Host ""
}

Write-Host "🐳 Docker Commands:" -ForegroundColor Yellow
Write-Host "   Development: docker-compose --profile dev up --build" -ForegroundColor White
Write-Host "   Production:  docker-compose up --build -d" -ForegroundColor White
Write-Host ""

Write-Host "🌐 Access URLs:" -ForegroundColor Yellow
Write-Host "   Development: http://localhost:5173" -ForegroundColor White
Write-Host "   Production:  http://localhost:3000" -ForegroundColor White
Write-Host ""

Write-Host "✅ Setup complete! Update your .env file with real Supabase credentials before building." -ForegroundColor Green
