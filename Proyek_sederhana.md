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


## 🧩 Tahap 1 – Proyek Vue 3 Sederhana (Single Page App)
## 1️⃣ Buat proyek baru

Buka terminal dan jalankan:
```bash
npm create vue@latest
```

Jawab seperti ini:
```bash
✔ Project name: … vue-basic-app
✔ Add TypeScript? … No
✔ Add JSX Support? … No
✔ Add Vue Router? … No
✔ Add Pinia? … No
✔ Add Vitest? … No
✔ Add ESLint? … No
✔ Add Prettier? … No
```

Masuk ke folder proyek:
```bash
cd vue-basic-app
```

Lalu install dependency:
```bash
npm install
```

## 2️⃣ Jalankan proyek
```bash
npm run dev
```

Biasanya akan muncul link:
```bash
http://localhost:5173/
```

Kalau sudah tampil “Hello Vue 3”, proyek siap ✨

## 3️⃣ Edit tampilan utama

Buka file src/App.vue dan ganti seluruh isinya dengan ini 👇
```bash
<template>
  <div class="app">
    <h1>{{ title }}</h1>

    <p>Halo, ini contoh proyek Vue 3 dasar 🚀</p>

    <div class="counter">
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
    </div>

    <input
      v-model="name"
      type="text"
      placeholder="Ketik namamu di sini"
    />

    <p v-if="name">Halo, {{ name }}! 👋</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Data reactive
const title = 'Aplikasi Vue 3 Pertamamu'
const count = ref(0)
const name = ref('')

// Fungsi event
const increment = () => count.value++
const decrement = () => count.value--
</script>

<style>
body {
  font-family: 'Segoe UI', sans-serif;
  background: #f4f4f4;
  margin: 0;
  padding: 0;
}
.app {
  text-align: center;
  margin-top: 60px;
}
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 20px 0;
}
button {
  background: #42b883;
  border: none;
  color: white;
  padding: 10px 15px;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background: #2b8a63;
}
input {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
}
</style>
```

## 4️⃣ Jalankan ulang (kalau perlu)
```bash
npm run dev
```

Sekarang kamu akan melihat:
✅ Judul aplikasi
✅ Tombol + dan – untuk menghitung
✅ Input nama yang menampilkan sapaan otomatis

## 5️⃣ Penjelasan singkat
Bagian	Fungsi
| Bagian           | Fungsi                                        |
| ---------------- | --------------------------------------------- |
| `<template>`     | Tempat struktur HTML                          |
| `<script setup>` | Tempat logika (variabel, fungsi, reaktifitas) |
| `<style>`        | Gaya tampilan (CSS)                           |
| `ref()`          | Membuat data reaktif                          |
| `v-model`        | Two-way binding                               |
| `v-if`           | Menampilkan elemen jika kondisi benar         |
| `@click`         | Event handler klik tombol                     |
