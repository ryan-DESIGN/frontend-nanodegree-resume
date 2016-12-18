//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var bio = {
  "name" : "Ryan",
  "role" : "Developer",
  "contacts" : {
        "mobile": "xxx-xxx-xxxx",
        "email": "xx@xx.mail", 
        "github": "@xxxxx",
        "twitter": "@xxxxxx",
        "blog": "http://",
        "location": "X City"
  },
  "welcomeMessage": "Thanks for checking out my resume.", 
  "skills" : ["writing", "coding", "painting"],
  "biopic": "images/fry.jpg",
  "display": function(){
        //Displaying name
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        $('#name').append(formattedName)
        //Displaying role
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        $('#header').append(formattedRole)
        //Displaying contact details
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedBlog, formattedLocation)
        //Displaying Welcome Message
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('#header').append(formattedWelcomeMessage)
        //Displaying Skills section
        $('#header').append(HTMLskillsStart)
        bio.skills.forEach(function(skillItem){
          var formattedSkill = HTMLskills.replace('%data%', skillItem)
          $('#header').append(formattedSkill)
        })
        //Displaying picture
        var formattedBioPic = HTMLbioPic.replace("%data%", contactInfo.bioPic);
  }
}
bio.display

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var education = {
    "schools": {
       "name" : "College",
       "location" : "Earth",
       //"degree" : "Computer Information Systems",
       "majors": "Computer Information Systems",
       "dates": 2010-2012, //(works with a hyphen between them)
       "url": "#"
    },
    "onlineCourses": {
       "title" : "Front-End Web Development",
       "school" : "Udacity",
       "dates" : "2016",
       "url": "string"
    },
  "display": function(){
    $('#')
  }
}
education.display

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var work = {
   "jobs": {
             "one" : {
               "employer": "string",
               "title": "string" ,
               "location": "string", 
               "dates": "string",
               "description": "string", 
             },     
             "two": {
               "employer": "string",
               "title": "string" ,
               "location": "string", 
               "dates": "string",
               "description": "string", 
             },
   },

  "display": function(i){
    var formattedWorkStart = HTMLworkStart;
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkStart, formattedEmployer, formattedTitle, formattedLocation, formattedDates, formattedDescription);

    $("#main").append(work["jobs"]).append(work.title);


    work.jobs.forEach(work.display);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var projects = {
      "projects": [
           {
            "title": "Game", 
            "dates": "2016", //(works with a hyphen between them)
            "description": "tank game",
            "images": {//array with string urls

            },
          },
          {
            "title": "Maps", 
            "dates": "2016", //(works with a hyphen between them)
            "description": "map locator",
            "images": {//array with string urls

            },
          },
      ],
      "display": function(){
          $("#projects").append(HTMLprojectStart);
          projects.forEach(function(prj) {
              var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects[prj].title)
              var formattedProjectDates = HTMLprojectDates.replace("%data%", project[prj].dates)
              var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project[prj].description)
              projects.images.forEach(function(img) {
                  var formattedProjectImage = HTMLprojectImage.replace("%data%", project[prj].img)
                  $('#projects').append(formattedProjectImage);
              }
              )
          }
          )
      }
}

/*
All of your code for adding elements to the 
resume should be contained within functions.
*/



//<div id=”mapDiv”>