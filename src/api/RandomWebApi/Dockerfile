FROM microsoft/dotnet:sdk AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY src/api/RandomWebApi/RandomWebApi.csproj ./src/csproj-files/
COPY src/api/RandomDataProject/RandomDataProject.csproj ./src/csproj-files/

RUN dotnet restore src/csproj-files/RandomWebApi.csproj && dotnet restore src/csproj-files/RandomDataProject.csproj

# Copy everything else and build
COPY src/api/ ./src

WORKDIR /app/src/RandomWebApi
RUN dotnet publish RandomWebApi.csproj -c Release -o /app/out

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime AS runtime-env
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "RandomWebApi.dll"]