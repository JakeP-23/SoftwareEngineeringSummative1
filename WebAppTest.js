function checkTradeEligibility() {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var input3 = document.getElementById('input3').value;

    // Add your trade eligibility logic here
    // Example: Check if input1 is greater than input2 and input3 is not equal to 0
    if (input1 > 25000000 && input2 == 1 && input3 == "BORR") {
        showResult("Trade is eligible");
    } else {
        showResult("Trade is not eligible");
    }
}

function showResult(message) {
    var resultElement = document.getElementById('result');
    resultElement.textContent = message;
}