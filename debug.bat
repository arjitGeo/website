@echo off


@REM debug

go build . || (echo Compilation failed! & exit /b)
%CD%/website.exe


@REM build

@REM go build -ldflags="-s -w" .
