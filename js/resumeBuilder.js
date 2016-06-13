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
// mobile
var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
$("#topContacts").append(formattedmobile);
$("#footerContacts").append(formattedmobile);
// email
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email)
$("#topContacts").append(formattedemail);
$("#footerContacts").append(formattedemail);
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
$("#footerContacts").append(formattedgithub);
// blog
var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog)
$("#topContacts").append(formattedblog);
$("#footerContacts").append(formattedblog);
// location
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location)
$("#topContacts").append(formattedlocation);
$("#footerContacts").append(formattedlocation);
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
// Work Json
var work = {
        "jobs": [{
            "employer": "Estagio",
            "title": "Sasuc",
            "location": "Coimbra",
            "dates": "19/06/2015 (1 year)",
            "description": "Web Developer"
        }, {
            "employer": "Estagio",
            "title": "Mau Maria",
            "location": "Coimbra",
            "dates": "2011 (2 months)",
            "description": "Fotografia"

        }]
    }
    //******** Work
function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        // employer
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        //Title
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        // Dates
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        //location
        var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        //description
        var formatteddescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var formattedEmployerTitleDatesLocationDescription = formattedEmployer + formattedTitle + formattedDates + formattedlocation + formatteddescription;
        $(".work-entry:last").append(formattedEmployerTitleDatesLocationDescription);
    }
}
displayWork();

$(document).click(function(loc) {
    // your code goes here
    console.log("page on X: " + loc.pageX + ", page on Y: " + loc.pageY);
});
// the name Game
// $("#main").append(internationalizeButton);
// var name = bio.name;

function inName(newName) {
    var capitalizer_name = newName;
    var names = newName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    capitalizer_name = names.join(" ");
    return (capitalizer_name)
}
// Project JSON
var projects = {
        "projects": [{
            "title": "Project 1",
            "dates": "06/06/2016",
            "description": "Test 1",
            "images": "images/test.png",
        }, {
            "title": "Project 2",
            "dates": "06/06/2016",
            "description": "Test 2",
            "images": "images/test.png"
        }, {
            "title": "Project 3",
            "dates": "06/06/2016",
            "description": "Test 3",
            "images": "images/test.png"
        }]
    }
    //******** Project
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        //Title
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        // Dates
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        //description
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        //images
        var formattedimages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedimages);
    }
}
projects.display();

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

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        // name
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        //Title
        var formattedGraduation = HTMLschoolDegree.replace("%data%", education.schools[school].graduation);
        // Dates
        var formattedYears = HTMLschoolDates.replace("%data%", education.schools[school].years);
        //location
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        //description
        var formattedDescription = HTMLschoolMajor.replace("%data%", education.schools[school].city);

        var all = formattedName + formattedGraduation + formattedYears + formattedLocation + formattedDescription;
        $("education-entry:last").append(all);
    }
}
education.display();
