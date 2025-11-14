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

## 🧩 Vue 3 : Watcher

Apa itu Vue Watcher?

Watcher adalah fitur Vue yang memantau perubahan sebuah data, lalu menjalankan fungsi tertentu secara otomatis.

Digunakan ketika:

- Anda ingin melakukan aksi setiap kali data berubah

- Misalnya: Log perubahan, memanggil API, menjalankan validasi, dll.


## Contoh Project Vue 3: “Live Search & Monitoring”

### Project ini memiliki fitur:

      Input pencarian (search box)
      
      Daftar item yang otomatis difilter
      
      Watcher yang memantau:
      
      perubahan searchText
      
      perubahan jumlah item hasil filter
      
      perubahan route (opsional)

## 🧱 1. Langkah-Langkah Membuat Project Vue 3
### 1️⃣ Buat Project Vue 3
```bash
npm create vue@latest
```

Pilih default atau tambahkan TypeScript opsional.

Masuk ke folder project:
```bash
cd nama-project
npm install
npm run dev
```
----

### 🧱 2. Struktur File Sederhana
```bash
src/
 ├─ App.vue
 └─ components/
      └─ ItemSearch.vue
```
---

### 🧩 3. Kode Lengkap: App.vue
```bash
<template>
  <!-- Container utama aplikasi -->
  <div class="container">
    <h1>Vue 3 Watcher Demo</h1>

    <!-- Memanggil komponen ItemSearch -->
    <ItemSearch />
  </div>
</template>

<script setup>
// Import komponen ItemSearch
import ItemSearch from './components/ItemSearch.vue'
</script>

<style>
/* Styling sederhana */
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: Arial;
}
</style>
```
---

### 🧩 4. Kode Lengkap: ItemSearch.vue

Berikut komponen yang berisi watcher.
```bash
<template>
  <div>
    <h2>Live Search</h2>

    <input 
      v-model="searchText"
      type="text" 
      placeholder="Ketik untuk mencari..."
      class="input-box"
    />

    <p>Jumlah hasil: {{ filteredItems.length }}</p>

    <ul>
      <li v-for="item in filteredItems" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue"

// DATA
const searchText = ref("")
const items = ref([
  "Apple", "Banana", "Orange", "Mango", "Watermelon",
  "Grapes", "Avocado", "Strawberry"
])

// COMPUTED
const filteredItems = computed(() => {
  return items.value.filter(item =>
    item.toLowerCase().includes(searchText.value.toLowerCase())
  )
})

/* ========================
   WATCHER 1: Pantau searchText
=========================== */
watch(searchText, (newVal, oldVal) => {
  console.log(`Search berubah dari "${oldVal}" menjadi "${newVal}"`)
})

/* ========================
   WATCHER 2: Pantau hasil filter
=========================== */
watch(filteredItems, (newVal) => {
  console.log("Jumlah hasil:", newVal.length)
})

/* ========================
   WATCHER 3: Watch Deep Object (contoh)
=========================== */
const profile = ref({
  name: "Yeviki",
  status: { online: false }
})

// deep watch
watch(profile, (val) => {
  console.log("Profile berubah:", val)
}, { deep: true })
</script>

<style scoped>
.input-box {
  padding: 10px;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid #aaa;
  border-radius: 6px;
}
</style>
```
---

### 🧠 5. Penjelasan Watcher yang Digunakan

### 🔍 1. watch(searchText, ...)

Digunakan untuk memantau perubahan teks input:
```bash
watch(searchText, (newVal, oldVal) => {
  console.log(`Berubah dari ${oldVal} ke ${newVal}`)
})
```

### 🔍 2. watch(filteredItems, ...)

Karena ini computed, Vue tetap bisa memantau output-nya:
```bash
watch(filteredItems, (newVal) => {
  console.log("Jumlah hasil:", newVal.length)
})
```

### 🔍 3. watch object dengan deep: true

Jika objek memiliki banyak level:
```bash
watch(profile, (value) => {
  console.log("Profile berubah", value)
}, { deep: true })
```

### 🚀 6. Cara Menjalankan

Pastikan semua dependensi terinstall:
```bash
npm install
npm run dev
```

Buka browser di:
```bash
http://localhost:5173
```

### 🎉 7. Hasil Akhir

Saat user mengetik di search:

- ✔ Daftar otomatis terfilter
- ✔ Console log menampilkan perubahan
- ✔ Watcher menghitung jumlah item yang cocok
- ✔ Deep watcher memantau perubahan nested object
