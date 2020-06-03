var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
console.log("rootPath" + rootPath);

module.exports  = {
		development: {
            sqlConfig: {
                user: 'sa',
                password: 'IamSQLadmin',
                server: '10.27.251.46',
                database: 'scholarshipsPreApp'
            },
			port: process.env.PORT || 5000,
            virtualDirPath: process.env.virtualDirPath || '',
			rootPath: rootPath,
			emailConfig: {
                host: "psm.ccc.edu",
				port: "25"
            },
            loggingLevel: 'DEBUG'
		},
		production: {
            sqlConfig: {
                user: 'sa',
                password: 'IamSQLadmin',
                //server: '10.27.251.34', //doSQL07.ccc.edu...added 03/09/2020...
                server: '10.27.251.49', //doSQL04.ccc.edu...revised 03/09/2020...
                //server: '13.0.5026.0', //doSQL04.ccc.edu...revised 03/09/2020...
                database: 'scholarshipsPreApp'
            },
            port: process.env.PORT || 5000,
            virtualDirPath: process.env.virtualDirPath || '',
			rootPath: rootPath,
            emailConfig: {
                host: "psm.ccc.edu",
                port: "25"
            },
            loggingLevel: 'DEBUG'
		}
};