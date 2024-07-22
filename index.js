/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inpEl = document.getElementById("inp-el")
const btnEl = document.getElementById("btn-el")
const lenEl = document.getElementById("len-el")
const volEl = document.getElementById("vol-el")
const massEl = document.getElementById("mass-el")

function convertLength (p_num) {
    let convMeter = 0
    let convFeet = 0
    
    convFeet = p_num * 3.280839895
    convFeet = parseFloat(convFeet).toFixed(3)
    
    convMeter = p_num / 3.280839895
    convMeter = parseFloat(convMeter).toFixed(3)
    
    lenEl.innerHTML = `${p_num} meters = ${convFeet} feet | ${p_num} feet = ${convMeter} meters`
}

function convertVolume (p_num) {
    let convLiter = 0
    let convGallon = 0
    
    convGallon = p_num * 0.2641720524
    convGallon = parseFloat(convGallon).toFixed(3)
    
    convLiter = p_num / 0.2641720524
    convLiter = parseFloat(convLiter).toFixed(3)
    
    volEl.innerHTML = `${p_num} liters = ${convGallon} gallons | ${p_num} gallons = ${convLiter} liters`
}

function convertMass (p_num) {  
    let convKilogram = 0
    let convPound = 0
    
    convPound = p_num * 2.2046226218
    convPound = parseFloat(convPound).toFixed(3)
    
    convKilogram = p_num / 2.2046226218
    convKilogram = parseFloat(convKilogram).toFixed(3)
    
    massEl.innerHTML = `${p_num} kilos = ${convPound} pounds | ${p_num} pounds = ${convKilogram} kilos`
}

btnEl.addEventListener("click", function (){
    let num = parseInt(inpEl.value)
    convertLength(num)
    convertVolume(num)
    convertMass(num)
})