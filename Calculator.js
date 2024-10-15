let calculation = ""
function addToCalculation(added) {
  calculation += added
  document.getElementById("calculate").innerHTML = calculation
}
function finalCalculation() {
  try {
    if (calculation == eval(calculation) || eval(calculation) == undefined) {
      calculation = ""
      document.getElementById("calculate").innerHTML = "An Error Occured"
    } else {
      calculation = eval(calculation)
      document.getElementById("calculate").innerHTML = calculation
    }
  } catch(error) {
    calculation = ""
    document.getElementById("calculate").innerHTML = "An Error Occured"
  }
}