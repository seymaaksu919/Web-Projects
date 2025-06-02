// Hava durumu bilgilerini asenkron şekilde alabilmek için oluşturulan fonksiyondur.
async function getWeather(){

    //KUllanıcının girdiği şehir ismi alınır.
    const city = document.getElementById('cityInput').value;
   
    // Yükleniyor mesajı ve hava durumu bilgisinin gösterileceği değerler alınır.
    const loadingElement = document.getElementById('loading');
    const weatherInfoElement =document.getElementById("weatherInfo");
    
    // Eğer şehir ismi girilmemişse uyaru mesajı gösterilir.
    if(!city){
        weatherInfoElement.innerHTML="Lütfen Geçerli Şehir ismi giriniz !";
        return;
    }

    //Yükleniyor mesajı gösterilir.
    loadingElement.style.display ="block";
    //Önceki hava durumu bilgisi temizlenir.
    weatherInfoElement.innerHTML= " ";

    //OPenWeather API için tanımlanan kişiye özel API KEY
    const apiKey = "32661833f2c18c73bad9cbc7c0498c33"

    //API url 'sini şehir ismi ve diğer parametreler alınır. Bu url kısmından.
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;


    try {
        //API 'ye istek gönderilir. (asenkron işlemdir.)
        const response = await fetch(apiUrl);
        
        // Veriler JSON formatında alınır.
        const data = await response.json();

        //Bilgiler alındığı zaman yükleniyor mesajı gizlenir.
        loadingElement.style.display ="none";
        
        //API yanıtı başarılıysa hava durumu bilgileri gösterilir.
        if( data.cod === 200){
            const temp = data.main.temp;
            const weather = data.weather[0].description;
            weatherInfoElement.innerHTML = `
            <h2>${city} Hava Durumu </h2>
            <p> Sicaklik: ${temp}°C</p>
            <p>Durum : ${weather} </p>
            `;
            //Başarılı olmazsa hata mesajı gösterilir.
        } 
            else {
            weatherInfoElement.innerHTML="Şehir bulunamadi ,lütfen geçerli bir şehir adi giriniz.";
    }

} 
     catch (error) {
            loadingElement.style.display="none";
            weatherInfoElement.innerHTML="Bir hata oluştu. Tekrar Deneyiniz...";
  
        }
        
    }



