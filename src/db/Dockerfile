FROM microsoft/dotnet:sdk AS build
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY src/api/RandomWebApi/RandomWebApi.csproj ./src/csproj-files/
COPY src/api/RandomDataProject/RandomDataProject.csproj ./src/csproj-files/

RUN dotnet restore src/csproj-files/RandomWebApi.csproj && dotnet restore src/csproj-files/RandomDataProject.csproj

# Copy everything else, build and generate migration script
COPY src/api/ ./src
RUN dotnet build src/RandomWebApi/RandomWebApi.csproj

WORKDIR /app/src/RandomDataProject 
RUN dotnet ef migrations script --idempotent --output /app/out/migrate.sql --startup-project ../RandomWebApi/RandomWebApi.csproj

# Postgre image with migration script
FROM postgres:latest AS db
COPY --from=build /app/out/migrate.sql /docker-entrypoint-initdb.d