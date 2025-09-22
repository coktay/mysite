# Energy Savings Guide - Switch to Octopus Energy

A modern website inspired by ShareToSave.co.uk, helping UK residents switch to Octopus Energy and get £50 credit through exclusive referral links.

## 🚀 Features

- **Modern and Responsive Design**: Perfect appearance on all devices
- **Exclusive Referral Links**: Get £50 credit when switching to Octopus Energy
- **Interactive Contact Form**: Formspree integration for receiving messages
- **Cookie Notification**: GDPR compliant cookie consent system
- **Smooth Scrolling**: Smooth page transitions
- **Animations**: Hover effects and scroll animations
- **Mobile Menu**: Hamburger menu for mobile compatibility
- **SEO Optimized**: Complete SEO structure with meta tags and structured data

## 📁 File Structure

```
sharetosave/
├── index.html              # Main HTML file
├── styles.css              # CSS styles
├── script.js               # JavaScript functionality
├── blog.html               # Blog page
├── privacy-policy.html     # Privacy policy page
├── terms-of-service.html   # Terms of service page
├── cookie-policy.html      # Cookie policy page
├── affiliate-disclosure.html # Affiliate disclosure page
├── sitemap.xml             # XML sitemap
├── robots.txt              # Robots.txt file
├── site.webmanifest        # Web app manifest
├── browserconfig.xml       # Browser configuration
├── favicon.svg             # Favicon
└── README.md               # This file
```

## 🛠️ Installation

1. Place all files in the same folder
2. Open `index.html` in your web browser
3. The site is ready!

## 🎨 Customization

### Colors
You can customize your site by changing the main colors in the CSS file:

```css
:root {
    --primary-color: #00B4D8;    /* Main blue color */
    --secondary-color: #0077B6;  /* Dark blue */
    --success-color: #27ae60;    /* Green */
    --danger-color: #e74c3c;     /* Red */
}
```

### Content Changes

#### Updating Personal Information
Update these areas in the `index.html` file:
- Site title (in header)
- Personal information (hero section)
- About section
- Contact information

#### Adding/Removing Referral Links
You can add new cards or edit existing ones in the `.benefits-grid` section of `index.html`:

```html
<div class="benefit-card">
    <div class="benefit-icon">
        <i class="fas fa-icon"></i>
    </div>
    <h3>Benefit Title</h3>
    <p>Description text...</p>
</div>
```

### Adding New Sections
1. Add new section in HTML
2. Define section styles in CSS
3. Update JavaScript if needed for interactivity

## 📱 Responsive Design

The site has been tested on the following screen sizes:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 JavaScript Features

### Main Functions
- `initMobileMenu()`: Mobile menu functionality
- `initFAQ()`: FAQ accordion functionality
- `initContactForm()`: Contact form with Formspree integration
- `initCookieBanner()`: Cookie notification
- `initSmoothScrolling()`: Smooth scrolling
- `initCopyReferralLink()`: Copy referral link functionality

### Helper Functions
- `showNotification()`: Show notifications
- `acceptCookies()`: Accept cookies
- `rejectCookies()`: Reject cookies
- `trackReferralClick()`: Track referral clicks
- `copyReferralLink()`: Copy referral link to clipboard

## 🎯 SEO Optimization

The site includes the following SEO features:
- Semantic HTML5 structure
- Complete meta tags
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt
- Fast loading times
- Mobile-first design

## 🚀 Performance

- **CSS**: Optimized and minified
- **JavaScript**: Event delegation usage
- **Images**: Lazy loading support
- **Animations**: CSS transitions and transforms
- **Fonts**: Google Fonts with preload

## 🔒 Security

- Form validation
- XSS protection
- CSRF protection ready
- Secure headers in HTML

## 📧 Contact Form Integration

The contact form is integrated with Formspree:
- **Endpoint**: `https://formspree.io/f/mdkwnbzo`
- **Method**: POST
- **Features**: Validation, loading states, success modal
- **Error Handling**: User-friendly error messages

## 📈 Analytics Integration

For Google Analytics integration, add this code to the `script.js` file:

```javascript
// Google Analytics
gtag('config', 'GA_MEASUREMENT_ID');
```

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📞 Support

For any questions or suggestions:
- Use GitHub Issues
- Send an email
- Use the contact form

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Inspired by ShareToSave.co.uk
- Font Awesome icons used
- Modern CSS techniques applied
- Octopus Energy referral program

---

**Note**: This website is designed to help UK residents switch to Octopus Energy and get £50 credit. All referral links are legitimate and part of Octopus Energy's official referral program.