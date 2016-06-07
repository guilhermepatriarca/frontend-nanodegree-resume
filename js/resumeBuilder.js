/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var awseomeThoughts = "I am Guilherme and I am AWESOME!"
// console.log(awseomeThoughts);
// var funToughts = awseomeThoughts.replace("AWESOME", "FUN");
// console.log(funToughts);
// //$("#main").append(funToughts);
// var name = "Guilherme Patriarca";
// var role = "Web Developer";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
//
// var skills = ["AngularJs","JavaScript"];
//$("#main").append(skills);
//$("#main").append(skills[0]);
//$("#main").append(skills.length);
//
var bio = {
    "name": "Guilherme",
    "role": "Web Developer",
    "contacts": {
        "mobile": "965547869",
        "email": "guilhermejmpatriarca@gmail.com",
        "location": "Portugal"
    },
    "welcomeMessage": "Hello welcome",
    "skills": ["AngularJs", "JavaScript", "HTML"],
    "bioPic": "images/fry.jpg"
};
//$("#main").append(bio.name);

// var work ={};
// work.position="Estágio";
// work.employer="Sasuc";
// work.years="1";
//$("#main").append(work["position"]);

// education["name"] ="Instituto Miguel Torga";
// education["years"]="2012-2015";
// education["city"]="Coimbra";
//$("#main").append(education.name);
// education JSON
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
console.log(bio.skills.length)
if (bio.skills.length > 0) {
    $("header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}
