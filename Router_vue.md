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

## 🧩 Tahap 2 – Vue 3 + Router + Layout (Full SPA)
## 🧱 1️⃣ Buat Proyek Baru

Di terminal jalankan:
```bash
npm create vue@latest
```

Lalu isi seperti ini:
```bash
✔ Project name: … vue-full-app
✔ Add TypeScript? … No
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … Yes
✔ Add Pinia for state management? … No
✔ Add Vitest for Unit Testing? … No
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes
```

Masuk ke folder:
```bash
cd vue-full-app
```

Lalu install dependensi:
```bash
npm install
```

## ⚙️ 2️⃣ Jalankan Aplikasi
```bash
npm run dev
```

Buka di browser:
```bash
👉 http://localhost:5173/
```

Kalau sudah tampil halaman Home, berarti sukses 🎉

## 🧩 3️⃣ Struktur Folder Utama

Setelah terbuat, struktur utamanya akan seperti ini:
```bash
vue-full-app/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ Navbar.vue
│  │  └─ Footer.vue
│  ├─ layouts/
│  │  └─ MainLayout.vue
│  ├─ views/
│  │  ├─ HomeView.vue
│  │  ├─ AboutView.vue
│  │  └─ ContactView.vue
│  ├─ router/
│  │  └─ index.js
│  ├─ App.vue
│  └─ main.js
└─ package.json
```

## 💡 4️⃣ Tambahkan Layout dan Komponen Dasar
### 🔸 src/components/Navbar.vue
```bash
<template>
  <nav class="navbar">
    <h1 class="logo">Vue Full App</h1>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: #42b883;
  color: white;
}
ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
a.router-link-exact-active {
  text-decoration: underline;
}
</style>
```

### 🔸 src/components/Footer.vue
```bash
<template>
  <footer class="footer">
    <p>© 2025 Vue Full App — All Rights Reserved</p>
  </footer>
</template>

<style scoped>
.footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: 40px;
}
</style>
```

### 🔸 src/layouts/MainLayout.vue
```bash
<template>
  <div class="layout">
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
  padding: 30px;
}
</style>
```

## 🧭 5️⃣ Tambahkan Halaman (Views)
### 🔸 src/views/HomeView.vue
```bash
<template>
  <section>
    <h2>Selamat Datang di Vue Full App 🎉</h2>
    <p>Ini adalah halaman utama aplikasi Vue 3 dengan router dan layout.</p>
  </section>
</template>

<style scoped>
h2 {
  color: #42b883;
}
</style>
```

### 🔸 src/views/AboutView.vue
```bash
<template>
  <section>
    <h2>Tentang Aplikasi Ini</h2>
    <p>
      Aplikasi ini dibuat menggunakan Vue 3 (Composition API) dan Vite, dengan router untuk navigasi antar halaman.
    </p>
  </section>
</template>

<style scoped>
h2 {
  color: #2c3e50;
}
</style>
```

### 🔸 src/views/ContactView.vue
```bash
<template>
  <section>
    <h2>Hubungi Kami</h2>
    <form class="contact-form" @submit.prevent="submitForm">
      <input v-model="name" placeholder="Nama" required />
      <input v-model="email" placeholder="Email" type="email" required />
      <textarea v-model="message" placeholder="Pesan..." required></textarea>
      <button type="submit">Kirim</button>
    </form>

    <p v-if="submitted">Terima kasih, {{ name }}! Pesanmu telah dikirim ✅</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

const submitForm = () => {
  submitted.value = true
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
}
input, textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
button {
  background: #42b883;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
```

## ⚙️ 6️⃣ Atur Router

Buka file src/router/index.js, ubah isinya menjadi seperti ini:
```bash
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'Home', component: HomeView },
      { path: 'about', name: 'About', component: AboutView },
      { path: 'contact', name: 'Contact', component: ContactView },
    ],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
```

## 🧩 7️⃣ Ubah App.vue

Ganti semua isi App.vue menjadi:
```bash
<template>
  <RouterView />
</template>
```

## ✅ 8️⃣ Jalankan Aplikasi
```bash
npm run dev
```

Kamu sekarang bisa berpindah antar halaman:
🏠 Home | ℹ️ About | ✉️ Contact
dengan navigasi di Navbar, tanpa reload halaman — Single Page Application (SPA).

## 🧾 9️⃣ Fitur yang Sudah Ada

✅ Vue Router
✅ Layout reusable (Navbar + Footer)
✅ Tiga halaman (Home, About, Contact)
✅ Komponen & struktur modular
✅ CSS scoped di tiap file
✅ Form sederhana dengan binding dan conditional rendering
