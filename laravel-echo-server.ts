const config = {
	"authHost": "http://localhost:8001",
	"authEndpoint": "/broadcasting/auth",
	"clients": [
		{
			"appId": "98b835d175671d94",
			"key": "2fc6ab7862929a7a67aa2c84483e1bac"
		}
	],
	"database": "redis",
	"databaseConfig": {
		"redis": {},
		"sqlite": {
			"databasePath": "/database/laravel-echo-server.sqlite"
		}
	},
	"devMode": true,
	"host": null,
	"port": "7000",
	"protocol": "http",
	"socketio": {},
	"sslCertPath": "",
	"sslKeyPath": "",
	"sslCertChainPath": "",
	"sslPassphrase": "",
	"apiOriginAllow": {
		"allowCors": true,
		"allowOrigin": "http://localhost:4300",
		"allowMethods": "GET, POST",
		"allowHeaders": "Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization, X-CSRF-TOKEN, X-Socket-Id"
	}
};

export {config}