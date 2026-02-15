# BERI Landing Page

A static landing page for BERI built for GitHub Pages deployment.

## 🚀 GitHub Pages Deployment

### Quick Setup

1. **Create a new repository** on GitHub (or use an existing one)

2. **Upload these files** maintaining the directory structure:
   ```
   your-repo/
   ├── index.html
   ├── assets/
   │   ├── css/
   │   │   └── styles.css
   │   ├── js/
   │   │   └── main.js
   │   └── img/
   │       └── beri-ui.png
   └── README.md
   ```

3. **Add your BERI UI screenshot**:
   - Place your screenshot at `assets/img/beri-ui.png`
   - Recommended dimensions: 1024×768px or similar 4:3 ratio
   - Format: PNG or JPG

4. **Update URLs** in `index.html`:
   - Replace `https://www.linkedin.com/company/your-beri-page` with your actual LinkedIn URL (appears in 2 places)
   - Replace `https://github.com/your-org/co-working-space` with your co-working space URL (appears in 2 places)
   - Update email address in footer: `hello@beri.education`

5. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages (left sidebar)
   - Under "Source", select `main` branch
   - Select `/ (root)` folder
   - Click Save

6. **Access your site**:
   - For user/org site: `https://username.github.io`
   - For project site: `https://username.github.io/repository-name`

### Important: Relative Paths

This site uses **relative paths exclusively** to ensure it works correctly when deployed to a GitHub Pages subpath (e.g., `username.github.io/beri`).

All asset references use relative paths:
- ✅ Correct: `assets/css/styles.css`
- ❌ Wrong: `/assets/css/styles.css`

Do NOT modify these to absolute paths, or the site will break when deployed to a subpath.

## 📝 Customization

### Content Updates

**Hero Section** (`index.html` line ~48):
```html
<h1 class="hero-title">
    School,<br>simplified
</h1>
```

**What is BERI Section** (`index.html` line ~98):
- Edit the three paragraphs to customize your messaging
- Ensure the key phrase "lab-style framework that can be customised to your experiences" remains

**Features Section** (`index.html` line ~130):
- Four feature cards: Bespoke, Citation-Based, Data Privacy, Student-led
- Customize titles and descriptions as needed

**Footer Contact** (`index.html` line ~235):
- Update email address
- Update social/external links

### Design System

All colors, spacing, and typography are defined as CSS variables in `assets/css/styles.css`:

```css
:root {
    /* Colors */
    --color-primary: #1a1a1a;
    --color-accent: #0066cc;
    --color-platform: #4a5f7f; /* Dark blue platform */
    /* ... */
    
    /* Spacing */
    --spacing-md: 1.5rem;
    /* ... */
}
```

Modify these variables to customize the design system globally.

### Typography

The site uses:
- **Serif (hero)**: Playfair Display (Google Fonts)
- **Sans-serif (body)**: System font stack

To change fonts, update:
1. Google Fonts `<link>` in `index.html` (line ~11)
2. `--font-serif` variable in `assets/css/styles.css`

## 📱 Responsive Breakpoints

- **Desktop**: 969px and above (4-column features)
- **Tablet**: 768px - 968px (2-column features, collapsed nav)
- **Mobile**: 640px and below (1-column features, stacked layout)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Focus-visible styles for keyboard navigation
- Smooth scroll with header offset
- Reduced motion support for animations
- Skip-to-main-content link for screen readers

## 🎨 Design Notes

**Color Palette**:
- Primary text: `#1a1a1a`
- Platform blue: `#4a5f7f` (behind tablet mockup)
- Tablet bar: `#3d5170`
- Status green: `#22c55e`

**Tablet Mockup**:
- The tablet device is created with CSS (no images for the frame)
- Screenshot goes in `assets/img/beri-ui.png`
- Fallback placeholder shows if image is missing or fails to load
- Top bar includes Beri branding with compass emoji and "Ready" status

**Platform Effect**:
- Dark blue rounded rectangle creates a "stage" effect behind the tablet
- Subtle shadow and layering for depth
- Responsive scaling on mobile devices

## 🔧 Technical Details

**Browser Support**:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox for layouts
- CSS Variables for theming
- No polyfills required

**Performance**:
- No external frameworks
- Single CSS file (~10KB)
- Minimal JavaScript (~2KB)
- One Google Fonts request (Playfair Display)

**JavaScript**:
- Mobile navigation toggle
- Smooth scroll with header offset
- Click-outside-to-close for mobile menu
- Image error handling for graceful fallback

## 📋 File Structure

```
beri-landing/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css     # All styles with CSS variables
│   ├── js/
│   │   └── main.js        # Mobile nav + smooth scroll
│   └── img/
│       └── beri-ui.png    # Your BERI interface screenshot
└── README.md              # This file
```

## 🐛 Troubleshooting

**Styles not loading**:
- Verify all paths use relative format (`assets/...` not `/assets/...`)
- Check file names match exactly (case-sensitive on some servers)

**Image not showing**:
- Ensure `beri-ui.png` exists in `assets/img/`
- Check file extension matches (.png vs .jpg)
- Placeholder will show automatically if image fails

**Mobile menu not working**:
- Ensure `assets/js/main.js` is loading
- Check browser console for JavaScript errors

**Site not deploying to GitHub Pages**:
- Verify repository is public (or you have GitHub Pages enabled for private repos)
- Check that GitHub Pages is enabled in Settings → Pages
- Wait 2-3 minutes after first deployment

## 📞 Support

For questions about BERI or this landing page:
- Email: hello@beri.education
- LinkedIn: [Update in index.html]
- GitHub Co-working Space: [Update in index.html]

## 📄 License

Copyright © 2024 BERI. All rights reserved.
