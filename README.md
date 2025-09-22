# Tasarruf Rehberi - Türkiye'de Para Tasarrufu

ShareToSave.co.uk sitesinden ilham alınarak oluşturulmuş, Türkiye'deki tasarruf önerileri ve referans kodları paylaşan modern bir web sitesi.

## 🚀 Özellikler

- **Modern ve Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Kategorize Edilmiş Referans Kodları**: Enerji, İnternet & TV, Web Hosting kategorileri
- **İnteraktif Filtreleme**: Kategoriye göre referans kodlarını filtreleme
- **İletişim Formu**: Ziyaretçilerden mesaj alma sistemi
- **Çerez Bildirimi**: GDPR uyumlu çerez onay sistemi
- **Smooth Scrolling**: Yumuşak sayfa geçişleri
- **Animasyonlar**: Hover efektleri ve scroll animasyonları
- **Mobil Menü**: Hamburger menü ile mobil uyumluluk

## 📁 Dosya Yapısı

```
sharetosave/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript işlevselliği
└── README.md           # Bu dosya
```

## 🛠️ Kurulum

1. Tüm dosyaları aynı klasöre koyun
2. `index.html` dosyasını web tarayıcınızda açın
3. Site hazır!

## 🎨 Özelleştirme

### Renkler
CSS dosyasındaki ana renkleri değiştirerek sitenizi özelleştirebilirsiniz:

```css
:root {
    --primary-color: #3498db;    /* Ana mavi renk */
    --secondary-color: #2c3e50;  /* Koyu mavi */
    --success-color: #27ae60;    /* Yeşil */
    --danger-color: #e74c3c;     /* Kırmızı */
}
```

### İçerik Değişiklikleri

#### Kişisel Bilgileri Güncelleme
`index.html` dosyasında şu alanları güncelleyin:
- Site başlığı (header'da)
- Kişisel bilgiler (hero section)
- Hakkımda bölümü
- İletişim bilgileri

#### Referans Kodları Ekleme/Çıkarma
`index.html` dosyasındaki `.referans-grid` bölümünde yeni kartlar ekleyebilir veya mevcut kartları düzenleyebilirsiniz:

```html
<div class="referans-card" data-category="kategori">
    <div class="card-header">
        <h3>Hizmet Adı</h3>
        <span class="category-badge">Kategori</span>
    </div>
    <div class="card-content">
        <h4>🎁 Teklif</h4>
        <p>Açıklama metni...</p>
        <a href="referans-linki" class="btn btn-primary">Buton Metni</a>
    </div>
</div>
```

### Yeni Kategori Ekleme
1. HTML'de yeni kategori butonu ekleyin
2. CSS'de kategori rengini tanımlayın
3. JavaScript'te filtreleme mantığını güncelleyin

## 📱 Responsive Tasarım

Site şu ekran boyutlarında test edilmiştir:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 JavaScript Özellikleri

### Ana Fonksiyonlar
- `initMobileMenu()`: Mobil menü işlevselliği
- `initCategoryFilters()`: Kategori filtreleme
- `initContactForm()`: İletişim formu
- `initCookieBanner()`: Çerez bildirimi
- `initSmoothScrolling()`: Yumuşak kaydırma

### Yardımcı Fonksiyonlar
- `showNotification()`: Bildirim gösterme
- `acceptCookies()`: Çerezleri kabul etme
- `rejectCookies()`: Çerezleri reddetme
- `trackReferralClick()`: Referans tıklamalarını takip

## 🎯 SEO Optimizasyonu

Site aşağıdaki SEO özelliklerine sahiptir:
- Semantic HTML5 yapısı
- Meta etiketleri
- Alt etiketleri (resimler için)
- Structured data hazırlığı
- Hızlı yükleme süreleri

## 🚀 Performans

- **CSS**: Minified ve optimized
- **JavaScript**: Event delegation kullanımı
- **Images**: Lazy loading desteği
- **Animations**: CSS transitions ve transforms

## 🔒 Güvenlik

- Form validasyonu
- XSS koruması
- CSRF token desteği (backend entegrasyonu için)

## 📈 Analytics Entegrasyonu

Google Analytics entegrasyonu için `script.js` dosyasına şu kodu ekleyin:

```javascript
// Google Analytics
gtag('config', 'GA_MEASUREMENT_ID');
```

## 🌐 Browser Desteği

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📞 Destek

Herhangi bir sorunuz veya öneriniz için:
- GitHub Issues kullanın
- E-posta gönderin
- İletişim formunu kullanın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🙏 Teşekkürler

- ShareToSave.co.uk sitesinden ilham alınmıştır
- Font Awesome ikonları kullanılmıştır
- Modern CSS teknikleri uygulanmıştır

---

**Not**: Bu site demo amaçlı oluşturulmuştur. Gerçek referans linklerini eklemek için HTML dosyasındaki `href="#"` değerlerini gerçek linklerle değiştirin.
