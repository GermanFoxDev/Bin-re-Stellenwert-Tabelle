var b1 = 0
var b2 = 0
var b3 = 0
var b4 = 0
var b5 = 0
var b6 = 0
var b7 = 0
var b8 = 0

var A = 0

function Update() {
  A = 0
  document.getElementById("A8").innerHTML = "0";
  document.getElementById("A7").innerHTML = "0";
  document.getElementById("A6").innerHTML = "0";
  document.getElementById("A5").innerHTML = "0";
  document.getElementById("A4").innerHTML = "0";
  document.getElementById("A3").innerHTML = "0";
  document.getElementById("A2").innerHTML = "0";
  document.getElementById("A1").innerHTML = "0";

  if (b8 == 1) {
    A = A + 1
    document.getElementById("A8").innerHTML = A.toString();
  }
  if (b7 == 1) {
    A = A + 2
    document.getElementById("A7").innerHTML = A.toString();
  } else {
    document.getElementById("A7").innerHTML = A.toString();
  }
  if (b6 == 1) {
     A = A + 4
    document.getElementById("A6").innerHTML = A.toString();
  } else {
    document.getElementById("A6").innerHTML = A.toString();
  }
  if (b5 == 1) {
     A = A + 8
    document.getElementById("A5").innerHTML = A.toString();
  } else {
    document.getElementById("A5").innerHTML = A.toString();
  }
  if (b4 == 1) {
     A = A + 16
    document.getElementById("A4").innerHTML = A.toString();
  } else {
    document.getElementById("A4").innerHTML = A.toString();
  }
  if (b3 == 1) {
     A = A + 32
    document.getElementById("A3").innerHTML = A.toString();
  } else {
    document.getElementById("A3").innerHTML = A.toString();
  }
  if (b2 == 1) {
     A = A + 64
    document.getElementById("A2").innerHTML = A.toString();
  } else {
    document.getElementById("A2").innerHTML = A.toString();
  }
  if (b1 == 1) {
     A = A + 128
    document.getElementById("A1").innerHTML = A.toString();
  } else {
    document.getElementById("A1").innerHTML = A.toString();
  }
}
function Re() {
  document.getElementById("B8").innerHTML = "0";
  document.getElementById("B7").innerHTML = "0";
  document.getElementById("B6").innerHTML = "0";
  document.getElementById("B5").innerHTML = "0";
  document.getElementById("B4").innerHTML = "0";
  document.getElementById("B3").innerHTML = "0";
  document.getElementById("B2").innerHTML = "0";
  document.getElementById("B1").innerHTML = "0";
  b1 = 0
  b2 = 0
  b3 = 0
  b4 = 0
  b5 = 0
  b6 = 0
  b7 = 0
  b8 = 0
  Update()
}

function B1() {
  if (b1 == 0) {
    b1 = 1
    document.getElementById("B1").innerHTML = "1";
  } else {
    b1 = 0
    document.getElementById("B1").innerHTML = "0";
  }
  Update()
}

function B2() {
  if (b2 == 0) {
    b2 = 1
    document.getElementById("B2").innerHTML = "1";
  } else {
    b2 = 0
    document.getElementById("B2").innerHTML = "0";
  }
  Update()
}

function B3() {
  if (b3 == 0) {
    b3 = 1
    document.getElementById("B3").innerHTML = "1";
  } else {
    b3 = 0
    document.getElementById("B3").innerHTML = "0";
  }
  Update()
}

function B4() {
  if (b4 == 0) {
    b4 = 1
    document.getElementById("B4").innerHTML = "1";
  } else {
    b4 = 0
    document.getElementById("B4").innerHTML = "0";
  }
  Update()
}

function B5() {
  if (b5 == 0) {
    b5 = 1
    document.getElementById("B5").innerHTML = "1";
  } else {
    b5 = 0
    document.getElementById("B5").innerHTML = "0";
  }
  Update()
}

function B6() {
  if (b6 == 0) {
    b6 = 1
    document.getElementById("B6").innerHTML = "1";
  } else {
    b6 = 0
    document.getElementById("B6").innerHTML = "0";
  }
  Update()
}

function B7() {
  if (b7 == 0) {
    b7 = 1
    document.getElementById("B7").innerHTML = "1";
  } else {
    b7 = 0
    document.getElementById("B7").innerHTML = "0";
  }
  Update()
}

function B8() {
  if (b8 == 0) {
    b8 = 1
    document.getElementById("B8").innerHTML = "1";
  } else {
    b8 = 0
    document.getElementById("B8").innerHTML = "0";
  }
  Update()
}