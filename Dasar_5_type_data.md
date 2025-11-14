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

## 🧩 Vue 3 : Menerapkan berbagai tipe data, ciri-ciri masing-masing tipe data terutama Array dan Object

## 🎓 **Menerapkan berbagai tipe data dalam Vue 3

➤ Fokus pada Array dan Object**
Disertai penjelasan konsep, contoh project lengkap, struktur folder, kode dengan komentar, dan langkah instalasi.

## 🧠 1. PENJELASAN TEORI — TIPE DATA DASAR DI JAVASCRIPT & VUE 3
### 🔹 1. Number

Digunakan untuk angka
Contoh:
```dash
const umur = 21
```
---

### 🔹 2. String

Teks
```dash
const nama = "Yeviki"
```
---

### 🔹 3. Boolean
```dash
true / false

const aktif = true
```
---

### 🔹 4. Array (PENTING)

Berisi kumpulan data berurutan (list)
```dash
const buah = ["Apel", "Jeruk", "Mangga"]
```
Ciri-ciri Array :

- Index dimulai dari 0

- Isinya bisa campuran tipe data

- Cocok untuk list data yang ingin ditampilkan dengan v-for

- Banyak method bawaan (push, map, filter, dll)
---

### 🔹 5. Object (PENTING)

Berisi data dalam bentuk key:value
```dash
const user = {
  nama: "Yeviki",
  umur: 20,
  online: false
}
```
Ciri-ciri Object :

- Menampung data lebih terstruktur

- Bisa berisi object lain (nested object)

- Menggunakan key yang jelas

- Cocok untuk data satu entitas (misal profil user)
---

## 💡 Perbandingan Array vs Object
| Fitur                  | Array          | Object             |
| ---------------------- | -------------- | ------------------ |
| Bentuk                 | List berurutan | Koleksi key:value  |
| Akses                  | `array[0]`     | `obj.nama`         |
| Direkomendasikan untuk | Daftar data    | Satu data lengkap  |
| Bisa di-loop?          | Ya (`v-for`)   | Ya (`v-for` objek) |

---

## 🚀 2. CONTOH PROJECT VUE 3 (PRAKTIK)
### 🎯 Judul Project:

“Daftar Produk & Detail User – Penerapan Array dan Object dalam Vue 3”

## 🌟 Fitur Project

✔ Menampilkan list produk (ARRAY)
✔ Menampilkan profil user (OBJECT)
✔ Input form untuk menambah produk ke array
✔ Watcher sederhana untuk melihat perubahan data

## 🏗️ 3. LANGKAH-LANGKAH MEMBUAT PROJECT
### 1️⃣ Buat project Vue 3
```dash
npm create vue@latest
```

Pilih :

- Vue Router → optional (boleh No)

- Pinia → optional

- ESLint → optional

Masuk folder:
```dash
cd nama-project
npm install
npm run dev
```

### 📁 4. STRUKTUR PROJECT
```dash
src/
 ├─ App.vue
 └─ components/
      └─ DataDemo.vue
```

### 🧩 5. KODE: App.vue (dengan penjelasan)
```dash
<template>
  <div class="container">
    <h1>Demo Tipe Data: Array & Object</h1>

    <!-- Memanggil komponen -->
    <DataDemo />
  </div>
</template>

<script setup>
import DataDemo from './components/DataDemo.vue'
</script>

<style>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: Arial;
}
</style>
```

### 🧩 6. KODE: DataDemo.vue (KODE + PENJELASAN)
```dash
<template>
  <div>

    <!-- ============================================ -->
    <!-- BAGIAN 1: MENAMPILKAN OBJECT (DATA USER)     -->
    <!-- ============================================ -->

    <h2>📌 Data User (Object)</h2>

    <p><strong>Nama:</strong> {{ user.name }}</p>
    <p><strong>Umur:</strong> {{ user.age }}</p>
    <p><strong>Status Online:</strong> {{ user.online ? "Online" : "Offline" }}</p>

    <hr />

    <!-- ============================================ -->
    <!-- BAGIAN 2: ARRAY PRODUK                       -->
    <!-- ============================================ -->

    <h2>📦 Daftar Produk (Array)</h2>

    <!-- Form input menambah produk -->
    <input v-model="newProduct" placeholder="Nama produk baru..." />
    <button @click="addProduct">Tambah Produk</button>

    <!-- Menampilkan array dengan v-for -->
    <ul>
      <li v-for="(item, index) in products" :key="index">
        {{ index + 1 }}. {{ item }}
      </li>
    </ul>

    <hr />

    <!-- ============================================ -->
    <!-- WATCHER (opsional untuk pembelajaran)        -->
    <!-- ============================================ -->

    <h3>Console Log:</h3>
    <p>Lihat console browser untuk melihat watcher bekerja.</p>

  </div>
</template>

<script setup>
import { ref, watch } from "vue"

/* ---------------------------------------------
   OBJECT: Data user
--------------------------------------------- */
const user = ref({
  name: "Yeviki",
  age: 21,
  online: true
})

/* ---------------------------------------------
   ARRAY: Daftar produk
--------------------------------------------- */
const products = ref([
  "Laptop",
  "Mouse",
  "Keyboard"
])

/* Input untuk nambah produk baru ke array */
const newProduct = ref("")

/* Function menambah item ke array */
function addProduct() {
  if (newProduct.value.trim() === "") return
  products.value.push(newProduct.value)
  newProduct.value = ""
}

/* ---------------------------------------------
   WATCHER
   Memantau perubahan array products
--------------------------------------------- */
watch(products, (newVal) => {
  console.log("Produk terbaru:", newVal)
}, { deep: true })

</script>

<style scoped>
input {
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #aaa;
  border-radius: 5px;
}
button {
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}
ul {
  margin-top: 15px;
}
</style>
```

## 📘 7. PENJELASAN PROJECT UNTUK MAHASISWA
### 🔵 Bagian Object
```dash
const user = ref({
  name: "Yeviki",
  age: 21,
  online: true
})
```

Object cocok untuk menyimpan data terstruktur satu entitas (user).

### 🔵 Bagian Array
```dash
const products = ref(["Laptop", "Mouse", "Keyboard"])
```

Array cocok untuk daftar data yang dapat di-loop menggunakan v-for.

### 🔵 Menambah item ke Array
```dash
products.value.push(newProduct.value)
```

### 🔵 Watcher untuk memantau perubahan Array
```dash
watch(products, (newVal) => {
  console.log("Produk terbaru:", newVal)
}, { deep: true })
```

## 🎉 8. HASIL AKHIR PROJECT

- ✔ Menampilkan object user
- ✔ Menampilkan list produk dari array
- ✔ Bisa menambah item baru
- ✔ Watcher menampilkan log perubahan
- ✔ Cocok untuk praktikum mahasiswa
