//read the third element as times to roll a dice


let timesToRoll = 0
let rolls = []
//if valid 3rd element, continue
process.argv[2] ? timesToRoll = process.argv[2] : console.log('invalid input'); process.exit()

console.log(`Rolled ${timesToRoll} dice: `)
for(let i = 0; i < timesToRoll; i++){

  rolls[i] = Math.floor(Math.random() * 6 + 1)

}
console.log(rolls.join())
 

//output the rolled values

