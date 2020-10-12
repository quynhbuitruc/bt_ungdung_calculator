function addition() {
    let x = document.getElementById("so1").value;
    console.log(x);
    let y = document.getElementById("so2").value;
    console.log(y);
    let tong = x + y;
    document.getElementById("hienthi").innerText = "Result addition :" + " " + tong;
}