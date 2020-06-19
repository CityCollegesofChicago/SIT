var
    year_specific = require('./year_specific'),
    multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty(),
    sql = require('./sql.js'),
    auth = require('./auth');

module.exports = function (config, app) {

    app.post( config.virtualDirPath +'/api/application/save',multipartyMiddleware, sql.saveApplication);

    //app.get(config.virtualDirPath + '/api/applicant', sql.getApplications);

    app.post( config.virtualDirPath +'/api/applicant/uploadFile',multipartyMiddleware, sql.insertSupportDocs);

    //app.put( config.virtualDirPath +'/api/applicant/:id', sql.updateApplication);

    //app.get(config.virtualDirPath + '/api/files/:id',function (req,res){
        //console.log('in routes - get file');
        //sql.getFile(req,res);
    //});

    app.get(config.virtualDirPath + '/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.post(config.virtualDirPath + '/login', auth.authenticate);

    app.all(config.virtualDirPath + '/api/*', function (req, res) {
        console.log('in routes - api/* ');
        res.sendStatus(404);
    });

    app.get('*', function (req, res) {
        res.render('index', {
            virtualDirectoryPath : config.virtualDirPath,
            appDeadline: year_specific.applicationDeadline
        });
    });
};
