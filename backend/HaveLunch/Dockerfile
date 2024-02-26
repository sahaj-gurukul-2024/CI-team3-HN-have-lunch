FROM mcr.microsoft.com/dotnet/sdk:8.0 as BUILDER

WORKDIR /app

COPY . .

# clean up
RUN dotnet clean

# build
RUN dotnet build

# test
RUN dotnet test

# artifcat generation
RUN dotnet publish
