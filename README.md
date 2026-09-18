# Raka Putra Pratidina — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.2-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Website portofolio personal yang menampilkan proyek-proyek di bidang **Machine Learning**, **Natural Language Processing (NLP)**, **AI Systems & Agents**, serta **Cloud Infrastructure**.

🌐 **Live Demo:** [rakaputra.dev](https://rakaputra.dev)

---

## 📌 Featured Work

Berikut beberapa proyek dan riset utama yang didokumentasikan di portofolio ini:

1. **[NutriMood](https://nutrimoodv.vercel.app/)** — *Capstone Project · Coding Camp by DBS Foundation*
   - Sistem rekomendasi makanan berbasis preferensi mood dan nutrisi harian.
   - Peran: Team Leader & Machine Learning Engineer.
   - *Stack: Python, ML Recommendation Systems, Next.js, FastAPI.*

2. **Autonomous Vehicle Sentiment Analysis** — *NLP Research at BRIN (Badan Riset dan Inovasi Nasional)*
   - Klasifikasi sentimen publik terhadap teknologi kendaraan otonom Level 2 dari diskusi YouTube & Reddit.
   - Model Bi-LSTM dengan GloVe embeddings (mencapai akurasi pengujian 89.11% dan F1-Score 0.8918).
   - *Stack: Python, TensorFlow, Bi-LSTM, GloVe, Scikit-learn.*

3. **Hybrid Cloud & Resilient Homelab** — *Infrastructure & Systems*
   - Setup server mandiri berbasis ARM64 (Armbian) yang terhubung dengan Azure VPS menggunakan Cloudflare Tunnels, Docker containerization, dan backup otomatis terenkripsi ke cloud storage.
   - *Stack: Linux ARM64, Azure, Docker, Cloudflare, Bash, rclone.*

4. **Autonomous Agent Systems** — *AI Systems Exploration*
   - Eksperimen arsitektur multi-agent (Hermes Agent) untuk automasi monitoring data pasar on-chain dan off-chain menggunakan tool-calling LLM dan persistent SQLite state.
   - *Stack: Python, Node.js, LLMs, Web3.py, SQLite.*

5. **Distributed Data Pipelines** — *Data Engineering*
   - Pipeline crawling dan ekstraksi data terdistribusi menggunakan Scrapy, Zyte Cloud, dan automasi browser headless.

---

## 🛠️ Tech Stack

- **Frontend & UI:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Radix UI Dialog, Lucide Icons
- **Machine Learning & Data:** Python, TensorFlow, Scikit-learn, Pandas, NLTK, Bi-LSTM, GloVe
- **Cloud & DevOps:** Linux (ARM64 / Ubuntu), Docker, Cloudflare Tunnels, Azure, Git, Vercel

---

## 🚀 Menjalankan Secara Lokal

Pastikan Anda sudah menginstal **Node.js (>= 22.13.0)**.

1. **Clone repository:**
   ```bash
   git clone https://github.com/Akarptra/portofolio.git
   cd portofolio
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

4. **Build untuk produksi:**
   ```bash
   npm run build
   ```
   Perintah ini akan melakukan static export ke direktori `out/`.

---

## 📂 Struktur Direktori

```text
├── app/                  # Next.js App Router (page, layout, style)
│   ├── globals.css       # Token styling kustom & Tailwind
│   ├── layout.tsx        # Shell HTML & metadata SEO
│   ├── page.tsx          # Halaman utama portofolio
│   └── projects.ts       # Data terstruktur seluruh studi kasus
├── components/           # Komponen UI (Radix Dialog, Button)
├── lib/                  # Helper utilities (cn helper)
├── public/               # File statis (foto profil, screenshot, CV PDF, laporan riset)
└── out/                  # Hasil static HTML export
```

---

## 📬 Kontak

- **Nama:** Raka Putra Pratidina
- **Email:** [rakario14@gmail.com](mailto:rakario14@gmail.com)
- **LinkedIn:** [linkedin.com/in/rakaputrapratidina](https://www.linkedin.com/in/rakaputrapratidina/)
- **Website:** [rakaputra.dev](https://rakaputra.dev)
