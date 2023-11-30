/* 

Filename: ComplexCodeExample.js

This is a complex code example that demonstrates various advanced JavaScript concepts and techniques. It is an implementation of a text-based adventure game with multiple levels and interactive gameplay.

Please note that due to the limitations of this text-based format, the code may not run properly and certain features may be missing or altered. It is highly recommended to run this code in a proper JavaScript environment or copy it into an HTML file.

*/

// Main game object
const game = {
  player: {
    name: 'Player',
    level: 1,
    health: 100,
    inventory: []
  },

  levels: [
    {
      id: 1,
      name: 'Level 1',
      description: 'Welcome to Level 1! You see a door to the north.',
      actions: {
        north: 'enterLevel2',
        look: 'lookAroundLevel1'
      }
    },
    {
      id: 2,
      name: 'Level 2',
      description: 'Congratulations! You made it to Level 2. There is a key on the ground.',
      actions: {
        south: 'enterLevel1',
        take: 'takeKey',
        look: 'lookAroundLevel2'
      }
    }
    // More levels can be added here...
  ],

  // Game methods
  enterLevel1() {
    console.log('Entering Level 1...');
    // Implement logic for entering Level 1
    // ...
  },

  enterLevel2() {
    console.log('Entering Level 2...');
    // Implement logic for entering Level 2
    // ...
  },

  lookAroundLevel1() {
    console.log('You see a door to the north.');
  },

  lookAroundLevel2() {
    console.log('There is a key on the ground.');
  },

  takeKey() {
    console.log('You took the key.');
    game.player.inventory.push('key');
  },

  // More game methods can be added here...
};

// Start the game
console.log('Welcome to the Complex Adventure Game!');
console.log('Please type your name to begin:');
game.player.name = prompt('Enter your name: ');
console.log(`Welcome, ${game.player.name}!`);

// Game loop
let currentLevel = game.levels[0];

while (true) {
  console.log(`\n===== ${currentLevel.name} =====`);
  console.log(currentLevel.description);
  console.log('What do you want to do?');
  console.log(`Available actions: ${Object.keys(currentLevel.actions).join(', ')}`);

  const input = prompt('Enter action: ');

  if (currentLevel.actions[input]) {
    const action = game[currentLevel.actions[input]];
    if (action) {
      action.call(game);
    } else {
      console.log('Invalid action!');
    }
  } else {
    console.log('Invalid action!');
  }
}