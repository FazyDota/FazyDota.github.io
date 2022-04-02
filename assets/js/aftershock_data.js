var aftershock_data = [
    [ "Anchor Smash","Tidehunter","46.45%",612,"51.47%","0.62%" ], 
    [ "Arc Lightning","Zeus","45.37%",1089,"59.41%","9.10%" ], 
    [ "Arcane Bolt","Skywrath Mage","47.72%",1055,"54.79%","3.31%" ], 
    [ "Ball Lightning","Storm Spirit","49.37%",624,"67.31%","15.00%" ], 
    [ "Blink Strike","Riki","48.76%",550,"49.64%","-2.37%" ], 
    [ "Chakram","Timbersaw","50.10%",1028,"62.84%","10.17%" ], 
    [ "Counterspell","Anti-Mage","52.28%",908,"65.09%","11.33%" ], 
    [ "Crypt Swarm","Death Prophet","47.86%",589,"54.67%","3.12%" ], 
    [ "Dark Pact","Slark","49.43%",868,"57.49%","5.15%" ], 
    [ "Death Pulse","Necrophos","49.91%",991,"57.42%","4.84%" ], 
    [ "Decay","Undying","47.19%",588,"53.23%","2.01%" ], 
    [ "Double Edge","Centaur Warrunner","48.97%",881,"56.87%","4.76%" ], 
    [ "Earthshock","Ursa","49.67%",526,"56.46%","4.00%" ], 
    [ "Ice Vortex","Ancient Apparition","52.01%",1013,"58.14%","4.51%" ], 
    [ "Life Drain","Pugna","46.66%",628,"54.62%","3.67%" ], 
    [ "Lightning Storm","Leshrac","46.36%",827,"51.03%","0.22%" ], 
    [ "Nether Blast","Pugna","45.78%",864,"55.21%","4.70%" ], 
    [ "Plague Ward","Venomancer","48.21%",562,"51.25%","-0.48%" ], 
    [ "Proximity Mines","Techies","50.20%",991,"69.93%","17.21%" ], 
    [ "Purifying Flames","Oracle","43.85%",1214,"50.16%","0.61%" ], 
    [ "Rocket Barrage","Gyrocopter","49.38%",1014,"58.48%","6.17%" ], 
    [ "Rolling Boulder","Earth Spirit","47.88%",720,"57.50%","5.94%" ], 
    [ "Scream Of Pain","Queen of Pain","47.20%",729,"56.93%","5.71%" ], 
    [ "Shadow Poison","Shadow Demon","43.61%",1318,"53.19%","3.76%" ], 
    [ "Shadowraze","Shadow Fiend","46.64%",616,"52.27%","1.33%" ], 
    [ "Shrapnel","Sniper","55.83%",584,"58.56%","3.02%" ], 
    [ "Soul Assumption","Visage","48.18%",558,"55.38%","3.67%" ], 
    [ "Spark Wraith","Arc Warden","49.36%",779,"51.99%","-0.31%" ], 
    [ "Spawn Spiderlings","Broodmother","44.97%",535,"52.90%","2.79%" ], 
    [ "Static Remnant","Storm Spirit","45.53%",1513,"62.79%","12.40%" ], 
    [ "Terrorize","Dark Willow","51.54%",781,"67.22%","13.83%" ], 
    [ "Timber Chain","Timbersaw","46.05%",523,"56.79%","6.14%" ], 
    [ "Whirling Axes (Melee)","Troll Warlord","50.21%",806,"63.90%","11.17%" ], 
    [ "Whirling Death","Timbersaw","50.41%",646,"63.16%","10.33%" ]
];

$(document).ready(function() {
    $('#aftershock_table').DataTable( {
        data: aftershock_data,
        "paging": false,
        columns: [
            { title: "Ability 2" },
            { title: "Hero 2" },
            { title: "Ability 2 WR" },
            { title: "Sample size" },
            { title: "Combined WR" },
            { title: "Synergy" }
        ]
    } );
} );