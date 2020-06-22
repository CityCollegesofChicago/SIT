   var  sql = require("mssql"),
        env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
        config = require('./config.js')[env],
        mailService = require('./smtp-email.js');


//exports.saveApplication = function(req, res) {   //File upload code...
    //var applicationData =  req.body.student;
    //var files = req.files.files.supportingDocs;
    //console.log(Object.getOwnPropertyNames(files));
    //console.log(Object.getOwnPropertyNames(applicationData));

    //saveData(applicationData, files,res);
//};

   //var saveFiles = function(files,id,res,result1, email){
   //var file1 = files;
   //var fileData1  =  fs.readFileSync(file1.path);

   //console.log("file1: " + ' ' + Object.getOwnPropertyNames(file1));

   //new sql.ConnectionPool(config.sqlConfig).connect().then(function (pool) {
   //return pool.request()
   //.input('doc_type1', sql.NVarChar(200), file1.type )
   //.input('binaryData',  sql.VarBinary(sql.MAX), fileData1 )
   //.input('documentname', sql.NVarChar(100), file1.originalFilename )
   //.input('appId', sql.Int, id)
   //.execute('InsertSuppDocs')
   //}).then(function (result) {
   //console.log(result);
   //sql.close();
   //mailService.sendEmail(email, 'submitted');
   //res.send(result1);
   //}).catch(function (err) {
   //console.log('catch in savefiles');
   //res.status(400);
   //console.log("error saving applicant supporting document: " + err.toString());
   //sql.close();
   //return res.send({reason: err.toString()});
   //});
   //sql.on('error', function (err) {
   //sql.close();
   //res.status(400);
   //console.log("error saving error saving applicant supporting document: " + err.toString());
   //return res.send({reason: err.toString()});
   //});
   //};

   exports.saveApplication = function(req, res) {
       var applicationData =  req.body.student;
       saveData(applicationData,res);
   };

   var saveData = function(applicationData,  res) {
       //applicationData.attendterms = applicationData.attendterms.join();
       new sql.ConnectionPool(config.sqlConfig).connect().then(function (pool) {
           return pool.request()
               .input('reportDate', sql.NVarChar(50), applicationData.reportDate)
               .input('name', sql.NVarChar(75), applicationData.DisplayName)
               .input('username', sql.NVarChar(50), applicationData.username)
               .input('studentId', sql.NVarChar(10), applicationData.EmployeeNumber)
               .input('email', sql.NVarChar(100), applicationData.email)
               .input('officePhone', sql.NVarChar(15), applicationData.officePhone)
               .input('otherPhone', sql.NVarChar(15), applicationData.otherPhone)
               .input('college', sql.NVarChar(30), applicationData.college)
               .input('roomNumber', sql.NVarChar(50), applicationData.roomNumber)
               .input('department', sql.NVarChar(250), applicationData.department)
               .input('relationship', sql.NVarChar(250), applicationData.relationship)
               .input('seFirstName', sql.NVarChar(100), applicationData.seFirstName)
               .input('seMiddleName', sql.NVarChar(100), applicationData.seMiddleName)
               .input('seLastName', sql.NVarChar(100), applicationData.seLastName)
               .input('otherStatus', sql.NVarChar(250), applicationData.otherStatus)
               .input('seEmail', sql.NVarChar(75), applicationData.seEmail)
               .input('sePhone', sql.NVarChar(15), applicationData.sePhone)
               .input('reportDescription', sql.NVarChar(250), applicationData.reportDescription)
               .input('concerningBehavior', sql.NVarChar(sql.MAX), applicationData.concerningBehavior)
               .input('SituationConcernDate', sql.NVarChar(50), applicationData.SituationConcernDate)
               .input('SituationConcernTime', sql.NVarChar(50), applicationData.SituationConcernTime)
               .input('incidentAddressed', sql.NVarChar(sql.MAX), applicationData.incidentAddressed)
               .input('concernsReported', sql.NVarChar(sql.MAX), applicationData.concernsReported)
               .input('followupAction', sql.NVarChar(250), applicationData.followupAction)
               .input('otherStatus2', sql.NVarChar(sql.MAX), applicationData.otherStatus2)
               .input('distributionNames', sql.NVarChar(250), applicationData.distributionNames)
               //.input('dateTimeSubmitted', sql.DateTime, applicationData.dateTimeSubmitted)
               //.output('appId',sql.Int)
               .execute('saveApplication')
       }).then(function (result) {
           sql.close();
           console.log('email address: ' + applicationData.email);
           mailService.sendEmail(applicationData.email);
           res.send(result);

       }).catch(function (err) {
           console.log("catch");
           res.status(400);
           console.log("error saving applicant data: " + err.toString());
           sql.close();
           return res.send({reason: err.toString()});
       });
       sql.on('error', function (err) {
           console.log("error");
           sql.close();
           res.status(400);
           console.log("error saving applicant data: " + err.toString());
           return res.send({reason: err.toString()});
       });

       //}).then(function (result) {   //For file uploads...
           //console.log("then" );
           //var appId = result.output.appId;
           //console.log('appId: ' + appId);
           //sql.close();
           //console.log('email address: ' + applicationData.email);
           //mailService.sendEmail(applicationData.email);
           //res.send(result);
           //saveFiles(files, appId,res,result, applicationData.email);
       //}).catch(function (err) {
           //console.log("catch");
           //res.status(400);
           //console.log("error saving applicant data: " + err.toString());
           //sql.close();
           //return res.send({reason: err.toString()});
       //});
       //sql.on('error', function (err) {
           //console.log("error");
           //sql.close();
           //res.status(400);
           //console.log("error saving applicant data: " + err.toString());
           //return res.send({reason: err.toString()});
       //});
   }