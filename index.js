import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
  .prompt([{
    type: 'input',
    message: 'What is the URL you want to encode?',
    name: 'url',
  },
  {    
    type: 'input',
    message: 'What is the name of the output file (without extension)?',
    name: 'filename',
    default: 'qrmaker',
  },
  {
    type: 'rawlist',
    message: 'What is the output file format?',
    name: 'format',
    choices: ['png', 'svg', 'pdf', 'eps'],
    default: 'png',
  }
  ])
  .then((answers) => {
    //for testing error handling remove the comment from the line below
    //throw new Error("Testing error handling");
    const qr_svg = qr.image(answers.url, { type: answers.format });
    const output = qr_svg.pipe(fs.createWriteStream(`${answers.filename}.${answers.format}`));

    output.on('finish', () => {
      console.log(`QR code saved as ${answers.filename}.${answers.format}`);
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in this environment");
    } else {
      console.error(`Something went wrong: ${error.message}`);
    }
  });