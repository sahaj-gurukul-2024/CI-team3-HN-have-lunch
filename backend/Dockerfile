FROM mcr.microsoft.com/dotnet/sdk:8.0 as BUILDER

WORKDIR /app

COPY . .

RUN echo "hello-world"

# artifcat generation
RUN dotnet publish /app/HaveLunch/HaveLunch.csproj -c Release -o publish/

ENTRYPOINT ["dotnet", "/app/publish/HaveLunch.dll"]