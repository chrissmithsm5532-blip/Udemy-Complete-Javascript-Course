// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that rece`ives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
// */

// const [players1, players2] = game.players;

// //console.log(players1);
// //console.log(players2);

// const [gk, ...fieldplayers] = players1;
// //console.log(gk);
// //console.log(fieldplayers);

// const allplayers = [...players1, ...players2];
// //console.log(allplayers);

// players1final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//console.log(players1final);

//const { team1: team1, x: draw, team2: team2 } = game.odd;
//console.log(team1);

//const team1 = game.odds.team1;
//console.log(team1);

//const { team1: team1, x: draw, team2: team2 } = game.odds;
//console.log(team1, draw, team2);

/*function printGoals(...playerNames) {
  for (let x = 0; x < playerNames.length; x++) {
    for (let i = 0; i < game.scored.length; i++) {
      console.log(
        playerNames[x] === game.scored[i] && `${playerNames[x]} scored!!!`
      );
    }
  }
}*/

//printGoals('Gnarby', 'test', 'Lewandowski');

// console.log(game.scored);
// console.log(game.scored[0]);

// console.log(Object.keys(game.scored));

// //const playerKey = Object.key(game.scored);

// for (const [entrynumber, player] of game.scored.entries()) {
//   console.log(`Player ${player} scored goal number ${entrynumber + 1} `);
// }

// /*  (game.odds)
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// */

// let average = 0;

// function calculateAverage(Array) {
//   for (i = 0; i < Array.length; i++) {
//     //console.log(Array[i]);
//     average += Array[i];
//   }
//   average = average / Array.length;
//   console.log(average);
// }

//calculateAverage([4, 5, 6, 8, 9, 9]);

//calculateAverage(Object.values(game.odds));

//console.log(game.odds);
/*
for (const [team, odd] of Object.entries(game.odds)) {
  if (team == 'x') {
    console.log(`odds of a draw are: ${odd}`);
  } else if (team == 'team1') {
    console.log(`odds of victory for ${game.team1}: ${odd}`);
  } else console.log(`odds of victory for ${game.team2}: ${odd}`);
}

*/
/*
for (const [team, odd] of Object.entries(game.odds)) {
  if (team == 'x') {
    console.log(`odds of a draw are: ${odd}`);
  } else
    console.log(`odds of victory for ${game.team)}: ${odd}`);
  


scorers = {
  players: game.scored,
};*/

//sets can hold arrays

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

//const events = [...new Set(gameEvents.values())];

//console.log(events);

// gameEvents.delete(64);

//console.log(gameEvents);

//console.log(gameEvents.get(17));

// // const time = [...gameEvents.keys()].pop();

// // console.log(time);

// // console.log(
// //   `an event happened , on average, every ${Math.round(
// //     time / gameEvents.size
// //   )} minutes`
// // );

// // console.log(calculateAverage([...gameEvents.keys()]));

// //average = calculateAverage(...gameEvents.keys());
// //console.log(average);

// //console.log(...gameEvents);

// //const avereage = calculateAverage(gameEvents.keys);
// //console.log(average);

// // //console.log(...gameEvents.values());

// // for (const [k, e] of gameEvents) {
// //   // const [k, e] = event;
// //   // console.log(e);

// //   if (k < 45) console.log(`[FIRST HALF] ${k}: ${e}`);
// //   else console.log(`[SECOND HALF] ${k}: ${e}`);
// // }
// // console.log(event.);

// //  console.log(gameEvents[event].keys());
// // console.log(gameEvents[event].values());

// let GameEvents = [...new Set(gameEvents.values())];

// console.log(GameEvents);

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(
//   `An event happened, on average, every ${
//     90 / new Set(gameEvents).size
//   } minutes`
// );

// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// //       [FIRST HALF] 17: ⚽️ GOAL

// for (let [eventTime, Event] of gameEvents) {
//   if (eventTime < 45) {
//     console.log(`FIRST HALF: ${eventTime}: ${Event}`);
//   } else console.log(`SECOND HALF: ${eventTime}: ${Event}`);
// }

//const time = min <=45 ? 'FIRST' : 'SECOND'

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
 
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
 
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
 
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
 
HINT 1: Remember which character defines a new line in the textarea 😉     /n
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
 
Afterwards, test with your own test data!
 
GOOD LUCK 😀
*/

//const names = name.split(' ');
let counter;

const convertText = function (Data) {
  const words = Data.split('\n');

  for (const word of words) {
    const names = word.split('_');
    const nameUpper = [];
    for (let n of names) {
      n = n.toLowerCase();
      nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    counter++;
    console.log(
      nameUpper.join(' ') + '   '.padEnd(10, ' ') + '✅'.repeat(counter)
    );
  }
};

document.getElementById('myButton').addEventListener('click', function () {
  const inputtedValue = document.getElementById('textbox').value;
  counter = 0;
  convertText(inputtedValue);
});
