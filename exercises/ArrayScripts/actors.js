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
            const academyMember = academyMembers[index];
            if (academyMember.memID == memId) {
                return academyMember;
            }
        }
    }
    let findId = getMemberId(academyMembers, 187);
    console.log(findId.name);

    // Who has have been in at least 3 films?
    let famousActors = [];

    for (let index = 0; index < academyMembers.length; index++) {
        const academyMember = academyMembers[index];
        if (academyMember.films.length = 3) {
            famousActors.push(academyMember.name);
        }
    }

    // Who has a name that starts with "Bob"?
    function getMemberName(academyMembers, Name) {
        
        
    }