const tombol = document.getElementById("tUbahWarna");
tombol.addEventListener("click", function () {
    document.body.classList.toggle("ubah");
});
const tambahTombol = document.createElement("button");
const teksTombol = document.createTextNode("Random Color");
tambahTombol.appendChild(teksTombol);
tambahTombol.setAttribute("type", "button");
tombol.after(tambahTombol);
tambahTombol.addEventListener("click", function () {
    const r = Math.round(Math.random() * 255 + 1); //! dari 1 sampe 255
    const g = Math.round(Math.random() * 255 + 1); //! dari 1 sampe 255
    const b = Math.round(Math.random() * 255 + 1); //! dari 1 sampe 255
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// ! SLIDER
const slider = document.querySelector("input[name=sMerah]"); //!
const slider2 = document.querySelector("input[name=sHijau]"); //!
const slider3 = document.querySelector("input[name=sBiru]"); //!
slider.addEventListener("change", function () {
    //? .value digunakan untuk menerima semua yg ada di input
    //? dalam hal ini adalah min dan max
    //? kalo misal input yg lain brarti nerima apapun yg diisikan
    const r = slider.value;
    const g = slider2.value;
    const b = slider3.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
slider2.addEventListener("change", function () {
    const r = slider.value;
    const g = slider2.value;
    const b = slider3.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
slider3.addEventListener("change", function () {
    const r = slider.value;
    const g = slider2.value;
    const b = slider3.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});