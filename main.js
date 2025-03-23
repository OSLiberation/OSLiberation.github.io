window.onload = function() {
    
// document.getElementById("sinceStart").innerHTML = `There have been ${Math.floor((currentDate - termStart) / MILLISECONDS_IN_A_DAY)} days since the start of the Trump presidency.`
// document.getElementById("untilOver").innerHTML = `There are  ${Math.floor((termEnd - currentDate) / MILLISECONDS_IN_A_DAY)} days left.`
}

const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24

const termStart = new Date(2025,0,20)
const termEnd = new Date(2029,0,20)
const currentDate = new Date()



// console.log((currentDate - termStart) / MILLISECONDS_IN_A_DAY)
console.log(`There have been ${Math.floor((currentDate - termStart) / MILLISECONDS_IN_A_DAY)} days since the start of the Trump presidency.`)
console.log(`There are  ${Math.floor((termEnd - currentDate) / MILLISECONDS_IN_A_DAY)} days left.`)

let sinceStart = document.getElementById("sinceStart")
let untilOver = document.getElementById("untilOver")


// document.getElementById("sinceStart").innerHTML = `There have been ${Math.floor((currentDate - termStart) / MILLISECONDS_IN_A_DAY)} days since the start of the Trump presidency.`
// document.getElementById("untilOver"),untilOver.innerHTML = `There are  ${Math.floor((termEnd - currentDate) / MILLISECONDS_IN_A_DAY)} days left.`