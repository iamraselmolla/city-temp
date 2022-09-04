const apiKey = '0d4a2fc2b44ea62599a86e5125e37d4b';
const showInnerText = (id, value) => {
    document.getElementById(id).innerText = value;
}
const showData = (data) =>{
    console.log(data);
    showInnerText('city', data.name);
    showInnerText('temp', data.main.temp);
    showInnerText('condition', data.weather[0].main)
}

const getTemp = async (city) => {
    const fetchCity = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const getData = await fetchCity.json();
  
    if(getData.base){
        document.getElementById('laoder').classList.remove('d-none');
        showData(getData);
        document.getElementById('laoder').classList.add('d-none');
    }else{
        document.getElementById('search').value  = '';
        alert('Wrong City name')
    }
}



document.getElementById('search-btn').addEventListener('click', function(){
    const searchValue = document.getElementById('search').value;
     getTemp(searchValue);
})