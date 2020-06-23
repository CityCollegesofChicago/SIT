angular.module('sitApp').controller('AdminListController', function ($scope, Reports, $http, $location, $window, $state, $filter, Notifier, mvAuth, mvIdentity) {

    $scope.showDetail = false;
    //$scope.showAddPDF = false;

    //$scope.contracts = Contract.getAll( );
    $scope.reports = Reports.getAll( );

    $scope.logout = function(){
        $state.go('login');
    }

    // column to sort
    //$scope.column = 'contractDescription';
    $scope.column = 'name';

    // sort ordering (Ascending or Descending). Set true for desending
    $scope.reverse = false;

    if (!mvIdentity.currentUser) {
        $state.go('login');
    } else {
        $scope.student = mvIdentity.currentUser;
    }

    //$scope.addContractPDF = function (contract) {

        //console.log('Function is under construction. Return back later for final results!');
    //};

    //$scope.updateContract = function (contract) {
        //if (!$scope.contractsAppForm.$valid) {
            //Notifier.error('Please verify that all required fields with asterisks are completed.');
            //return;
        //}
        //Contract.update({contract: contract}).$promise.then(function (result) {
                //Notifier.notify('The contract update was successfully saved.')
            //},
            //function (err) {
                //Notifier.error(err);
            //})
    //};

    //$scope.remove = function(item) {                This code integrated into lines 53-57 below...
    //var index = $scope.bdays.indexOf(item);
    //$scope.bdays.splice(index, 1);
    //}

    //$scope.deleteContract = function (contract) {
        //var index = $scope.contracts.indexOf(contract); //URL Reference ... https://stackoverflow.com/questions/15453979/how-do-i-delete-an-item-or-object-from-an-array-using-ng-click (547)
        //$scope.contracts.splice(index, 1);
        //Contract.deleteContract({contract: contract}).$promise.then(function (result) {
            //console.log('Contract deleted!');

        //}, function (err) {
            //Notifier.error('could not delete');
        //})};


    // called on header click
    $scope.sortColumn = function(col){
        $scope.column = col;
        if($scope.reverse){
            $scope.reverse = false;
            $scope.reverseclass = 'arrow-up';
        }else{
            $scope.reverse = true;
            $scope.reverseclass = 'arrow-down';
        }
    };

    // remove and change class
    $scope.sortClass = function(col){
        if($scope.column == col ){
            if($scope.reverse){
                return 'arrow-down';
            }else{
                return 'arrow-up';
            }
        }else{
            return '';
        }
    };

    $scope.toggleDetail = function (reports) {
        if (reports.hasOwnProperty('showDetail')) {
            reports.showDetail = !reports.showDetail;
        } else {
            reports.showDetail = true;
        }
    };

    //$scope.toggleAddPDF = function (contract) {
        //if (contract.hasOwnProperty('showAddPDF')) {
            //contract.showAddPDF = !contract.showAddPDF;
        //} else {
            //contract.showAddPDF = true;
        //}
    //};

    $scope.clearFilters = function () {
        $scope.reportsFilter='';
        $scope.collegeFilter='';
    }

});

//var schools = $window.schoolList.split('; ');

//$scope.schoolListSorted = _.sortBy(schools, function (school) {
//return school.toLowerCase();
//});
//$scope.schoolListSorted.unshift("");

//Applicant.query().$promise.then(function (collection) {
//_.each(collection, function (o) {
//if(!!o.decisionDate){
//o.decisionDate  = new  Date(o.decisionDate);
//}

//o.schoolsSelected = o.schoolsSelected.split(',');
//if(!!o.accepted){
//o.accepted  =  o.accepted.split(',');
//}else {
//o.accepted = [false,false,false];
//}

//if(!!o.appointmentTime){
//o.appointmentTime  =  o.appointmentTime.split(',');
//o.appointmentTime =  o.appointmentTime.map(function(t){
//return new Date($filter('date')(t, "yyyy-MM-dd HH:mm:ss Z"));
//});
//console.log( o.appointmentTime);
//}else {
//o.appointmentTime = [0,0,0];
//}



//if(!!o.emailToSchedule){
//o.emailToSchedule = o.emailToSchedule.split(',');

//o.emailToSchedule =  o.emailToSchedule.map(function(v){
//return v === 'true';
//});
//} else {
//o.emailToSchedule = [false,false,false];
//}


//if(!!o.scholarship){
//o.scholarship  =  o.scholarship.split(',');
//o.scholarship =  o.scholarship.map(function(v){
//return parseInt(v);
//});
//}  else {
//o.scholarship = [0,0,0];
//}
//if(!!o.applied){
//o.applied = o.applied.split(',');

//o.applied =  o.applied.map(function(v){
//return v === 'true';
//});
//} else {
//o.applied = [false,false,false];
//}

//});
//$scope.applicants = collection;

//}, function () {
//});

//var processApplicant = function(o){

//if(!!o.decisionDate){
//o.decisionDate  = new  Date(o.decisionDate);
//}

//o.schoolsSelected = o.schoolsSelected.split(',');
//if(!!o.accepted){
//o.accepted  =  o.accepted.split(',');
//}else {
//o.accepted = [false,false,false];
// }

//if(!!o.appointmentTime){
//o.appointmentTime  =  o.appointmentTime.split(',');
//o.appointmentTime =  o.appointmentTime.map(function(t){
//return new Date($filter('date')(t, "yyyy-MM-dd HH:mm:ss Z"));
//});
//console.log( o.appointmentTime);
//}else {
//o.appointmentTime = [0,0,0];
//}



//if(!!o.emailToSchedule){
//o.emailToSchedule = o.emailToSchedule.split(',');

//o.emailToSchedule =  o.emailToSchedule.map(function(v){
//return v === 'true';
//});
//} else {
//o.emailToSchedule = [false,false,false];
//}


//if(!!o.scholarship){
//o.scholarship  =  o.scholarship.split(',');
//o.scholarship =  o.scholarship.map(function(v){
//return parseInt(v);
//});
//}  else {
//o.scholarship = [0,0,0];
//}



//if(!!o.applied){
//o.applied = o.applied.split(',');

//o.applied =  o.applied.map(function(v){
//return v === 'true';
//});
//} else {
//o.applied = [false,false,false];
//}
//};

//$scope.showDetail = false;

//$scope.toggleDetail = function (contract) {
//if (contract.hasOwnProperty('showDetail')) {
//contract.showDetail = !contract.showDetail;
//} else {
//contract.showDetail = true;
//}
//};
//$scope.saveAdminChanges = function (contract) {
//Auth.updateApplicantData(contract).then(function (result) {
//contract.showDetail = true;
//},
//function (reason) {
//Notifier.error(reason || "there is an issue saving this data");
//});
//};

//$scope.saveSchoolChanges = function (student, school, index) {
//student.schoolsSelected[index] = school;
//student.applied[index] = 0;
//$scope.saveAdminChanges(student);
//};

//$scope.saveAndNotifyCCC = function (student, index) {
//var applied = student.applied[index];
//Auth.notifyCCCAdmin(student, index, applied).then(function () {
//console.log("notifyCCCAdmin successful");

//},
//function (reason) {
//Notifier.error(reason || "there was an issue sending a notifcation email to CCC");
//});
//};

//$scope.sendNotification = function (student) {
//student.NotifyMessage = student.notifiedOfDecision == true ? "Resend: " + student.acceptanceStatus :  "Notify: " + student.acceptanceStatus;

//Auth.notifyUser(student).then(function () {
//student.notifiedOfDecision = true;
//Notifier.notify("email has been sent");
//}, function (reason) {
//Notifier.error(reason || "there was an issue notifying this student");
//});
//};

//$scope.clearFilters = function () {
//$scope.campusFilter='';
//$scope.statusFilter= '';


//}

// $scope.contracts = [
//
//     { contractDescription: 'Financial Advisory Services', awardedVendor1: 'PFM Financial Advisors, LLC',
//         awardedVendor2: 'RMB Capital Management', awardedVendor3: 'Gresham Partners, LLC', termStart: '07/01/2019',
//         termEnd: '06/30/2022', awardedValue: '$25,000', procurementType: 'Joint Procurement (CTA)',
//         contractPO: 'SJ1902', specificationNumber: 'MWJ1906', boardReportLink: 'https://apps.ccc.edu/brpublic/2019/jul/33796.pdf',
//         primeContractor: '3M Corporation', subContractOneId: '1111', subContractOneName: 'Avery Corporation',
//         subContractTwoId: '1112', subContractTwoName: 'Johnson Data Services', subContractThreeId: '1112',
//         subContractThreeName: '3M Corporation', subContractFourId: '1112', subContractFourName: 'Amazon Web Services',
//         subContractFiveId: '1112', subContractFiveName: 'Samsung Corporation', additionalSubContractor: 'McCormick Foundation',
//         fundingSource: 'Capital Funds', category: 'Snow Removal', naicsNum: '12345', boardReportNum: '33796',
//         userDepartment: 'District-Wide', contractItself: 'https://apps.ccc.edu/brpublic/2019/jul/33796.pdf'
//     },
//     { contractDescription: 'Sign Language Interpretation Services', awardedVendor1: 'Chicago Area Interpreter Referral Service (CAIRS)',
//         termStart: '08/01/2019', termEnd: '07/31/2021', awardedVendor2: 'Jones Corporation', awardedVendor3: ' ',
//         awardedValue: '$450,000', procurementType: 'Sealed Bid', contractPO: 'SN1902', specificationNumber: 'SN1902',
//         boardReportLink: 'https://apps.ccc.edu/brpublic/2019/jul/33796.pdf', primeContractor: 'Google Research', subContractOneId: '1112',
//         subContractOneName: 'AWS Web Services', subContractTwoId: '1112', subContractTwoName: 'Avery Corporation',
//         subContractThreeId: '1112', subContractThreeName: 'Avery Corporation', subContractFourId: '1112',
//         subContractFourName: 'Avery Corporation', subContractFiveId: '1112', subContractFiveName: 'N/A',
//         additionalSubContractor: 'IBM Web Services', fundingSource: 'Non-Capital', category: 'Website Building',
//         naicsNum: '12346', boardReportNum: '33797', userDepartment: 'District-Wide',
//         contractItself: 'https://apps.ccc.edu/brpublic/2019/jul/33797.pdf'
//     },
//     { contractDescription: 'Sports Medicine and District Rehabilitation Services',
//         awardedVendor1: 'Athletico Management, LLC dba Athletico Physical Therapy', termStart: '07/01/2019', termEnd: '06/30/2022',
//         awardedVendor2: ' ', awardedVendor3: ' ', awardedValue: '$950,000', contractPO: 'SN1903', procurementType: 'Sealed Bid',
//         specificationNumber: 'MWJ1902', boardReportLink: 'https://apps.ccc.edu/brpublic/2019/jul/33796.pdf', primeContractor: '3M Corporation',
//         subContractOneId: '1113', subContractOneName: 'Avery Corporation', subContractTwoId: '1113', subContractTwoName: 'Avery Corporation',
//         subContractThreeId: '1113', subContractThreeName: 'Avery Corporation', subContractFourId: '1113', subContractFourName: 'N/A',
//         subContractFiveId: '1113', subContractFiveName: 'N/A', additionalSubContractor: 'McCormick Foundation', fundingSource: 'Education',
//         category: 'Athletic Services', naicsNum: '12347', boardReportNum: '33798', userDepartment: 'District-Wide',
//         contractItself: 'https://apps.ccc.edu/brpublic/2019/jul/33798.pdf'
//     },
//     { contractDescription: 'Electronic Time and Labor Management System', awardedVendor1: 'WorkForce Software, Inc. (“WorkForce”)',
//         termStart: '07/01/2019', termEnd: '06/30/2021', awardedValue: '$425,000', contractPO: 'DK1902', specificationNumber: 'DK1902',
//         boardReportLink: 'https://apps.ccc.edu/brpublic/2019/jul/33796.pdf', procurementType: 'Request for Qualifications',
//         primeContractor: '3M Corporation', subContractOneId: '1114', subContractOneName: 'Electronic Data Systems', subContractTwoId: '1114',
//         subContractTwoName: 'Avery Corporation', subContractThreeId: '1114', subContractThreeName: 'N/A', subContractFourId: '1114',
//         subContractFourName: 'N/A', subContractFiveId: '1114', subContractFiveName: 'N/A',
//         additionalSubContractor: 'Boeing Corporation', fundingSource: 'Grant', category: 'Snow Removal',
//         naicsNum: '12348', boardReportNum: '33799', userDepartment: 'District-Wide',
//         contractItself: 'https://apps.ccc.edu/brpublic/2019/jul/33799.pdf'
//     },
//     { contractDescription: 'Active Directory (Forefront Identity Manager) Upgrade, Microsoft Consulting Services',
//         awardedVendor1: 'Microsoft Corporation', termStart: '01/01/2019', termEnd: '06/30/2020', awardedValue: '$170,000',
//         contractPO: 'MWJ1904', specificationNumber: 'MWJ1904', boardReportLink: 'https://apps.ccc.edu/brpublic/2019/jul/33796.pdf',
//         procurementType: 'Joint Procurement (State of Illinois, CMS)', primeContractor: '3M Corporation', subContractOneId: '1115',
//         subContractOneName: 'Wright Limited', subContractTwoId: '1115', subContractTwoName: 'N/A', subContractThreeId: '1115',
//         subContractThreeName: 'N/A', subContractFourId: '1115', subContractFourName: 'N/A', subContractFiveId: '1115',
//         subContractFiveName: 'N/A', additionalSubContractor: 'Amazon.com', fundingSource: 'Non-Capital', category: 'Educational Services',
//         naicsNum: '12349', boardReportNum: '33800', userDepartment: 'District-Wide',
//         contractItself: 'https://apps.ccc.edu/brpublic/2019/jul/33800.pdf'
//     },
//     { contractDescription: 'Online Meeting and Collaboration Tool',
//         awardedVendor1: 'Zoom Video Communications', termStart: '07/01/2019', termEnd: '06/30/2022', awardedValue: '$101,500',
//         contractPO: 'DK1333', specificationNumber: 'DK1333', boardReportLink: 'https://apps.ccc.edu/brpublic/2019/jul/33796.pdf',
//         procurementType: 'Sealed Bid', primeContractor: 'Amazon Web Services', subContractOneId: '1116',
//         subContractOneName: 'Microsoft Corporation', subContractTwoId: '1116', subContractTwoName: 'Avery Corporation',
//         subContractThreeId: '1116', subContractThreeName: 'Avery Corporation', subContractFourId: '1116', subContractFourName: 'N/A',
//         subContractFiveId: '1116', subContractFiveName: 'N/A', additionalSubContractor: 'Skype Technologies', fundingSource: 'Grant',
//         category: 'Technology Services', naicsNum: '12350', boardReportNum: '33801', userDepartment: 'District-Wide',
//         contractItself: 'https://apps.ccc.edu/brpublic/2019/jul/33801.pdf'
//     },
//     { contractDescription: 'Architectural Services',
//         awardedVendor1: 'Bauer Latoza Studio', termStart: '08/01/2019', termEnd: '12/21/2020', awardedValue: '$79,650',
//         contractPO: 'DK1902', specificationNumber: 'DK1902', boardReportLink: 'https://apps.ccc.edu/brpublic/2019/jul/33796.pdf',
//         procurementType: 'Joint Procurement (City of Chicago)', primeContractor: 'Legal Services Trust', subContractOneId: '1117',
//         subContractOneName: 'Smith and Smith Legal', userDepartment: 'Kennedy-King College', subContractTwoId: '1116',
//         subContractTwoName: 'Avery Corporation', subContractThreeId: '1116', subContractThreeName: 'Avery Corporation',
//         subContractFourId: '1116', subContractFourName: 'Avery Corporation', subContractFiveId: '1116',
//         subContractFiveName: 'Avery Corporation', additionalSubContractor: 'The Cochran Firm', fundingSource: 'Capital Funds',
//         category: 'Legal Services', naicsNum: '12351', boardReportNum: '33823',
//         contractItself: 'https://apps.ccc.edu/brpublic/2019/aug/33823.pdf'
//     },
//     { contractDescription: 'Coach Bus Transportation Services',
//         awardedVendor1: 'Ideal Charter, LLC', termStart: '10/03/2019', termEnd: '10/02/2022', awardedValue: '$650,000 annually',
//         contractPO: 'MWJ1905', specificationNumber: 'MWJ1905', boardReportLink: 'https://apps.ccc.edu/brpublic/2019/jul/33796.pdf',
//         procurementType: 'Sealed Bid', primeContractor: 'Greyhound Lines', subContractOneId: '1117',
//         subContractOneName: 'Trailways Bus Services', userDepartment: 'District-Wide', subContractTwoId: '1116',
//         subContractTwoName: 'Avery Corporation', subContractThreeId: '1116', subContractThreeName: 'Avery Corporation',
//         subContractFourId: '1116', subContractFourName: 'Avery Corporation', subContractFiveId: '1116',
//         subContractFiveName: 'Avery Corporation', additionalSubContractor: 'The Cochran Firm', fundingSource: 'Capital Funds',
//         category: 'Legal Services', naicsNum: '12351', boardReportNum: '33823',
//         contractItself: 'https://apps.ccc.edu/brpublic/2019/aug/33823.pdf'
//     }
// ];

