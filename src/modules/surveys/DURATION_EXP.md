### Bu projede soru ve anket süreleri nasıl hesaplandı?

Süreleri hesaplamak için bir anket şu adımlara bölündü:
- Soru görüntüleme
- Soruya yanıt verme
- Anketi yarıda bırakma
- Anketi bitirme

Bu 4 adımın her birinin gerçekleştiği esnadaki zaman store'a kaydedildi.
Böylece iki işlem arasında geçen süreler hesaplanabildi.

Örneğin:
- 00:00 - Soru A görüntülendi.
- 00:05 - Soru A cevaplandı. -> Soru A, 5 saniye sürdü.
- 00:07 - Soru B görüntülendi.
- 00:09 - Soru B cevaplandı. -> Soru B, 2 saniye sürdü.
- 00:10 - Soru A görüntülendi (geri döndü).
- 00:11 - Soru A cevaplandı. -> Soru A, 5+1 = 6 saniye sürdü.
- 00:12 - Soru B görüntülendi.
- 00:15 - Anket bitirildi.

__________________________
**Case Submit edildikten sonra eklenen not:**

Yukarıdaki algoritmada şöyle bir açık var:
Kullanıcı soruyu bir süre görüntüleyip, cevap vermeden veya cevabını güncellemeden başka soruya geçerse, bu görüntüleme süresi kayboluyor. Bunu çözmek için, bu görüntüleme süresini soru içinde 'tempDuration' gibi bir alanda tutmak gerekiyor. Daha sonra cevap verildiğinde veya cevap güncellendiğinde ise bu 'tempDuration'ı da eklemek gerekiyor.

__________________________
