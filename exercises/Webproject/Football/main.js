"use strict";

let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs",
    plays:"Kansas City, MO"},
];

    window.onload = function () {
        loadTeamsDropdown();
    };
    
    function loadTeamsDropdown() {
        const teamsList = document.getElementById("teamsList");
        teams.sort();
        teams.sort(function(a, b) {
            if (a.name < b.name) return -1;
            else if (a.name == b.name) return 0;
            else return 1;
        });
        
       for (const team of teams) {
        let option = new Option(team.name, team.code);
        teamsList.appendChild(option);
       }
        
    }

    function displayTeams(event) {
        event.preventDefault();
        const teamsList = document.getElementById("teamsList");
       const teamCode = teamsList.value;
       for (let index = 0; index < teams.length; index++) {
        const team = teams[index];
        if (team.code == teamCode) {
            const messageParagraph = document.getElementById("message");
            messageParagraph.innerText = `You selected ${team.name} (${team.code}) who play in ${team.plays}`;
        }
       }
    }
    

    function handleChange() {
        console.log("changed");
    }