/*
This is empty on purpose! Your code to build the resume will go here.
 */
// Json Bio
var bio = {
    "name": "Guilherme Patriarca",
    "role": "Web Developer",
    "contacts": {
        "mobile": "965547869",
        "email": "guilhermejmpatriarca@gmail.com",
        "github": "https://github.com/guilhermepatriarca",
        "blog": "www.trynewblog.com",
        "location": "Portugal"
    },
    "welcomeMessage": "Hello World!!",
    "skills": ["Good Person", "Awesomeness", "Travel in future"],
    "bioPic": "images/fry.jpg"
};
//**************** BIO
// role
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
// name
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
// Contact Generic
$("#header").append(HTMLcontactGeneric);
// mobile
var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
$("#topContacts").append(formattedmobile);
// email
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email)
$("#topContacts").append(formattedemail);
// github
var github_change = bio.contacts.github
var change_string = function(github_change) {
    github_change = github_change.slice(19);
    return github_change;
}
console.log(change_string(github_change))
    // SLICE
var formattedgithub = HTMLgithub.replace("%data%", change_string(github_change))
$("#topContacts").append(formattedgithub);
// blog
var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog)
$("#topContacts").append(formattedblog);
// location
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location)
$("#topContacts").append(formattedlocation);
// Pic
var formattedboiPic = HTMLbioPic.replace("%data%", bio.bioPic)
$("#header").append(formattedboiPic);
// welcomeMessage
var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
$("#header").append(formattedwelcomeMessage);
// Skills
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}
// Json Education
var education = {
        "schools": [{
            "location": "Portugal",
            "city": "Coimbra",
            "name": "Instituto Superior Miguel Torga",
            "graduation": "Licenciatura",
            "years": "2012-2015"
        }, {
            "location": "Portugal",
            "city": "Coimbra",
            "name": "Arca",
            "graduation": "Pos-Graudação",
            "years": "2011-2012"
        }],
        "onlineCoures": [{
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": "2016",
            "url": "http://www.idacity.com/course/ud804"
        }]
    }
    // WorK JSON
var work = {
        "jobs": [{
            "employer": "Estagio",
            "title": "Sasuc",
            "location": "Coimbra",
            "dates": "19/06/2015 - 22/06/2016",
            "description": "Web Developer"
        }, {
            "employer": "Estagio",
            "title": "Mau Maria",
            "location": "Coimbra",
            "dates": "",
            "description": "Fotografia"
        }]
    }
    // Project JSON
var projects = {
    "projects": [{
        "title": "Project 1",
        "dates": "06/06/2016",
        "description": "Test 1"
    }, {
        "title": "Project 2",
        "dates": "06/06/2016",
        "description": "Test 2"
    }, {
        "title": "Project 3",
        "dates": "06/06/2016",
        "description": "Test 3"
    }]
}
