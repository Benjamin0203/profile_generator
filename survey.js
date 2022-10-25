const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = {};

rl.question('What do you think of Node.js? ', (answer) => {
  result['What do you think of Node.js?'] = answer;
  rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
    result["What's your name? Nicknames are also acceptable :)"] = answer;
    rl.question("What's an activity you like doing? ", (answer) => {
      result["What's an activity you like doing?)"] = answer;
      rl.question("What do you listen to while doing that? ", (answer) => {
        result["What do you listen to while doing that?"] = answer;
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
          result["Which meal is your favourite (eg: dinner, brunch, etc.))"] = answer;
          rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
            result["What's your favourite thing to eat for that meal?"] = answer;
            rl.question("Which sport is your absolute favourite? ", (answer) => {
              result["Which sport is your absolute favourite?"] = answer;
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                result["What is your superpower? In a few words, tell us what you are amazing at!"] = answer;
                console.log("Thank you for your valuable feedback: \n");
                console.log(result);
                rl.close();
              });  
            });  
          }); 
        }); 
      }); 
    }); 
  });
});


