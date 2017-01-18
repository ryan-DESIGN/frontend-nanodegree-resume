var bio = {
    "name": "Ryan Last verylast",
    "role": "Developer",
    "contacts": {
        "mobile": "xxx-xxx-xxxx",
        "email": "xx@xx.mail",
        "github": "@xxxxx",
        "twitter": "@xxxxxx",
        "blog": "http://blogger.com",
        "location": "Nuuk, Greenland"
    },
    "welcomeMessage": "Thanks for checking out my resume.",
    "skills": ["writing",
        "coding",
        "painting"
    ],
    "biopic": "images/fry.jpg",
    "display": function() { //Displaying name
        var formattedName = HTMLheaderName.replace('%data%', bio.name); //Displaying role
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role); //Displaying contact details
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $('#topContacts, #footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedBlog, formattedLocation); //Displaying Welcome Message
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage); //Displaying Skills section
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skillItem) {
            var formattedSkill = HTMLskills.replace('%data%', skillItem);
            $('#header').append(formattedSkill);
        }); //Displaying picture
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $('#header').append(formattedBioPic, formattedRole, formattedName, formattedWelcomeMessage); 
        //I assume there's a desire to bunch all these into a single append() call on jQuery to improve
        //load time. That would make it necessary to somehow Order the site as CSS flex boxes that could be
        //rearranged to fit a design despite being loaded out of order.
    }
};
var education = {
    "schools": [{
            "name": "College",
            "location": "Mordor, WA",
            "degree": "Associate's",
            "majors": ["just ", "Computer Information Systems",
                "only one"
            ],
            "dates": "2010-2012",
            "url": "http://blank.nowhere"
        },
        {
            "name": "University",
            "location": "London, but not England",
            "degree": "not quite a Bachelor's",
            "majors": ["Drawing Things",
                "Just that one"
            ],
            "dates": "not 2010-2012",
            "url": "http://blank.nohow"
        }
    ],
    "onlineCourses": [{
            "title": "Front-End Web Development",
            "school": "Udacity",
            "dates": "2016",
            "url": "http://blankblank.blank.notarealsite"
        },

        {
            "title": "not Front-End Web Development",
            "school": "not Udacity",
            "dates": "maybe 2016",
            "url": "http://blankblank.blank.neitheristhis"
        }
    ],
    "display": function() {
        $('#education').append(HTMLschoolStart);
        education.schools.forEach(function(school) {
            $('.education-entry:last').append('<hr style="border-color:lime">');
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $('.education-entry:last').append(formattedSchoolName, formattedSchoolLocation, formattedSchoolDegree);
            school.majors.forEach(function(major) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
                $('.education-entry:last').append(formattedSchoolMajor);
            });
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSchoolURL = HTMLschoolURL.replace("%data%", school.url).replace("#", school.url);
            $('.education-entry:last').append(formattedSchoolDates, formattedSchoolURL);
        });
        $('#education').append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
            $('.education-entry:last').append('<hr style="border-color:yellow">');
            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', course.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', course.school);
            var formattedOnlineDates = HTMLonlineDates.replace('%data%', course.dates);
            var formattedOnlineURL = HTMLonlineURL.replace('%data%', course.url);
            $('.education-entry:last').append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates,
                formattedOnlineURL);
        });
    }
};
var work = {
    "jobs": [{
            "employer": "First Boss",
            "title": "First Title",
            "location": "North Pacific Ocean",
            "dates": "First Dates",
            "description": "First Description"
        },
        {
            "employer": "Second Boss",
            "title": "Second Title",
            "location": "Gulf of Mexico",
            "dates": "Second Dates",
            "description": "Second Description"
        }
    ],
    "display": function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedEmployer, formattedTitle, formattedLocation, formattedDates,
                formattedDescription);
        });
    }
};
var projects = {
    "projects": [ //Array OF Objects
        { //FIRST Object IN THE Array
            "title": "Game",
            "dates": "2016",
            "description": "tank game",
            "images": [ //Array OF Strings
                "images/projects/Game/game1.jpg", "images/projects/Game/game2.jpg", "images/projects/Game/game3.jpg"
            ]
        },

        { //SECOND Object IN THE Array
            "title": "Maps",
            "dates": "2016",
            "description": "map locator",
            "images": [ //Array OF Strings
                "images/projects/Maps/maps1.jpg", "images/projects/Maps/maps2.jpg", "images/projects/Maps/maps3.jpg"
            ]
        }
    ],
    "display": function() {
        var len = Object.keys(projects.projects).length;
        for (project = 0; project < len; project++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);
            try {
                var imagesLength = projects.projects[project].images.length;
                for (var i = 0; i < imagesLength; i++) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
                    $('.project-entry:last').append(formattedProjectImage);
                }
            } catch (err) {
                console.log("Yo!", err);
            }
        }
    }
};

/////////////CLICK METRICS/////////////////////////////////////////////////////////////////////////////
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

////////////////ADDING A MAP///////////////////////////////////////////////////////////////////////////////
$('#mapDiv').append(googleMap); 

//////////////INTERNATIONALIZING NAME - BUTTON/////////////////////////////////////////////////////////////
var inName = function(name) {
    var internationalized = "";
    if (typeof "name" === "string") {
        var holder = name.split(" ");
        console.log(holder[0], holder[1]); //Ryan Last
        holder[0] = holder[0].slice(0, 1).toUpperCase() + holder[0].slice(1).toLowerCase();
        console.log(holder[0]); //Ryan
        console.log(holder.length);
        holder.forEach(function(element) {
            console.log("ELEMENT: " + element);
        });
        if (holder.length >= 2) {
            for (i = 1; i < holder.length; i++) {
                holder[i] = holder[i].toUpperCase();
                console.log(holder[i]); //LAST
            }
            internationalized = holder.join(" ");
            console.log(holder);
        } else {
            console.log("Please enter a string with a last name!");
        }
    } else {
        console.log("Please enter a string instead of whatever this is an instanceof!");
    }
    return internationalized;
}; 

/////////////////////////FUNCTION CALLS/////////////////////////////////////////////////////////////////////
bio.display();
education.display();
work.display();
projects.display();

/////////////////////////CSS STYLING////////////////////////////////////////////////////////////////////////
$('div').css('background-color', '#331111');
$('h1').css('background-color', 'red').css('opacity', '.6');
$('h2').css('background-color', 'red').css('opacity', '.5');
$('h3').css('background-color', 'red').css('opacity', '.3');
$('*').css('font-family', 'Reem+Kufi').css('color', 'white').css('box-shadow', 'inset 0 0 5px red');
$('img').css('margin', "0 auto");