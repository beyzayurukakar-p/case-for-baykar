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
