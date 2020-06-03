   var  sql = require("mssql"),
        env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
        config = require('./config.js')[env],
        mailService = require('./smtp-email.js');


exports.saveApplication = function(req, res) {
    var applicationData =  req.body.student;
    saveData(applicationData,res);
};

//exports.hasApplied = function (res,user) {
    //checkIfApplied(res,user);
//};

   var saveData = function(applicationData,  res) {
       applicationData.attendterms = applicationData.attendterms.join();
       new sql.ConnectionPool(config.sqlConfig).connect().then(function (pool) {
           return pool.request()
               .input('reportdate', sql.NVarChar(50), applicationData.reportdate)
               .input('name', sql.NVarChar(75), applicationData.DisplayName)
               .input('username', sql.NVarChar(50), applicationData.username)
               .input('studentid', sql.NVarChar(10), applicationData.EmployeeNumber)
               .input('email', sql.NVarChar(100), applicationData.email)
               .input('officephone', sql.NVarChar(15), applicationData.officephone)
               .input('otherphone', sql.NVarChar(15), applicationData.otherphone)
               .input('college', sql.NVarChar(30), applicationData.college)
               .input('roomnumber', sql.NVarChar(50), applicationData.roomnumber)
               .input('department', sql.NVarChar(250), applicationData.department)
               .input('relationship', sql.NVarChar(250), applicationData.relationship)
               .input('sefirstname', sql.NVarChar(100), applicationData.sefirstname)
               .input('semiddlename', sql.NVarChar(100), applicationData.semiddlename)
               .input('selastname', sql.NVarChar(100), applicationData.selastname)
               .input('otherstatus', sql.NVarChar(250), applicationData.otherstatus)
               .input('SEemail', sql.NVarChar(75), applicationData.SEemail)
               .input('SEphone', sql.NVarChar(15), applicationData.SEphone)
               .input('reportdescription', sql.NVarChar(250), applicationData.reportdescription)
               .input('concerningbehavior', sql.NVarChar(sql.MAX), applicationData.concerningbehavior)
               .input('SituationConcernDate', sql.NVarChar(50), applicationData.SituationConcernDate)
               .input('SituationConcernTime', sql.NVarChar(50), applicationData.SituationConcernTime)
               .input('incidentaddressed', sql.NVarChar(sql.MAX), applicationData.incidentaddressed)
               .input('concernsreported', sql.NVarChar(sql.MAX), applicationData.concernsreported)
               .input('followupaction', sql.NVarChar(250), applicationData.followupaction)
               .input('otherstatus2', sql.NVarChar(sql.MAX), applicationData.otherstatus2)
               .input('distributionnames', sql.NVarChar(250), applicationData.distributionnames)
               .input('dateTimeSubmitted', sql.DateTime, applicationData.dateTimeSubmitted)
               //.input('privacyconsent', sql.Bit, applicationData.privacyconsent)
               //.input('attendOtherCCC', sql.NVarChar(10), applicationData.attendOtherCCC)
               //.input('othercolleges', sql.NVarChar(1000),applicationData.othercolleges?  applicationData.othercolleges.join() : '')
               //.input('goalsessay', sql.NVarChar(sql.MAX), applicationData.goals)
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
   }

   //var checkIfApplied = function(res,user) {
       //new sql.ConnectionPool(config.sqlConfig).connect().then(function (pool) {
           //return pool.request()
               //.input('studentid', sql.NVarChar(9), user.EmployeeNumber)
               //.execute('checkApplication')
       //}).then(function (result) {
           //sql.close();
           //user.hasApplied = (result.recordset[0].applicationCount > 0);
           //console.log('hasApplied: ' + user.hasApplied);
           //return res.send({success: true, result: user });

       //}).catch(function (err) {
           //sql.close();
           //return res.send({success: false, result: user });

       //});
       //sql.on('error', function (err) {
           //console.log("error: " + err.message);
           //sql.close();
           //res.send({success: false, result: user });
       //});
   //};