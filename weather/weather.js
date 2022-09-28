const input = document.querySelector("input");
const button = document.querySelector("button");
let isError = false;

//* api'den veri çekmek için
const getWeather = async (cityName) => {
  const key = "6e1a3eda9fa53b82169bd49471c74f36";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  try {
    const res = await fetch(url);
    console.log(res);
    if (!res.ok) {
      isError = true;
      // throw new Error(`Something went wrong. Failure Code :${res.status}`);
    }
    const data = await res.json();

    console.log(data);
    renderWeather(data);
  } catch (error) {
    console.log(error);
  }
};

//* değerleri yazdırmak için
const renderWeather = (item) => {
  const weatherListDiv = document.querySelector(".row");
  // const newsList = document.querySelector(".newsList");
  if (isError) {
    // weatherListDiv.innerHTML = `<h2>City is wrong</h2>`;
  //  return;


  }
  const { name, main, weather } = item;
  weatherListDiv.innerHTML = `    
  <div class="card col-12 genelCard" style="width: 15rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item name">${name.replace("Province", "")}</li>
        <li class="list-group-item degre">${Math.round(main.temp)}<sup>°C</sup></li>
        <img src="http://openweathermap.org/img/w/${
          weather[0].icon
        }.png" class="card-img-top" alt="icon" />
        <li class="list-group-item weather">${weather[0].description.toUpperCase()}</li>
      </ul>
    </div>
    `;
};


let cities = [];
// console.log(cities);
const aciklama = document.querySelector(".aciklama")
//* buton click için
button.addEventListener("click", () => {
if(cities.includes(input.value.toLowerCase())){
  aciklama.innerHTML = `<h2>${input.value.toUpperCase()} mevcut, başka bir şehir giriniz</h2>`;
  cities = [];


}else{
  cities.push(input.value.toLowerCase())
  getWeather(input.value);
  aciklama.innerHTML = `<h2> </h2>`;
  
  
}
  input.value = "";
});

//* enter tuşu aktif olması için
input.addEventListener("keydown", (e) => {
  e.key === "Enter" && button.click();
  // input.value = "";
});

//* focus olması için
window.addEventListener("load", () => {
  input.focus();
});

