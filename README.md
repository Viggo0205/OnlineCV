# Victor's React CV

En moderne, interaktiv online CV bygget med React, som demonstrerer både tekniske færdigheder og giver et professionelt overblik over Victor Tadeusz Ulstrup Olszowski's kompetencer og erfaring.

## 🚀 Kom i Gang

### Forudsætninger

For at køre dette projekt skal du have følgende installeret:

1. **Node.js** (version 16 eller nyere)
   - Download fra: https://nodejs.org/
   - Installer LTS versionen

2. **Git** (valgfrit, men anbefalet)
   - Download fra: https://git-scm.com/

### Installation

1. **Download Node.js** hvis du ikke allerede har det:
   ```
   Gå til https://nodejs.org/
   Download og installer LTS versionen
   ```

2. **Åbn PowerShell** i projektmappen:
   ```powershell
   cd "c:\Users\victo\Desktop\OnlineCV"
   ```

3. **Installer dependencies**:
   ```powershell
   npm install
   ```

4. **Start udviklingsserveren**:
   ```powershell
   npm run dev
   ```

5. **Åbn browseren**:
   - Serveren starter normalt på `http://localhost:3000`
   - URL'en vises i terminalen når serveren er startet

## 📁 Projektstruktur

```
OnlineCV/
├── public/                 # Statiske filer
├── src/
│   ├── components/        # React komponenter
│   │   ├── Header.jsx     # Hoved-sektion med navn og kontakt
│   │   ├── Navigation.jsx # Navigation mellem sider
│   │   ├── PersonalInfo.jsx # Personlig information
│   │   ├── Skills.jsx     # Kompetencer og færdigheder
│   │   ├── Experience.jsx # Arbejdserfaring
│   │   ├── Projects.jsx   # Projekter
│   │   ├── SystemDevelopment.jsx # Systemudviklingsmetoder
│   │   ├── Contact.jsx    # Kontaktoplysninger
│   │   └── ThemeProvider.jsx # Dark/light theme
│   ├── data/
│   │   └── cvData.js      # CV data og indhold
│   ├── styles/
│   │   ├── index.css      # Globale styles
│   │   └── App.css        # App-specifikke styles
│   ├── App.jsx            # Hoved App komponent
│   └── main.jsx           # React entry point
├── package.json           # Project dependencies
├── vite.config.js         # Vite konfiguration
└── README.md             # Denne fil
```

## 🌟 Funktioner

### ✅ **React Komponenter**
- Moderne funktionelle komponenter med hooks
- Komponent-baseret arkitektur for let vedligeholdelse
- Genbrug af komponenter på tværs af applikationen

### ✅ **Routing**
- React Router for navigation mellem sider
- Både single-page view og separate sider
- URL-baseret navigation

### ✅ **Responsive Design**
- Mobile-first tilgang
- Fungerer perfekt på desktop, tablet og mobil
- CSS Grid og Flexbox layouts

### ✅ **Interaktive Funktioner**
- Dark/Light theme toggle med localStorage
- Animerede skill progress bars
- Smooth scrolling navigation
- Hover effekter og transitions

### ✅ **Print/PDF Support**
- Optimeret print stylesheet
- PDF generation via browser print
- Professional sort/hvid layout til print

## 🎨 Tilpasning

### Rediger Dit CV Indhold

Alle personlige oplysninger er centraliseret i `src/data/cvData.js`. Rediger denne fil for at tilpasse:

```javascript
export const cvData = {
  personalInfo: {
    name: "Dit Navn",
    title: "Din Titel", 
    address: "Din Adresse",
    phone: "Dit Telefonnummer",
    email: "din@email.com",
    // ...
  },
  // ... resten af data
}
```

### Tilpas Farver og Styling

Rediger CSS variabler i `src/styles/index.css`:

```css
:root {
  --primary-color: #2563eb;      /* Primær farve */
  --primary-light: #3b82f6;      /* Lys variant */
  --primary-dark: #1d4ed8;       /* Mørk variant */
  /* ... flere variabler */
}
```

## 📱 Sider og Navigation

CV'et har både:

1. **Samlet visning** (`/`) - Alle sektioner på én side
2. **Separate sider**:
   - `/personal` - Personlig information
   - `/skills` - Kompetencer og færdigheder
   - `/experience` - Arbejdserfaring
   - `/projects` - Projekter
   - `/system` - Systemudvikling
   - `/contact` - Kontakt

## 🛠 React Læring

Dette projekt demonstrerer vigtige React koncepter:

### **Komponenter**
```javascript
// Funktionel komponent med JSX
const Header = () => {
  return (
    <header className="header">
      <h1>Victor Tadeusz Ulstrup Olszowski</h1>
    </header>
  )
}
```

### **State Management**
```javascript
// useState hook til tema
const [theme, setTheme] = useState('light')

// useEffect hook til side-effects
useEffect(() => {
  const savedTheme = localStorage.getItem('cv-theme')
  setTheme(savedTheme || 'light')
}, [])
```

### **Props og Data Flow**
```javascript
// Sending data til child komponenter
<Skills data={cvData.programmingSkills} />

// Modtage props i komponent
const Skills = ({ data }) => {
  return <div>{data.languages.map(...)}</div>
}
```

### **Context API**
```javascript
// Theme provider for global state
const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}
```

## 🚀 Deployment

### Byg til produktion:
```powershell
npm run build
```

### Deploy til forskellige platforme:

**Netlify:**
1. Drag & drop `dist` mappen til Netlify
2. Eller connect Git repository

**Vercel:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

**GitHub Pages:**
1. Bygget fil kan uploades til GitHub Pages
2. Sæt base URL i vite.config.js hvis nødvendigt

## 📊 Browser Support

- Chrome 80+
- Firefox 75+  
- Safari 13+
- Edge 80+

## 🔧 Udvikling

### Tilgængelige Scripts:
```powershell
npm run dev      # Start udvikling server
npm run build    # Byg til produktion
npm run preview  # Preview production build
npm run lint     # Check code quality
```

### Hot Module Replacement (HMR)
Vite giver hurtig hot reload - ændringer vises øjeblikkeligt i browseren uden at miste state.

## 🤝 Bidrag

Dette er et personligt CV projekt, men idéer og forbedringer er velkomne!

## 📄 Licens

MIT License - frit at bruge og tilpasse

---

**Bygget med ❤️ af Victor med React, Vite og moderne web teknologier**

*Dette projekt demonstrerer praktisk anvendelse af React-koncepter og moderne frontend udvikling.*