const menInput = document.getElementById("men")
const womenInput = document.getElementById("women")
const kidsInput = document.getElementById("kids")
const durationInput = document.getElementById("duration")
const resultSection = document.getElementById("result")
const checkboxes = document.getElementsByName('meat')

//defines the base value of meat that men will eat
function defineMeatMen(duration) {
    let meatsG = 0
    for(let checkbox in checkboxes) {
        if(checkboxes[checkbox].checked == true && checkboxes[checkbox].id == "beef") {
            if(duration >= 6 ) {
                meatsG += 320
            } else {
                meatsG += 240
            }
        } else if(checkboxes[checkbox].checked == true && checkboxes[checkbox].id == "chicken"){
            if(duration >= 6 ) {
                meatsG += 270
            } else {
                meatsG += 190
            }
            
        } else if(checkboxes[checkbox].checked == true && checkboxes[checkbox].id == "pork"){
            if(duration >= 6 ) {
                meatsG += 300
            } else {
                meatsG += 210
            }
        } else {
            meatsG += 0
        }
    }
    return meatsG
}

//defines the base value of meat that women will eat
function defineMeatWomen(duration) {
    let meatsG = 0
    for(let checkbox in checkboxes) {
        if(checkboxes[checkbox].checked == true && checkboxes[checkbox].id == "beef") {
            if(duration >= 6 ) {
                meatsG += 220
            } else {
                meatsG += 140
            }
        } else if(checkboxes[checkbox].checked == true && checkboxes[checkbox].id == "chicken"){
            if(duration >= 6 ) {
                meatsG += 170
            } else {
                meatsG += 120
            }
            
        } else if(checkboxes[checkbox].checked == true && checkboxes[checkbox].id == "pork"){
            if(duration >= 6 ) {
                meatsG += 200
            } else {
                meatsG += 110
            }
        }else {
            meatsG += 0
        }
    }
    return meatsG
}

//defines total meat that will be eaten
function calculateTotalMeat(menNumber, womenNumber, kidsNumber, duration) {
        const menMeat = defineMeatMen(duration) * menNumber
        const womenMeat = defineMeatWomen(duration) * womenNumber
        const kidsMeat = (defineMeatMen(duration) * kidsNumber) / 2
        const totalMeat = menMeat  + womenMeat + kidsMeat
        return totalMeat
}

//defines the base value of beer that people will drink
function defineBeerPerPerson(duration) {
    if(duration >= 6) {
        return 2000;
    } else if(duration > 0){
        return 1200;
    } else {
        return 0;
    }
}

//defines total beer that will be drink
/* the calcules are made separeted because if the input value is undefined it does not generate a NaN
or calculate wrong */
function calculateTotalBeer(menNumber, womenNumber, duration) {
    const menBeer = defineBeerPerPerson(duration) * menNumber
    const womenBeer =  defineBeerPerPerson(duration) * womenNumber
    const totalBeer = menBeer + womenBeer
    return totalBeer
}
//defines the base value of soda/water that people will drink
function defineDrinksPerPerson(duration) {
    if(duration >= 6) {
        return 1500;
    } else if(duration > 0){
        return 1000;
    } else {
        return 0;
    }
}
//defines total beer that will be drink
/* the calcules are made separeted because if the input value is undefined it does not generate a NaN
or calculate wrong */
function calculateTotalDrinks(menNumber, womenNumber, kidsNumber, duration) {
    const menDrinks = defineDrinksPerPerson(duration) * menNumber
    const womenDrinks = defineBeerPerPerson(duration) * womenNumber
    const kidsDrinks = defineDrinksPerPerson(duration) / 2 * kidsNumber
    const totalDrinks = menDrinks + womenDrinks + kidsDrinks
    return totalDrinks
}

//verify negative values
function verifyInvalid(menNumber, womenNumber, kidsNumber) {
    if(menNumber < 0 || womenNumber < 0 || kidsNumber < 0) {
        return true
    } else {
        return false
    }
}

//calculates how much meat, beers and soda/water will be necessary for a barbecue
function calculate() {
    const menNumber = menInput.value 
    const womenNumber = womenInput.value
    const kidsNumber = kidsInput.value
    const duration = durationInput.value
    if(verifyInvalid(menNumber, womenNumber, kidsNumber) == true) {
        resultSection.innerHTML = `<p>Por favor, não digite valores negativos</p>` 
    } else {
        const totalMeat = calculateTotalMeat(menNumber, womenNumber, kidsNumber, duration)
        const totalBeer = calculateTotalBeer(menNumber, womenNumber, duration)
        const totalDrinks = calculateTotalDrinks(menNumber, womenNumber, kidsNumber, duration)
        resultSection.innerHTML = `<p>${totalMeat/1000}Kg de carne</p>
                                <p>${Math.ceil(totalBeer/355)} Latas de Cerveja</p>
                                <p>${Math.ceil(totalDrinks/2000)} Garrafas de 2l Bebidas</p>`
    }
}