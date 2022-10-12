let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
    ];

    // Who is the Academy Member whose ID is 187?
    console.log("The Academy Member is:");
    function getMemberId(academyMembers, memId) {
        for (let index = 0; index < academyMembers.length; index++) {
            const AcademyMember = academyMembers[index];
            if (AcademyMember.memID == memId) {
                return AcademyMember;
            }
        }
    }
    let findId = getMemberId(academyMembers, 187);
    console.log(findId.name);

    // Who has have been in at least 3 films?


    // Who has a name that starts with "Bob"?