function findLargest(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);
    let n4 = Number(document.getElementById("num4").value);
    let n5 = Number(document.getElementById("num5").value);

    let largest;
    if (n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5) {
        largest = n1;
    }
    else if (n2 >= n1 && n2 >= n3 && n2 >= n4 && n2 >= n5) {
        largest = n2;
    }
    else if (n3 >= n1 && n3 >= n2 && n3 >= n4 && n3 >= n5) {
        largest = n3;
    }
    else if (n4 >= n1 && n4 >= n2 && n4 >= n3 && n4 >= n5) {
        largest = n4;
    }
    else {
        largest = n5;
    }

    document.getElementById("result").innerHTML = "Largest Number is: " + largest;
}
