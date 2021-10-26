
var readlineSync = require('readline-sync');
const chalk = require('chalk');
var username = readlineSync.question('Enter Your Name: ');

console.log(chalk.red('Cyber Quiz'));
console.log(chalk.yellow('Write the correct option.'))
console.log('Points:  Correct: +5   Incorrect: -2')
console.log('');

var questions = [
  {
    question: ` What is cyber security?`, A: 'Provides security against malware', B:
      'Provides security against cyber-terrorists', C: 'Protects a system from cyber attacks', D: 'All of the above', answer: 'd'
  },
  {
    question: `What does cyber security protect?`, A: ' Criminals', B:
      ' Internet-connected systems', C: 'Hackers', D: 'None of the above', answer: 'a'
  },
  { question: ` Who is the father of computer security?`, A: 'August Kerckhoffs', B: 'Bob Thomas', C: 'Robert', D: ' Charles', answer: 'a' },
  {
    question: `Which of the following is an objective of network security?`, A: 'Confidentiality', B:
      'Integrity', C: 'Availability', D: 'All of the above', answer: 'd'
  },
  {
    question: `Which of the following is a type of cyber security?`, A: 'Cloud Security', B:
      'Network Security', C: 'Application Security', D: 'All of the above', answer: 'd'
  },

];
var score = 0;
var best = 5;

for (var i = 0; i < questions.length; i++) {
  var n = i + 1;
  console.log(chalk.inverse(n + '. ' + questions[i].question));
  console.log('[a,b,c,d]');
  console.log(chalk.cyan('A: ' + questions[i].A));
  console.log(chalk.cyan('B: ' + questions[i].B));
  console.log(chalk.cyan('C: ' + questions[i].C));
  console.log(chalk.cyan('D: ' + questions[i].D));
  console.log('');
  var answer = readlineSync.question('Answer: ');

  if (answer.toLowerCase() === questions[i].answer.toLowerCase()) {
    console.log(chalk.bgGreen('Correct'));
    score = score + 5;
  } else {
    console.log(chalk.bgRed('Incorrect'));
    score = score - 2;
  }
}
if (score > best) {
  console.log(chalk.yellow('Congratulations ! This is the best score \n'))
  best = score
}
console.log(chalk.red(username + ' your final score is: ' + score));