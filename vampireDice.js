//=============================================================================
// vampireDice.js 0.5
//=============================================================================

/*:
 * @plugindesc D10 Dice system based on White Wolf Pen & Paper RPG 
 * @author Andrea Corinti
 *
 * @help To call the dice roll, copy&paste the following in a script event:
 * 
 * == BASIC USAGE ==
 * 
 * //
 * vampireDice (number or rolls, difficulty)
 * $gameMessage.add("Your rolls: " + tiri + " and your successes: " + successi);
 * tiri = [];
 * successi = 0;
 * //
 * 
 * don't forget to resetting the variables (see the last two lines above)
 * 
 * == USING PARAMETRES ==
 * 
 * Using 
 * 
 * vampireDice ($gameActors.actor(1).param[7], 6)
 *  
 * you'll get a number of dice rolls equivalent to first character's agility value, 
 * with a difficulty of six.
 * 
 * == USING IF ==
 * 
 *  if (successi == 0) {
 *      $gameMessage.add("Combattimento casuale");
 *  } else if (successi == 1) {
 *      $gameMessage.add("Riesci a nutrirti un pochino");
 *  } else if (successi == 2) {
 *      $gameMessage.add("Riesci a nutrirti a metà");
 *  } else {
 *      $gameMessage.add("I punti sangue tornano al massimo!");
 *  }
 * 
 * 
 */

let successi = 0;
let tiri = [];

function vampireDice (dadi, diff) {

    for (i=0; i < dadi; i++) {
        let tiro = Math.ceil(Math.random()*10);
        tiri.push(tiro);
        if (tiro >= diff) {
            successi++;
        }

    }

    return "Hai fatto questi tiri: " + tiri + " e totalizzato " + successi + " successi.";

};

//console.log(vampireDice(3,6));
