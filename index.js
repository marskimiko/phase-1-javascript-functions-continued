function saturdayFun(activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`)
}


function mondayWork (act = 'go to the office') {
    return (`This Monday, I will ${act}.`)
}

function wrapAdjective (str = '*') {
    return function (adjective = 'special') {
        return `You are ${str}${adjective}${str}!`
    }
}
