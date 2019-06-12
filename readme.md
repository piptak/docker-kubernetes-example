# Docker & Kubernetes example

## Running the application

### Using docker

```sh
$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

### to debug .net core web api in vscode 

#### dotnet process

```json
{
    "name": ".NET Core Launch (web)",
    "type": "coreclr",
    "request": "launch",
    "preLaunchTask": "build",
    "program": "${workspaceFolder}/src/api/RandomWebApi/bin/Debug/netcoreapp2.2/RandomWebApi.dll",
    "args": [],
    "cwd": "${workspaceFolder}/src/api/RandomWebApi",
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

#### docker container

```json
{
    "name": "Docker: Launch .NET Core",
    "type": "docker-coreclr",
    "request": "launch",
    "preLaunchTask": "build",
    "dockerBuild": {
        "context": "${workspaceFolder}",
        "dockerfile": "${workspaceFolder}/src/api/RandomWebApi/Dockerfile",
        "target": "runtime-env"
    },
    "dockerRun": {},
    "appFolder": "${workspaceFolder}/src/api/RandomWebApi"
}
```

### to debug angular app in vscode

#### in chrome

```json
{
    "type": "chrome",
    "request": "launch",
    "name": "Launch Angular app",
    "url": "http://localhost:4200",
    "webRoot": "${workspaceFolder}/src/RandomAngularApp"
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