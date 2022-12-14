let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
];


    let cheapCourses = [];

    for (let index = 0; index < courses.length; index++) {
        const course = courses[index];
        if (course.Fee <= 50.00) {
           cheapCourses.push(course);
        }
    }

    console.log(cheapCourses);

    console.log("Courses $50 or less");
    for (let index = 0; index < cheapCourses.length; index++) {
        const course = cheapCourses[index];
        console.log(course.Title);
    }

    console.log("");
    //Courses in classroom 1
    console.log("Courses in classroom 1");

    for (let index = 0; index < courses.length; index++) {
        const course = courses[index];
        if (course.Location == "Classroom 1") {
            console.log(course.Title);
            
        }
    }
    




    //when does the PROG200 course start?
    console.log("The course starts on:");
    function getCourse(courses, courseId) {
        for (let index = 0; index < courses.length; index++) {
            const course = courses[index];
            if (course.CourseId == courseId) {
                return course;
            }
        }
    }

    let course = getCourse(courses, "PROG200");

    console.log(course.StartDate);

