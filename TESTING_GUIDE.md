# Testing Guide - Local Development

## 🚀 Starting the Development Server

### Step 1: Install Dependencies (if not already done)

```bash
cd /home/vijay-hosapeti/Desktop/Kasparro
npm install
# or
pnpm install
```

### Step 2: Start the Development Server

```bash
npm run dev
# or
pnpm dev
```

The server will start on **http://localhost:3000** (or the next available port like 3001).

### Step 3: Open in Browser

Open your browser and navigate to:

```
http://localhost:3000
```

---

## 📍 Testing Part B Routes

### 1. `/app/dashboard`

**URL:** `http://localhost:3000/app/dashboard`

**What to Test:**

- ✅ Brand selector dropdown appears
- ✅ Snapshot cards display:
  - AI Visibility Score (should show a number like 72)
  - Trust/E-E-A-T Score (should show a number like 68)
  - Non-Branded Keyword Coverage (should show a number like 65)
  - Last Audited (should show a formatted date)
- ✅ Data loads automatically when page opens
- ✅ Brand selector allows switching between brands (if multiple exist)

**How to Access:**

1. Click "Dashboard" in the header navigation (when on app pages)
2. Or type `http://localhost:3000/app/dashboard` in the browser
3. Or click "Dashboard" quick access link on home page

---

### 2. `/app/audit`

**URL:** `http://localhost:3000/app/audit`

**What to Test:**

- ✅ Left sidebar shows all 7 audit modules:
  1. Content Quality
  2. E-E-A-T Signals
  3. Technical SEO
  4. AI Readability
  5. Link Profile
  6. User Intent Alignment
  7. Brand Signals
- ✅ Each module shows a score badge
- ✅ Clicking a module updates the main panel
- ✅ Main panel shows:
  - **Score**: Large circular score display with color coding
  - **Key Insights**: List of insights with checkmarks
  - **Issues & Flags**: Issues with severity badges (critical/high/medium/low)
  - **Recommendations**: Prioritized recommendations with action items
- ✅ Smooth transitions when switching modules
- ✅ Responsive design (sidebar collapses on mobile)

**How to Access:**

1. Click "Run AI-SEO Audit" button on home page
2. Click "Audit" in the header navigation (when on app pages)
3. Or type `http://localhost:3000/app/audit` in the browser
4. Or click "Audit" quick access link on home page

---

### 3. `/app/architecture`

**URL:** `http://localhost:3000/app/architecture`

**What to Test:**

- ✅ Shows 4 main architecture components:
  - **Input Assembler**: Card explaining data collection
  - **Context Pack**: Card explaining data enrichment
  - **Audit Modules**: Lists all 7 modules
  - **Output Surfaces**: Shows what outputs are generated
- ✅ Data flow visualization (Input → Context → Modules → Output)
- ✅ Example module output with real data
- ✅ System understanding explanations
- ✅ All content is data-driven (from JSON)

**How to Access:**

1. Click "Architecture" in the header navigation (when on app pages)
2. Or type `http://localhost:3000/app/architecture` in the browser
3. Or click "Architecture" quick access link on home page

---

## 🧪 Quick Test Checklist

### Navigation Test

- [ ] Home page loads at `/`
- [ ] Click "Dashboard" → goes to `/app/dashboard`
- [ ] Click "Audit" → goes to `/app/audit`
- [ ] Click "Architecture" → goes to `/app/architecture`
- [ ] Header navigation works on all pages
- [ ] Footer links work

### Dashboard Test

- [ ] Page loads without errors
- [ ] Brand selector appears
- [ ] All 4 snapshot cards display with data
- [ ] Scores are numbers (not "undefined" or "null")
- [ ] Date is formatted correctly

### Audit Test

- [ ] Page loads without errors
- [ ] Sidebar shows 7 modules
- [ ] First module is selected by default
- [ ] Clicking different modules updates main panel
- [ ] Score displays correctly
- [ ] Insights list appears
- [ ] Issues show with severity badges
- [ ] Recommendations show with priority badges
- [ ] Mobile menu works (on small screens)

### Architecture Test

- [ ] Page loads without errors
- [ ] All 4 architecture cards display
- [ ] Data flow diagram shows
- [ ] Example module output displays
- [ ] All 7 modules are listed

---

## 🐛 Troubleshooting

### Page Shows Blank/White Screen

1. **Check Browser Console** (F12 → Console tab)
   - Look for JavaScript errors
   - Check for import errors

2. **Check Network Tab** (F12 → Network tab)
   - Verify all files load (no 404 errors)
   - Check if JSON files load correctly

3. **Restart Dev Server**

   ```bash
   # Stop server (Ctrl+C)
   # Then restart:
   npm run dev
   ```

4. **Clear Browser Cache**
   - Hard refresh: `Ctrl+Shift+R` (Linux/Windows) or `Cmd+Shift+R` (Mac)

### Data Not Loading

1. **Verify JSON file exists:**

   ```bash
   ls -la audit-data/example-brand-audit.json
   ```

2. **Check if JSON is valid:**

   ```bash
   cat audit-data/example-brand-audit.json | jq .
   ```

3. **Check browser console for errors** when loading data

### Routes Not Working

1. **Verify file structure:**

   ```bash
   ls -la app/\(app\)/
   ```

2. **Check if pages exist:**
   ```bash
   test -f app/\(app\)/dashboard/page.tsx && echo "✅ Dashboard exists"
   test -f app/\(app\)/audit/page.tsx && echo "✅ Audit exists"
   test -f app/\(app\)/architecture/page.tsx && echo "✅ Architecture exists"
   ```

---

## 📊 Expected Data

When testing, you should see:

**Dashboard:**

- AI Visibility Score: **72**
- Trust/E-E-A-T Score: **68**
- Non-Branded Coverage: **65**
- Last Audited: **January 15, 2024** (formatted date)

**Audit Modules:**

- Content Quality: Score **75** (green)
- E-E-A-T Signals: Score **68** (orange)
- Technical SEO: Score **70** (green)
- AI Readability: Score **65** (orange)
- Link Profile: Score **65** (orange)
- User Intent Alignment: Score **73** (green)
- Brand Signals: Score **70** (green)

---

## 🎯 Testing URLs Summary

| Page         | URL                                      | Quick Access                            |
| ------------ | ---------------------------------------- | --------------------------------------- |
| Home         | `http://localhost:3000/`                 | Home link in header                     |
| Dashboard    | `http://localhost:3000/app/dashboard`    | Header nav or home page link            |
| Audit        | `http://localhost:3000/app/audit`        | "Run AI-SEO Audit" button or header nav |
| Architecture | `http://localhost:3000/app/architecture` | Header nav or home page link            |
| Platform     | `http://localhost:3000/platform`         | Header nav                              |
| About        | `http://localhost:3000/about`            | Header nav                              |

---

## ✅ Success Criteria

All pages should:

- ✅ Load without errors
- ✅ Display content (not blank)
- ✅ Show data from JSON files
- ✅ Have working navigation
- ✅ Be responsive (work on mobile)
- ✅ Have proper styling

If all these work, your Part B implementation is complete! 🎉
