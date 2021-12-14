circle1 = document.getElementById("circle1");
circle2 = document.getElementById("circle2");
circle3 = document.getElementById("circle3");

function changeBg1() {
    document.getElementById("mainDiv").style.background = "url('images/img.jpg') center";
    document.getElementById("mainDiv").style.backgroundSize = "cover";
    circle1.classList.add("circle-active");
    circle2.classList.remove("circle-active");
    circle3.classList.remove("circle-active");
    document.getElementById("nav").style.background = "var(--theme1)";
    document.getElementById("footer").style.background = "var(--theme1)";
}

function changeBg2() {
    document.getElementById("mainDiv").style.background = "url('images/mountain-gdd6daeba0_1920.jpg') center";
    document.getElementById("mainDiv").style.backgroundSize = "cover";
    circle2.classList.add("circle-active");
    circle1.classList.remove("circle-active");
    circle3.classList.remove("circle-active");
    document.getElementById("nav").style.background = "var(--theme2)";
    document.getElementById("footer").style.background = "var(--theme2)";
}

function changeBg3() {
    document.getElementById("mainDiv").style.background = "url('images/mountain-gc573b8e50_1920.jpg') center";
    document.getElementById("mainDiv").style.backgroundSize = "cover";
    circle3.classList.add("circle-active");
    circle2.classList.remove("circle-active");
    circle1.classList.remove("circle-active");
    document.getElementById("nav").style.background = "var(--theme3)";
    document.getElementById("footer").style.background = "var(--theme3)";
}