var nodemailer = require("nodemailer"),
    fs = require('fs'),
    transporter = null,
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./config.js')[env];

var mailOptions = {
    from: "dmacklin@ccc.edu",
    to: "dmacklin@ccc.edu",
    subject: "New Person of Concern Report Form",
    cc: "dmacklin@ccc.edu",
    html: '<h4>New Person of Concern Report Form Online Submission Listed Below:</h4>' +
        '<strong>WHAT IS NEXT? </strong>' + '<ol>' +
        '<li>Students will be matched to scholarships based on the information provided in the application and in your CCC student portal (e.g., Home College, GPA, Financial Aid information, Credit Hours, Academic Focus Area).</li>' + '<br/>' +
        '<li>CCCF Scholarship criteria varies as the donor of each scholarship fund sets it.</li>' + '<br/>' +
        '<li>College scholarship committees review applications and make award recommendations to the CCC Foundation.</li>' + '<br/>' +
        '<li>Students awarded will be notified if they are approved or denied once awards are approved.</li>' + '<br/>' +
        '<li>Future semester scholarship determinations will be made in advance of the chosen future term provided financial aid forms have been filled out and processed.</li>' + '<br/>' +
        '<li>Payments to student accounts will be made after the semester drop date. Students must be enrolled at a CCC college in the semester(s) chosen, and remain enrolled to receive payment.</li>' + '</ol>' + '<br/>' +
        '<strong>PLEASE BE AWARE THAT YOU ARE SUBJECT TO CITY COLLEGES OF CHICAGO PAYMENT DEADLINE POLICIES REGARDLESS OF THE SUBMISSION OF THE SCHOLARSHIP APPLICATION.</strong>' + '<ul>' +
        '<li>If a scholarship award is provided for your current semester a payment plan is in place, the scholarship will be applied to the remaining balance for charges in the current semester and any excess will be refunded to the student provided the scholarship award is from a fund that is not last-dollar and is refundable.</li>' + '</ul>' + '<br/>' +
        '<strong>WHAT DO I NEED TO KEEP IN MIND?</strong>' + '<br/>' +
        '<p>The City Colleges of Chicago Foundation is committed to awarding as many scholarships as possible to financially support students’ education. However, the Foundation does have its restrictions, therefore:</p>' + '<br/>' +
        '<ul>' + '<li><strong>Submission of a scholarship application does not guarantee a scholarship award or payment.</strong></li>' + '<br/>' +
        '<li>The Foundation is bound to the wishes and directives of its donors.</li>' + '<br/>' +
        '<li>There are several kinds of City Colleges of Chicago Foundation scholarship awards:</li>' + '<br/>' + '<ul>' +
        '<li>Last-dollar, which means funds are paid after all other financial aid resources (Pell/MAP/Outside scholarships, etc.) have been awarded.</li>' + '<br/>' +
        '<li>Non-refundable scholarships, which means that any funds that remain after tuition, books and any other donor-defined funding has been paid, cannot be paid to the student. These funds stay within the Foundation.</li>' + '<br/>' +
        '<li>Refundable scholarships which means that funds that remain from the award after tuition, books and any other donor-defined funding has been paid, may be disbursed to the student.</li>' + '</ul>' + '<br/>' +
        '<strong><li>Students are subject to City Colleges of Chicago payment deadline policies regardless of the submission of the scholarship application.</li></strong>' + '</ul>' + '<br/>' +
        '<strong>WHAT DO YOU EXPECT FROM ME?</strong>' + '<ul>' +
        '<li>WRITE A THANK YOU NOTE: This lets the donor know you appreciate their support. Someone will contact you with details on where to send a note.</li>' + '<br/>' +
        '<li>BE WILLING TO MEET THE DONOR: In the future, we will create opportunities for some of our scholarship recipients to meet the donor of their scholarship. This will be a wonderful opportunity to connect and network with the person or company who is funding your education.</li>' + '<br/>' +
        '<li>WRITE A NOTE WITH AN UPDATE TO THE DONOR: Your update could include academic and career plans, progress in your classes, challenges you are facing, and anything else you want the donor to know about you and your dreams for the future.</li>' + '</ul>' + '<br/>' +
        '<p>Please email the City Colleges of Chicago Foundation at scholarships@ccc.edu with any questions.</p>' + '<br/>' +
        '<p>We wish you much success in your academic pursuits.<br/><br/><strong>City Colleges of Chicago Foundation</strong><br/><strong>Scholarship Services</strong><br/><strong>scholarships@ccc.edu</strong></p>'
}


function transport(cfg) {
    var transp = nodemailer.createTransport({
        host: cfg.emailConfig.host,
        port: cfg.emailConfig.port,
        secure: false,
        tls:{rejectUnauthorized: false}
    });
    return transp;
}

function checkTransporter(){
    if (transporter == null) {
        transporter = transport(config);
    }
}


exports.sendEmail = function (toEmailAddress) {
    if(!!toEmailAddress)
    {
        mailOptions.to = toEmailAddress;
    }

    checkTransporter();

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("error in email: " + error);
            return error;
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        return info;
    });
};
