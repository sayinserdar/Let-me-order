let url = document.URL;
let counter = 10;
let numberOfAvailableShops = 0;
let shops;

if (url.includes("www.yemeksepeti.com")) {
  numberOfAvailableShops = document.querySelectorAll(".ys-item").length;
  shops = document.querySelectorAll(".ys-item");
  setInterval(() => {
    var victimNumber = getRandomInt(0, numberOfAvailableShops);
    var victimShop = document.querySelectorAll(".ys-item")[victimNumber];
    alert(`${victimShop.innerText} is going to be deleted peace out`);
    victimShop.remove();
    numberOfAvailableShops = document.querySelectorAll(".ys-item").length;
  }, 5000);
} else {
  alert("Yemeksepetine girmezsen calismaz");
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
