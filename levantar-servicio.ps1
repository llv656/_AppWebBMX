Get-Content "settings_contenedor_front_end.env" | ForEach-Object {
    $envVar = $_ -split '=', 2
    [System.Environment]::SetEnvironmentVariable($envVar[0], $envVar[1], [System.EnvironmentVariableTarget]::Process)
}

docker-compose up