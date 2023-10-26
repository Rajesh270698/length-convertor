

function convert() {

    let cmVal = Number(document.getElementById("input").value)
    let inVal = cmVal / 2.54
    console.log(inVal)
    let result = document.getElementById("result")
    result.innerHTML = inVal.toFixed(2) + "inches"
}

alert("converted");
