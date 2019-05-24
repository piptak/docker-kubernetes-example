# Docker & Kubernetes example

### to debug in vscode (.net core)

```json
{
    "name": ".NET Core Launch (web)",
    "type": "coreclr",
    "request": "launch",
    "preLaunchTask": "build",
    "program": "${workspaceFolder}/src/RandomWebApi/bin/Debug/netcoreapp2.2/RandomWebApi.dll",
    "args": [],
    "cwd": "${workspaceFolder}/src/RandomWebApi",
    "stopAtEntry": false,
    "launchBrowser": {
        "enabled": true
    },
    "env": {
        "ASPNETCORE_ENVIRONMENT": "Development"
    },
    "sourceFileMap": {
        "/Views": "${workspaceFolder}/Views"
    }
}
```

### to debug docker container in vscode (.net core)

```json
{
    "name": "Docker: Launch .NET Core",
    "type": "docker-coreclr",
    "request": "launch",
    "preLaunchTask": "build",
    "dockerBuild": {
        "context": "${workspaceFolder}/src/RandomWebApi",
        "dockerfile": "${workspaceFolder}/src/RandomWebApi/Dockerfile",
        "target": "runtime-env"
    },
    "dockerRun": {},
    "appFolder": "${workspaceFolder}/src/RandomWebApi"
}
```