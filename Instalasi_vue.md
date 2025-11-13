# Pemrograman Berbasis Web
Assalamualaikum, wr, wb, Semoga Kita Sehat Selalu, berikut adalah bahan materi dan langkah-langkah belajar mandiri untuk pemrograman berbasis web, diharapkan materi ini dapat mempermudah dan memahami semua pembahasan yang ada, selamat mengerjakan... ^_^

# 📱 TUWEB Pemrograman Berbasis Web
## Pemrograman Berbasis Web

<div align="center">

![Status](https://img.shields.io/badge/Status-Completed-green)
![Materials](https://img.shields.io/badge/Materials-3%20Sessions-blue)
![Target](https://img.shields.io/badge/Target-Universitas%20Terbuka-orange)

</div>

---

## 🎯 Tentang Repository

Repository ini berisi **materi TUWEB (Tutorial Web)** lengkap untuk mata kuliah **Pemrograman Berbasis Web (MSIM4309)** Universitas Terbuka. Materi dirancang dengan pendekatan **Learning by Doing** untuk mahasiswa pemula.

### 📊 Project Information
- **👨‍🏫 Dosen Pengampu:** Yeviki Maisyah Putra, S.Kom, M.Kom
- **💼 Office :** Dinas Komunikasi, Informatika dan Statistik Provinsi Sumatera Barat
- **🏛️ Universitas :** 
    1. Universitas Putra Indonesia YTPK Padang, Sistem Informasi, Fakultas Ilmu Komputer
    2. Universitas Terbuka
- **🎯 Target Audience:** Mahasiswa tingkat pemula
- **⏰ Total Durasi:** 360 menit (6 jam)
- **📈 Difficulty Level:** Progressive (Basic → Advanced)

---


🧩 1. Pastikan Prasyarat Terpasang

Pastikan kamu sudah punya di komputer kamu:

Node.js versi ≥ 16
👉 Cek versi:
```bash
node -v
```

npm (sudah otomatis ada saat instal Node.js)
👉 Cek versi:
```bash
npm -v
```

Kalau belum ada, install Node.js dari situs resmi:
🔗 https://nodejs.org

⚙️ 2. Buat Proyek Baru Vue 3

Gunakan perintah bawaan dari Vite:

npm create vue@latest


Jika kamu pertama kali menjalankannya, npm akan menanyakan beberapa pilihan.

Kamu akan ditanya beberapa hal, misalnya:

✔ Project name: … my-vue-app
✔ Add TypeScript? … No
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … Yes (jika ingin router)
✔ Add Pinia for state management? … Yes (opsional)
✔ Add Vitest for Unit Testing? … No
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes


Setelah itu, perintah akan otomatis membuat folder my-vue-app.

📦 3. Masuk ke Folder Proyek
cd my-vue-app


Lalu install dependensi:

npm install

🚀 4. Jalankan Proyek Vue 3
npm run dev


Kemudian buka link yang muncul, biasanya:

http://localhost:5173/


Kalau tampil tulisan "Hello Vue 3", berarti berhasil 🎉

🧱 5. Struktur Folder Dasar

Struktur default proyek Vue 3 (Vite) biasanya seperti ini:

my-vue-app/
├─ node_modules/
├─ public/
│  └─ favicon.ico
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  └─ HelloWorld.vue
│  ├─ App.vue
│  └─ main.js
├─ index.html
├─ package.json
├─ vite.config.js


Penjelasan singkat:

src/main.js → titik masuk aplikasi

src/App.vue → komponen utama

src/components/ → tempat komponen buatanmu

index.html → halaman utama

🎨 6. Mulai Koding

Contoh isi App.vue sederhana:

<template>
  <h1>{{ message }}</h1>
  <button @click="count++">Klik {{ count }}</button>
</template>

<script setup>
import { ref } from 'vue'

const message = 'Halo dari Vue 3 🚀'
const count = ref(0)
</script>

<style>
h1 {
  color: #42b883;
}
button {
  margin-top: 10px;
}
</style>

🧰 7. (Opsional) Install Extension

Kalau kamu pakai VS Code, install:

Volar (pengganti Vetur, untuk Vue 3)

TypeScript Vue Plugin (Volar)

ESLint + Prettier (untuk format otomatis)
