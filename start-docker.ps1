# Start Logic2Code Docker Application
Write-Host "Starting Logic2Code Docker Application..." -ForegroundColor Green

# Check if Docker is running
try {
    docker info | Out-Null
    Write-Host "✓ Docker is running" -ForegroundColor Green
} catch {
    Write-Host "✗ Docker is not running. Please start Docker Desktop first." -ForegroundColor Red
    exit 1
}

# Stop existing containers
Write-Host "Stopping existing containers..." -ForegroundColor Yellow
docker-compose down

# Build and start the application
Write-Host "Building and starting the application..." -ForegroundColor Yellow
docker-compose up --build -d

# Check if container is running
Start-Sleep -Seconds 5
$container = docker ps --filter "name=logic2code-app" --format "table {{.Names}}\t{{.Status}}"
if ($container -like "*logic2code-app*") {
    Write-Host "✓ Application is running successfully!" -ForegroundColor Green
    Write-Host "🚀 Your application is available at: http://localhost:3000" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Commands:" -ForegroundColor Yellow
    Write-Host "  • View logs: docker logs logic2code-app" -ForegroundColor White
    Write-Host "  • Stop app: docker-compose down" -ForegroundColor White
    Write-Host "  • Restart: docker-compose restart" -ForegroundColor White
} else {
    Write-Host "✗ Failed to start the application" -ForegroundColor Red
    Write-Host "Check logs with: docker logs logic2code-app" -ForegroundColor Yellow
    docker logs logic2code-app
}
