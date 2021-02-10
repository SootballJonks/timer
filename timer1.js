const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  let sec = args[i];
  if (sec > 0) {
    setTimeout(() => {
      process.stdout.write('.\n');
    }, 1000 * sec);
  }
}