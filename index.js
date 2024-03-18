function countVowelsAndConsonants() {
    let inputString = document.getElementById("inputString").value.toLowerCase();
    let vowels = 0;
    let consonants = 0;
    for (let char of inputString) {
        if ('aeiou'.includes(char)) {
            vowels++;
        } else if (char >= 'a' && char <= 'z') {
            consonants++;
        }
    }
    document.getElementById("countString").innerHTML = `Vowels: ${vowels}, Consonants: ${consonants}`;
}

function checkPalindrome() {
    let inputString = document.getElementById("inputPalindrome").value.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedString = inputString.split('').reverse().join('');
    let result = (inputString === reversedString) ? 'Palindrome' : 'Not Palindrome';
    document.getElementById("palindromeString").innerHTML = result;
}

function calculateTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    let tipAmount = (subtotal * tipPercentage) / 100;
    let totalAmount = subtotal + tipAmount;
    document.getElementById("totalAmount").innerHTML = `Total Amount (including tip): $${totalAmount.toFixed(2)}`;
}

