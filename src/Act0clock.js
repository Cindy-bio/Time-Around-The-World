function updateClocks() {

let joziElement = document.querySelector("#jozi");
let joziDateElement = document.querySelector("#jozi .date");
let joziTimeElement = document.querySelector("#jozi .time");

let joziTime = moment().tz("Africa/Johannesburg");

joziDateElement.innerHTML = joziTime.format("MMMM D, YYYY");
joziTimeElement.innerHTML = `${joziTime.format("HH:mm:ss A")}`;

let nyElement = document.querySelector("#ny");
let nyDateElement = document.querySelector("#ny .date");
let nyTimeElement = document.querySelector("#ny .time");
let nyTime = moment().tz("America/New_York");

nyDateElement.innerHTML = nyTime.format("MMMM D, YYYY");
nyTimeElement.innerHTML = `${nyTime.format("HH:mm:ss A")}`;


let londonElement = document.querySelector("#london");
let londonDateElement = document.querySelector("#london .date");
let londonTimeElement = document.querySelector("#london .time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("MMMM D, YYYY");
londonTimeElement.innerHTML = `${londonTime.format("HH:mm:ss A")}`;

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = document.querySelector("#tokyo .date");
let tokyoTimeElement = document.querySelector("#tokyo .time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM D, YYYY");
tokyoTimeElement.innerHTML = `${tokyoTime.format("HH:mm:ss A")}`;

let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = document.querySelector("#sydney .date");
let sydneyTimeElement = document.querySelector("#sydney .time");
let sydneyTime = moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format("MMMM D, YYYY");
sydneyTimeElement.innerHTML = `${sydneyTime.format("HH:mm:ss A")}`;
}

updateClocks();
setInterval(updateClocks, 1000);

function updateTimezone(event) {
    let selectedTimezone = event.target.value;
    let selectedCityTime = moment().tz(selectedTimezone);
    let selectedcityElement = document.querySelector("#selected-city");
    selectedcityElement.innerHTML = `
    <div class="clock">
        <h2>${selectedTimezone.replace("_", " ").split("/")[1]}</h2>
        <div class="time">${selectedCityTime.format("HH:mm:ss A")}</div>
        <div class="date">${selectedCityTime.format("MMMM D, YYYY")}</div>
    </div>
    `;
}
let timezoneSelect = document.querySelector("#timezone-select");
timezoneSelect.addEventListener("change", updateTimezone);
