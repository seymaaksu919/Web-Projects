WeatherStatusPage

Bu proje, kullanıcıların girdikleri şehir isimlerine göre gerçek zamanlı hava durumu bilgilerini alıp görüntüleyen bir web uygulamasıdır. Kullanıcı, uygulama üzerinden bir şehir adı girerek anlık hava durumu verilerini görüntüleyebilir. Uygulama, OpenWeather API'sini kullanarak hava durumu verilerini alır ve kullanıcılara sıcaklık, hava durumu durumu gibi bilgileri sunar. Ayrıca, hata durumlarında kullanıcıya anlamlı hata mesajları gösterilir.
HTML kısmı için

Bu dosya da kullanıcıdan şehir ismi alır ve hava durumu verilerini görüntülemek için API'ye istek gönderir.
İçerik:

    HTML Yapısı: Kullanıcıdan şehir ismi almak için bir giriş kutusu ve hava durumu bilgisini gösterecek alanlar içerir.
    Form ve Butonlar: Kullanıcı etkileşimi için bir form (şehir girişi) ve bir buton bulunur.
    Yükleniyor Mesajı: API'den veri alınırken bir "Yükleniyor..." mesajı gösterilir.

Kullanım:

    index.html dosyasını açarak tarayıcıda görüntüleyin.
    Şehir ismi girin ve hava durumu verilerini almak için butona tıklayın.

CSS kısmı için

Bu dosya, hava durumu uygulamanızın stilini belirler. Kullanıcı arayüzüne çekicilik katmak için temel stil özellikleri ve düzen kullanılır.
İçerik:

    Temel Tasarım: Sayfa merkezi bir düzenle yerleştirilmiştir, böylece kullanıcı formu rahatça kullanabilir.
    Responsive Tasarım: Uygulama, farklı cihazlarda düzgün bir görünüm sağlar.
    Buton ve Metin Stil: Butonlara hover efektleri eklenmiş ve metinler okunabilir olacak şekilde stilize edilmiştir.
    Kutular ve Gölgeleme: İçerik kutuları gölgelendirilmiş ve yuvarlatılmış köşelerle modern bir görünüm elde edilmiştir.

Kullanım:

CSS dosyası, HTML dosyasına bağlanarak sayfanın stilini belirler. Bu dosya yalnızca görsel düzeni etkiler ve JavaScript ile etkileşimde bulunmaz.
JavaScript kısmı için

Bu dosya, hava durumu uygulamanızın işlevselliğini sağlar. Kullanıcıdan alınan şehir ismini OpenWeather API'ye göndererek hava durumu verilerini alır ve ekranda görüntüler.
İçerik:

    API Entegrasyonu: OpenWeather API'si ile hava durumu verileri alınır.
    Asenkron Veri İşleme: async/await kullanarak API'ye yapılan istekler asenkron olarak işlenir ve sonuçlar beklenmeden gösterilir.
    Kullanıcı Etkileşimi: Kullanıcı, şehir ismi girdikten sonra hava durumu bilgilerini almak için butona tıkladığında, uygulama kullanıcıya hava durumu bilgilerini görüntüler.
    Hata Yönetimi: API hatası veya geçersiz şehir adı durumunda kullanıcıya uygun hata mesajları gösterilir.

Kullanım:

    script.js dosyasını HTML dosyanıza dahil edin.

    Kullanıcı bir şehir ismi girer ve hava durumu bilgilerini almak için butona tıklar.

    Uygulama, şehir adıyla ilgili hava durumu bilgilerini API'den alır ve ekranda gösterir.

Kullanılan araçlar

API key ve url için kullanılan bağlantı :https://openweathermap.org/city/2643743
