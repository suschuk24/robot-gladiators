// Game States
// "WIN" - Player robot has defeatewd all enemy robots
//  * fight all enemy robots
//  * defeat each enemy robot
// "LOSE" - PLayer robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function(enemyName) {
    //Alert user they are starting a round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

    //if fight, then fight
    if (promptFight === "fight" || promptFight==="FIGHT"){
        
        //Subtract the value of playerAttack from enemyHealth and use the result to upate the value in enemyHelath variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " +enemyName+ ". " + enemyName+ " now has " +enemyHealth+ " health remaining."
        );

        //check enemy's health
        if(enemyHealth<= 0) {
            window.alert(enemyName+ "Has died!");
        }
        else {
            window.alert(enemyName+ " still has " +enemyHealth+" health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " +playerName+ ". " +playerName+ " now has " +playerHealth+ " health remaining."
        );

        //check player's health
        if(playerHealth <=0) {
            window.alert(playerName + " Has died!");
        }
        else {
            window.alert(playerName + " still has " +playerHealth +" health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes, leave
        if (confirmSkip) {
            window.alert(playerName +" has decided to skip this fight. Bye!");
            //penatlize for skip
            playerMoney = playerMoney - 2;
        }
    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
}    
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}