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

## Vue 3 Data Binding Demo

### - 1️⃣ One-way data binding
### - 2️⃣ Two-way data binding
### - 3️⃣ Directive v-bind
### - 4️⃣ Directive v-model
---

## 🎯 Tujuan Pembelajaran

  Mahasiswa mampu memahami dan menerapkan:
  
  Konsep one-way data binding dan two-way data binding pada Vue.js.
  
  Penggunaan directive v-bind untuk menghubungkan atribut HTML dengan data.
  
  Penggunaan directive v-model untuk menghubungkan data dan input form.

## 🚀 1. Membuat Proyek Baru

Buka terminal dan jalankan:
```bash
npm create vue@latest
```

Jawab seperti ini:
```bash
✔ Project name: … vue-databinding-demo
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
cd vue-databinding-demo
```

Install dependensi:
```bash
npm install
```

Jalankan proyek:
```bash
npm run dev
```

📁 Struktur Folder
```bash
src/
 ├─ App.vue
 └─ components/
     ├─ OneWayBinding.vue
     ├─ TwoWayBinding.vue
     ├─ BindDirective.vue
     └─ ModelDirective.vue
```
---

## 🧩 2. One-Way Data Binding
📄 File: src/components/OneWayBinding.vue
```bash
<template>
  <section>
    <h2>1️⃣ One-Way Data Binding</h2>
    <p>Nama: {{ name }}</p>
    <p>Umur: {{ age }}</p>

    <button @click="ubahData">Ubah Data</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('Yeviki Maisyah Putra')
const age = ref(21)

const ubahData = () => {
  name.value = 'Mahasiswa Vue.js'
  age.value = 25
}
</script>

<style scoped>
section {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}
button {
  margin-top: 10px;
  padding: 8px 12px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #2b8a63;
}
</style>
```

### 🧠 Penjelasan:

    One-way artinya data hanya mengalir dari script ke tampilan (view).
    
    Jika kita mengubah name atau age dari kode (bukan dari input user), tampilan otomatis ikut berubah.
    
    Tapi user tidak bisa langsung mengubah data di layar, karena tidak ada input form yang mengikat datanya.
---

## 🧩 3. Two-Way Data Binding (v-model)
📄 File: src/components/TwoWayBinding.vue
```bash
<template>
  <section>
    <h2>2️⃣ Two-Way Data Binding</h2>

    <label>Masukkan nama:</label>
    <input type="text" v-model="name" placeholder="Ketik nama..." />

    <p>Nama kamu adalah: <b>{{ name }}</b></p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
</script>

<style scoped>
section {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}
input {
  margin-top: 5px;
  padding: 8px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ddd;
}
</style>
```

### 🧠 Penjelasan:

    v-model menghubungkan variabel name dengan input teks.
    
    Saat user mengetik di input, nilai name langsung berubah.
    
    Saat nilai name diubah lewat script, isi input juga ikut berubah.
    
    Ini disebut two-way data binding karena data dan tampilan saling terhubung dua arah.
---

## 🧩 4. Directive v-bind
📄 File: src/components/BindDirective.vue
```bash
<template>
  <section>
    <h2>3️⃣ Directive v-bind</h2>

    <p>Klik tombol untuk ubah warna teks:</p>
    <p :style="{ color: textColor }">Warna teks ini berubah secara dinamis</p>

    <button @click="ubahWarna">Ubah Warna</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const textColor = ref('blue')

const ubahWarna = () => {
  textColor.value = textColor.value === 'blue' ? 'red' : 'blue'
}
</script>

<style scoped>
section {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}
button {
  margin-top: 10px;
  padding: 8px 12px;
  background: #35495e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #2c3e50;
}
</style>
```

### 🧠 Penjelasan:

    v-bind digunakan untuk mengikat atribut HTML dengan variabel data.
    
    Bentuk singkatnya adalah :attribute.
    
    Contoh: :style="{ color: textColor }"
    → mengubah warna teks berdasarkan nilai variabel textColor.
    
    Saat textColor berubah, gaya HTML langsung diperbarui otomatis.
---

## 🧩 5. Directive v-model (Form Lengkap)
📄 File: src/components/ModelDirective.vue
```bash
<template>
  <section>
    <h2>4️⃣ Directive v-model pada Form</h2>

    <label>Nama:</label>
    <input v-model="form.nama" type="text" placeholder="Nama lengkap" />

    <label>Program Studi:</label>
    <select v-model="form.prodi">
      <option value="">-- Pilih Prodi --</option>
      <option>Informatika</option>
      <option>Sistem Informasi</option>
      <option>Teknologi Informasi</option>
    </select>

    <label>Status Mahasiswa:</label>
    <input type="checkbox" v-model="form.isActive" /> Aktif

    <hr />
    <p><b>Data yang diinput:</b></p>
    <pre>{{ form }}</pre>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nama: '',
  prodi: '',
  isActive: false,
})
</script>

<style scoped>
section {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
}
label {
  display: block;
  margin-top: 10px;
}
input, select {
  padding: 6px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-top: 5px;
}
pre {
  background: #f6f6f6;
  padding: 10px;
  border-radius: 6px;
}
</style>
```

### 🧠 Penjelasan:

    v-model bisa digunakan untuk semua elemen form:
    
    input teks → data string
    
    select → data pilihan
    
    checkbox → data boolean
    
    Kita menggunakan reactive() agar form bisa menyimpan banyak field dalam satu objek.
---

## 🧩 6. Gabungkan Semua di App.vue
📄 File: src/App.vue
```bash
<template>
  <main class="container">
    <h1>🎓 Pembelajaran Vue.js - Data Binding</h1>

    <OneWayBinding />
    <TwoWayBinding />
    <BindDirective />
    <ModelDirective />
  </main>
</template>

<script setup>
import OneWayBinding from './components/OneWayBinding.vue'
import TwoWayBinding from './components/TwoWayBinding.vue'
import BindDirective from './components/BindDirective.vue'
import ModelDirective from './components/ModelDirective.vue'
</script>

<style>
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f6f8;
  margin: 0;
}
.container {
  max-width: 700px;
  margin: 40px auto;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
```

## 🧭 7. Menjalankan Proyek
```bash
npm run dev
```

Akses di browser:
```bash
👉 http://localhost:5173/
```

## 🧠 8. Ringkasan Materi
Konsep	Directive	Deskripsi
One-Way Binding	{{ }}	Menampilkan data dari script ke HTML (satu arah)
Two-Way Binding	v-model	Menghubungkan data dengan input form (dua arah)
v-bind	:attribute	Mengikat atribut HTML dengan data variabel
v-model (form)	v-model="form.nama"	Sinkronisasi input, select, checkbox ke variabel data
