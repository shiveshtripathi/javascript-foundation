'use strict'

// // let admin
// // let name = 'John'
// // admin = name

// // alert(admin)

// // let ourPlanetName
// // let currentUserName

// console.log(favoriteAnimal('Goat'))

// function favoriteAnimal(animal) {
//   return animal + ' is my favorite animal!'
// }

// const myArray = ['I', 'love', 'chocolate', 'frogs']
// const madeAString = myArray.join(' ')
// console.log(madeAString)

// // function draw() {
// //   ctx.clearRect(0, 0, WIDTH, HEIGHT)
// //   for (let i = 0; i < 100; i++) {
// //     ctx.beginPath()
// //     ctx.fillStyle = 'rgb(255 0 0 / 50%)'
// //     ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI)
// //     ctx.fill()
// //   }
// // }

// // draw()

// function showName(name) {
//   let properCase
//   let partName
//   let properPartName
//   let myArray = name.split(' ')
//   for (let i = 0; i < myArray.length; i++) {
//     partName = myArray[i]
//     properPartName = partName[0].toUpperCase() + partName.slice(1).toLowerCase()
//     console.log(properPartName)
//     if (i === 0) properCase = properPartName + ' '
//     else properCase = properCase + properPartName + ' '

//     console.log(properCase)
//   }
//   console.log(myArray)
//   return properCase
// }

// console.log(showName('shivesh'))

function lastLetter(name) {
  let x = name[name.length - 1]
  //   console.log(name[-2])
  return x
}

console.log(lastLetter(123))
