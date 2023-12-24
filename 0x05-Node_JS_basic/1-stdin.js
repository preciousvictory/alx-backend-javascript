process.stdout.write('Welcome to Holberton School, what is your name?' + '\n');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('Your name is: ' + chunk);
  }
});

process.on('exit', function() {
  console.log('This important software is now closing');
});
