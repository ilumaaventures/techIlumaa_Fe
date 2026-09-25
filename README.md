# ILUMAA Tech Website (`tech.ilumaa.com`)

Standalone repository for the **ILUMAA Technology & Digital Solutions** website.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open **[http://localhost:5174](http://localhost:5174)** in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📦 Setting up a Separate Git Repository

To initialize a new Git repository and push it to GitHub/GitLab:

```bash
git init
git add .
git commit -m "feat: initial commit for ILUMAA Tech website"
git branch -M main
git remote add origin <YOUR_NEW_TECH_REPO_URL>
git push -u origin main
```

---

## 🌐 Deploying to Vercel for `tech.ilumaa.com`

1. Push your repository to GitHub.
2. In [Vercel Dashboard](https://vercel.com):
   - Click **Add New** -> **Project**.
   - Import this `ILUMAA_Tech_Website` repository.
   - Framework Preset: **Vite**.
   - Click **Deploy**.
3. Under **Project Settings** -> **Domains**:
   - Add domain: `tech.ilumaa.com`.
   - Configure DNS CNAME record in your domain registrar (e.g. GoDaddy/Cloudflare/Namecheap) pointing `tech` to `cname.vercel-dns.com`.
