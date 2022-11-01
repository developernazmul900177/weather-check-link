

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function(){
    const inputBtn = document.getElementById('input-btn').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=9aede21cb71840a4c1e2d7e1f3070730')
    .then(res => res.json())
    .then(data => {
        const cityName = data.name;
        const temp = data.main.temp;
        const finaltemp = temp -273.15; 
        const desc = data.weather[0].description;


        document.getElementById('cityname').innerText = cityName;
        document.getElementById('tempe').innerText = finaltemp.toFixed(2);
        document.getElementById('descr').innerText = desc;
    })
    .catch(res => alert("Please write correct city name"));
})












