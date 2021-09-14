var input = process.argv[2];

function reverse(input) {
  return input.split('').reverse().join('');
}

if (input)
  console.log(reverse(input));


