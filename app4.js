//Create an age calculator function

let ageCal = (birdthYear, birdthMonth, birdthdate) => {
    let yearAge = 2023 - birdthYear
    let monthAge = 12 - birdthMonth
    let dayAge = 30 - birdthdate

    return `Your age is ${yearAge} years, ${monthAge} month and ${dayAge} days`
}

console.log(ageCal(1998, 9 , 10));