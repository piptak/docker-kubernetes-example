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

### to configure SSL 

#### on windows & mac
```sh
# generate certificate using dotnet tools and add it to CA
$ dotnet dev-certs https --trust
```

#### on linux

```sh
# install certutil to manage certificates
$ sudo apt install libnss3-tools
# generate certificate using dotnet tools
$ dotnet dev-certs https -ep some-path/localhost.crt
# import certificate to CA
$ certutil -d sql:$HOME/.pki/nssdb -A -t "P,," -n 'dev cert' -i some-path/localhost.crt
# list certificates and make sure it is listed here
$ certutil -L -d sql:${HOME}/.pki/nssdb 
```