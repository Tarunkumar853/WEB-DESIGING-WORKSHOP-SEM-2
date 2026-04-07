function generatePattern() {
    let n = parseInt(document.getElementById("num").value);
    let result = "";

    let output = document.getElementById("output");

    if (n <= 0) {
        output.innerText = "Please enter a number greater than zero";
        return;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result = result + j;
        }
        result += "\n";
    }

    document.getElementById("output").textContent = result;
}