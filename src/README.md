### Klasör Yapısı
Bu projede `src` klasörü üç alt klasöre sahip:
- common: Ortak ve basit parçalar
- core: Cross-cutting ve altyapısal parçalar
- modules: UI modülleri

### Kullanılan Araçlar
- React Navigation 7
- Redux Toolkit
- Axios
- Date-Fns
- React Native Paper

### Özellikler
- Sign-in / Sign-up
- Profil
    - Bilgileri görüntüleme
    - Tema ve dil değiştirme
    - Sign-out
- Anasayfa
- Anketler
    - Tamamlanan Anketler
        - Toplam sayıyı görüntüleme
        - Tamamlanma tarihini görüntüleme
        - Toplam süreyi görüntüleme
        - Her sorunun yanıtını ve süresini görüntüleme
    - Başlanmamış Anketler
        - Yeni ankete başlayabilme
    - Devam eden Anketler
        - Tamamlanma tarihini ve şu ana kadar geçmiş zamanı görüntüleme
        - Kalınan sorudan ve süreden tekrar devam edebilme
        - Önceden verilmiş cevapları değiştirebilme

#### Anket Soru Süresi Hesaplaması için Varsayımlar
- Kullanıcının bir soruya cevap vermeden sonrakine geçemeyeceği varsayıldı.
- Bir yanıtın aldığı süre, o soruyu görüntülemeye başlama anı ile yanıt verme anı arasındaki süre olarak varsayıldı.
- Yanıtın değiştirilmesi durumunda da, son görüntülemeye başlama anı ile yanıtı değiştirme anı arasındaki süre, önceki süreye eklendi.
- Yanıtı değiştirmeden soruyu incelemesi esnasında geçen süre dikkate alınmadı.

#### Geliştirilen Anket Soru Tipleri
- Tek seçim (Radio button)
- Çoklu seçim (Checkbox)
- Derece seçimi (Renklendirilebilir kutucuklar)
- Slider
- Açık uçlu (Metinsel cevap)

Veri tiplerine eklenmiş ama geliştirilmemiş olanlar: Evet/Hayır, Likert
Ayrıca görselli soru veya yanıt da veri tipine eklendi ama geliştirilmedi.



