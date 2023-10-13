

function convert() {

    let cmVal = Number(document.getElementById("input").value)
    let inVal = cmVal / 2.54
    let result = document.getElementById("result")
    result.innerHTML = inVal.toFixed(2) + "inches"
}

alert("converted");