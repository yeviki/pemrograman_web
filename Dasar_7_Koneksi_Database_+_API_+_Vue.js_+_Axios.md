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

## 🧩 Vue 3 : Koneksi Database + API + Vue.js + Axios

Kita akan membangun project sederhana:

Backend: Node.js + Express + MySQL

Frontend: Vue 3 + Axios

Fitur:

Koneksi database MySQL

API untuk mengambil data users

Vue.js mengambil data menggunakan Axios

Menampilkan data dalam tabel

------------------------------
## 🟦 BAGIAN 1 – BACKEND (API)
------------------------------
## 1️⃣ Instalasi Backend
### 1. Install Node.js

Download dari: https://nodejs.org

Cek versi:
```
node -v
npm -v
```

### 2. Buat folder project backend
```
mkdir api-server
cd api-server
```

### 3. Inisialisasi project
```
npm init -y
```

### 4. Install package
```
npm install express mysql2 cors
```

## 2️⃣ Setup Database MySQL
### 1. Buat database
```
CREATE DATABASE vue_api_demo;
```

### 2. Buat tabel users
```
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);
```

### 3. Insert contoh data
```
INSERT INTO users (name, email)
VALUES 
('Budi Santoso', 'budi@mail.com'),
('Siti Aisyah', 'siti@mail.com'),
('Agus Pratama', 'agus@mail.com');
```

## 3️⃣ Buat File Server Express

Buat file:
```
api-server/server.js
```

Isi kodenya:
```
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Koneksi database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",      // sesuaikan
  password: "",       // sesuaikan
  database: "vue_api_demo"
});

// Tes koneksi
db.connect((err) => {
  if (err) {
    console.log("MySQL Connection Error:", err);
    return;
  }
  console.log("MySQL Connected...");
});

// Endpoint GET users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Jalankan server
app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
```

Jalankan server
```
node server.js atau
npm run dev
```

Jika berhasil:
```
➡️ Server berjalan di http://localhost:3000
➡️ Coba buka: http://localhost:3000/users
```

----------------------------------
## 🟩 BAGIAN 2 – FRONTEND VUE + AXIOS
----------------------------------
## 4️⃣ Instalasi Project Vue

Buat project Vue 3:
```
npm init vue@latest vue-client


Pilih:

Vue Router: Optional

Pinia: optional

ESLint: Y

Prettier: bebas
```

Masuk folder:
```
cd vue-client
npm install
```

Install axios:
```
npm install axios
```

5️⃣ Membuat Service API

Buat folder:
```
src/api/axios.js
```

Isi:
```
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"
});

export default api;
```

6️⃣ Ambil data dari API di Vue

Edit file:
```
src/components/UsersTable.vue
```

Tambahkan kode:
```
<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Data Users</h1>

    <table border="1" cellpadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../api/axios";

const users = ref([]);

onMounted(async () => {
  const res = await api.get("/users");
  users.value = res.data;
});
</script>
```

7️⃣ Tampilkan di App.vue

Edit:
```
src/App.vue

<template>
  <div class="p-10">
    <UsersTable />
  </div>
</template>

<script setup>
import UsersTable from "./components/UsersTable.vue";
</script>
```

8️⃣ Jalankan Vue
```
npm run dev
```

Buka browser:
```
➡️ http://localhost:5173
```

Jika berhasil, tabel data tampil.

------------------------------
## 🟧 RANGKUMAN ALUR PROJECT
------------------------------
Backend

✔ Express → handle API
✔ MySQL2 → koneksi database
✔ Endpoint /users

Frontend (Vue)

✔ Axios → request API
✔ Table → menampilkan data
✔ onMounted → load data otomatis

🏁 Selesai!

Project sederhana tapi lengkap untuk materi:

Koneksi database

REST API

Axios

Vue.js
