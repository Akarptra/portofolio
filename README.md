# Portofolio Raka Putra Pratidina

Paket source code dan website statis untuk hosting mandiri. Tampilan, sembilan studi kasus, interaksi, foto, CV, dan laporan penelitian sama dengan versi portofolio yang sudah ditampilkan.

## Mulai dari sini

Ada dua cara menggunakan paket ini:

1. **Vercel + GitHub:** gunakan source code di folder utama. Cara ini cocok jika portofolio akan sering diedit.
2. **Hosting statis:** gunakan seluruh isi folder `out/`. Folder ini sudah berisi hasil build HTML, CSS, JavaScript, foto, dan dokumen.

## A. Deploy ke Vercel melalui GitHub

1. Ekstrak ZIP ini.
2. Buat repository di GitHub, lalu upload source code sehingga `package.json`, `app/`, `public/`, `package-lock.json`, dan `vercel.json` berada di root repository. Jangan upload file ZIP sebagai pengganti source code.
3. Di Vercel, pilih **New Project** lalu impor repository tersebut.
4. Gunakan pengaturan berikut:

| Pengaturan | Nilai |
| --- | --- |
| Framework Preset | Next.js |
| Root Directory | Folder yang berisi `package.json`; biarkan default jika ada di root repo |
| Node.js Version | 22.x atau versi lebih baru yang didukung |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | Biarkan default Next.js |
| Environment Variables | Tidak diperlukan |

5. Klik **Deploy**. Vercel akan memberikan alamat `.vercel.app` jika deployment berhasil.

File `vercel.json` sudah menyimpan pengaturan framework, instalasi, dan build. Folder `node_modules/`, `.next/`, dan `out/` tidak perlu dimasukkan ke GitHub; sudah tercantum dalam `.gitignore`.

## B. Upload ke hosting statis

Upload **seluruh isi** folder `out/` ke root web hosting. Pastikan `index.html`, `_next/`, `images/`, `documents/`, dan `favicon.svg` tetap bersama dengan nama serta susunan folder yang sama. Gunakan root domain atau subdomain, bukan subfolder seperti `/portfolio/`.

Untuk mencoba hasil build di komputer dengan Python:

```bash
cd out
python -m http.server 3000
```

Buka `http://localhost:3000`. Jangan hanya membuka `index.html` dengan klik dua kali, karena aset memakai path dari root website.

## Menjalankan dan mengedit source code

Instal Node.js 22.13 atau lebih baru, lalu buka terminal pada folder utama hasil ekstraksi:

```bash
npm ci
npm run dev
```

Buka `http://localhost:3000`.

Sesudah melakukan perubahan:

```bash
npm run build
```

Build ini menghasilkan ulang folder `out/`. Jika memakai integrasi GitHub dengan Vercel, push perubahan ke branch deployment agar Vercel membangun ulang website.

## File yang paling sering diedit

| Kebutuhan | File |
| --- | --- |
| Isi halaman, pengalaman, email, dan LinkedIn | `app/page.tsx` |
| Detail sembilan proyek | `app/projects.ts` |
| Warna, ukuran, font, dan responsivitas | `app/globals.css` |
| Judul tab dan deskripsi website | `app/layout.tsx` |
| Foto profil | `public/images/raka.jpg` |
| Gambar NutriMood | `public/images/nutrimood.png` |
| CV | `public/documents/raka-putra-cv.pdf` |
| Laporan BRIN | `public/documents/autonomous-vehicle-research.pdf` |
| Ikon tab | `public/favicon.svg` |

Pertahankan nama file gambar/PDF saat mengganti isinya, atau sesuaikan path yang mengarah ke file tersebut di source code. Tombol kontak membuka aplikasi email; tidak memerlukan layanan pengiriman email, database, atau API key.

## Menghubungkan rakaputra.dev

Setelah deployment Vercel berhasil, buka **Project → Settings → Domains**, tambahkan `rakaputra.dev`, lalu gunakan record DNS yang ditampilkan Vercel pada penyedia DNS domain. Jika DNS masih dikelola Name.com, pengaturannya ada di **Manage DNS Records**. Tunggu sampai Vercel menandai domain dan SSL aktif. Alamat `.vercel.app` tetap tersedia sebagai alamat alternatif.

## Stack dan verifikasi

- Next.js 16.3.4, React 19.2.6, dan TypeScript.
- Tailwind CSS, CSS custom, Radix Dialog, dan Lucide icons.
- Static export melalui `output: "export"` pada `next.config.ts`.
- Build produksi dan pemeriksaan TypeScript berhasil pada 18 September 2026.
- Semua referensi aset lokal pada halaman hasil export telah diperiksa.
- Isi halaman dan stylesheet dibandingkan dengan versi portofolio sebelumnya dan identik.
- Paket ini belum dideploy ke akun Vercel milikmu.

Source ekspor ini berdiri sendiri dan tidak memerlukan login ChatGPT, konfigurasi Cloudflare Workers, atau kredensial server. ZIP tidak menyertakan dependency terinstal, cache build, credential, maupun arsip proyek asli.

## Referensi

- Next.js static export: https://nextjs.org/docs/app/guides/static-exports
- Deploy Git repository di Vercel: https://vercel.com/docs/git
- Domain Vercel: https://vercel.com/docs/domains/working-with-domains
