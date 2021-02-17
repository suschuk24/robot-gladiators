// Game States
// "WIN" - Player robot has defeatewd all enemy robots
//  * fight all enemy robots
//  * defeat each enemy robot
// "LOSE" - PLayer robot's health is zero or less

window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
window.alert("Hello " + playerName + "! Welcome to Robot Gladiators. Prepare to battle to the death!")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // Show player stats
      
      // ask user if they'd liked to fight or run
      var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if user picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("It costs $10 to skip a fight. Are you sure?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = Math.max(0, playerMoney - 10);
          console.log("playerMoney", playerMoney)
          break;
        }
      }
        
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = Math.max(0, enemyHealth - playerAttack);
      
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = Math.max(0, playerHealth - enemyAttack);
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
     
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' has ' + playerHealth + ' health remaining, and $' + playerMoney+ ' in the bank.');
      }
    }
  };
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Prepare For Round " + (i + 1));

        var pickedEnemyName = enemyNames[i];
        enemyHealth = Math.floor(Math.random() * 100);
        console.log("randomized enemy health", enemyHealth)

        fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}