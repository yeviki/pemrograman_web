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
- **⏰ Total Durasi:** 240 menit (4 jam)
- **📈 Difficulty Level:** Progressive (Basic → Advanced)

---

## Cara menampilkan data di HTML dengan:

    Mustache ({{ }})
    
    Directive v-text
    
    Directive v-html

## Kondisi pengandaian (if statement) menggunakan:

    v-if
    
    v-else
    
    v-else-if
    
    v-show


## 🧠 Tujuan Project

Mahasiswa akan belajar:

Menampilkan data dengan berbagai cara.

Mengontrol tampilan berdasarkan kondisi (if-else).

Memahami perbedaan v-if vs v-show.


## 🧩 Judul Proyek:
```bash
vue-directive-demo
```

## 📘 Langkah-Langkah Setup Awal :

### 1️⃣ Buat proyek Vue 3 baru

Buka terminal, lalu jalankan:
```bash
npm create vue@latest
```

Jawab:
```bash
✔ Project name: … vue-directive-demo
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
cd vue-directive-demo
```

Install dependencies:
```bash
npm install
```

Jalankan proyek:
```bash
npm run dev
```

## 📁 Struktur File Utama

Kita hanya akan ubah file berikut:
```bash
src/
 ├─ App.vue
 ├─ components/
 │   ├─ MustacheDemo.vue
 │   ├─ TextHtmlDemo.vue
 │   └─ ConditionalDemo.vue
```

### 🧩 1. Mustache Syntax

Buat file: src/components/MustacheDemo.vue
```bash
<template>
  <section>
    <h2>1️⃣ Menampilkan Data dengan Mustache</h2>
    <p>Nama: {{ name }}</p>
    <p>Umur: {{ age }} tahun</p>
    <p>Status: {{ isStudent ? 'Mahasiswa Aktif' : 'Bukan Mahasiswa' }}</p>
  </section>
</template>

<script setup>
const name = 'Yeviki Maisyah Putra'
const age = 21
const isStudent = true
</script>

<style scoped>
section {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
}
</style>
```

### 🧠 Penjelasan:

    {{ name }} → Mustache syntax (two curly braces) digunakan untuk menampilkan data JavaScript ke HTML.
    
    isStudent ? 'Mahasiswa Aktif' : 'Bukan Mahasiswa' → ekspresi ternary operator, untuk menampilkan hasil berbeda berdasarkan kondisi boolean.
    
    Semua variabel (name, age, isStudent) berada di dalam <script setup>


### 🧩 2. Directive v-text & v-html

Buat file: src/components/TextHtmlDemo.vue
```bash
<template>
  <section>
    <h2>2️⃣ Menampilkan Data dengan v-text dan v-html</h2>

    <p v-text="message"></p>
    <p v-html="htmlContent"></p>
  </section>
</template>

<script setup>
const message = 'Ini teks dari directive v-text'
const htmlContent = '<b>Ini teks tebal dari directive v-html</b>'
</script>

<style scoped>
section {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
}
</style>
```

### 🧠 Penjelasan:

    v-text="message" → menggantikan isi teks elemen dengan nilai variabel message.
    
    v-html="htmlContent" → render isi HTML dari variabel, bukan sekadar teks.
    
    ⚠️ Hati-hati menggunakan v-html, karena jika datanya berasal dari user input bisa menyebabkan XSS attack (cross-site scripting).
    
    Keduanya adalah cara alternatif dari Mustache syntax jika kamu ingin kontrol penuh atas teks atau HTML di dalam elemen.


### 🧩 3. Kondisi dengan v-if, v-else-if, v-else, dan v-show

Buat file: src/components/ConditionalDemo.vue
```bash
<template>
  <section>
    <h2>3️⃣ Kondisi Pengandaian (v-if, v-else-if, v-else, v-show)</h2>

    <div>
      <label>Pilih status: </label>
      <select v-model="status">
        <option value="aktif">Aktif</option>
        <option value="cuti">Cuti</option>
        <option value="nonaktif">Nonaktif</option>
      </select>
    </div>

    <!-- v-if / v-else-if / v-else -->
    <div style="margin-top: 1rem;">
      <p v-if="status === 'aktif'">Mahasiswa sedang aktif kuliah 🎓</p>
      <p v-else-if="status === 'cuti'">Mahasiswa sedang mengambil cuti 📘</p>
      <p v-else>Mahasiswa tidak aktif ❌</p>
    </div>

    <!-- v-show -->
    <div style="margin-top: 1rem;">
      <button @click="isVisible = !isVisible">Toggle Info</button>
      <p v-show="isVisible">Pesan ini hanya muncul jika tombol ditekan 👀</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const status = ref('aktif')
const isVisible = ref(true)
</script>

<style scoped>
section {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 10px;
}
select, button {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>
```
| Directive   | Fungsi                                            | Catatan                                       |
| ----------- | ------------------------------------------------- | --------------------------------------------- |
| `v-if`      | Menampilkan elemen jika kondisi benar             | Elemen dihapus dari DOM jika `false`          |
| `v-else-if` | Alternatif kondisi tambahan                       | Harus diletakkan tepat setelah `v-if`         |
| `v-else`    | Kondisi terakhir jika semua `false`               | Tidak memiliki ekspresi                       |
| `v-show`    | Menyembunyikan elemen menggunakan `display: none` | Tidak menghapus dari DOM, hanya disembunyikan |


### 🧩 4. Gabungkan Semuanya di App.vue

Buka src/App.vue dan ubah seluruh isi dengan:
```bash
<template>
  <main class="container">
    <h1>🎓 Pembelajaran Vue.js - Menampilkan Data & Kondisi</h1>

    <MustacheDemo />
    <TextHtmlDemo />
    <ConditionalDemo />
  </main>
</template>

<script setup>
import MustacheDemo from './components/MustacheDemo.vue'
import TextHtmlDemo from './components/TextHtmlDemo.vue'
import ConditionalDemo from './components/ConditionalDemo.vue'
</script>

<style>
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f5f6f7;
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

## 🧭 Menjalankan Proyek
```bash
npm run dev
```

Buka di browser:
```bash
👉 http://localhost:5173/
```

    Kamu akan melihat halaman dengan tiga bagian:
    
    Menampilkan data menggunakan Mustache
    
    Menampilkan data menggunakan v-text dan v-html
    
    Menampilkan data bersyarat dengan v-if, v-else-if, v-else, dan v-show

## 🧠 8. Ringkasan Materi
| Topik                       | Directive / Syntax            | Fungsi                                                  |
| --------------------------- | ----------------------------- | ------------------------------------------------------- |
| **Menampilkan data teks**   | `{{ }}`                       | Interpolasi data ke HTML                                |
| **Menampilkan teks manual** | `v-text`                      | Mengganti teks elemen                                   |
| **Menampilkan HTML**        | `v-html`                      | Merender HTML mentah                                    |
| **Kondisi logika**          | `v-if`, `v-else-if`, `v-else` | Menampilkan elemen berdasarkan kondisi                  |
| **Tampilkan/Sembunyikan**   | `v-show`                      | Menyembunyikan elemen tanpa menghapus dari DOM          |
| **Binding nilai input**     | `v-model`                     | Menghubungkan data dengan elemen form (two-way binding) |
| **Event**                   | `@click`                      | Menjalankan fungsi saat tombol diklik                   |
