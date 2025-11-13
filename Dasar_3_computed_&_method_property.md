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

### - computed property

### - methods property

### - serta perbedaan keduanya

Struktur dan gaya penjelasan tetap seperti modul sebelumnya agar mahasiswa bisa membacanya secara konsisten.

🧩 Vue 3 : Penggunaan Property dalam Vue.js
🎯 Tujuan Pembelajaran

Setelah mempelajari modul ini, mahasiswa dapat:

### - 1️⃣ Menggunakan computed property untuk memproses data secara reaktif.

### - 2️⃣ Menggunakan methods property untuk memproses data berdasarkan pemanggilan fungsi.

### - 3️⃣ Menjelaskan perbedaan antara computed dan methods.
---

## 🏗️ Persiapan Project

Kita lanjut dari project sebelumnya atau buat project baru dengan struktur berikut:
```bash
vue-properties/
├── index.html
└── js/
    └── app.js
```

### 🧠 1. Menggunakan computed Property
📄 File: index.html
```bash
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Computed Property Vue.js</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">
    <h2>Contoh Computed Property</h2>

    <p>Nama Depan: {{ firstName }}</p>
    <p>Nama Belakang: {{ lastName }}</p>
    <p><b>Nama Lengkap:</b> {{ fullName }}</p>
  </div>

  <script src="js/app.js"></script>
</body>
</html>
```

📄 File: js/app.js
```bash
const { createApp } = Vue;

createApp({
  data() {
    return {
      firstName: "Yeviki",
      lastName: "Putra"
    };
  },
  computed: {
    fullName() {
      // computed akan otomatis memperbarui nilai jika data yang digunakan berubah
      return this.firstName + " " + this.lastName;
    }
  }
}).mount("#app");
```

### 🧩 Penjelasan

computed digunakan untuk mengolah data secara otomatis (reaktif).

Jika firstName atau lastName berubah, maka fullName akan ikut berubah tanpa dipanggil ulang secara manual.

Computed bersifat cache (disimpan sementara), jadi tidak dieksekusi ulang kecuali data yang dipakainya berubah.
---

### ⚙️ 2. Menggunakan methods Property

Ubah file index.html sedikit:
```bash
<div id="app">
  <h2>Contoh Methods Property</h2>

  <p>Nama Depan: {{ firstName }}</p>
  <p>Nama Belakang: {{ lastName }}</p>
  <p><b>Nama Lengkap (Methods):</b> {{ getFullName() }}</p>

  <button @click="changeName">Ubah Nama</button>
</div>
```

📄 File: js/app.js
```bash
const { createApp } = Vue;

createApp({
  data() {
    return {
      firstName: "Yeviki",
      lastName: "Putra"
    };
  },
  methods: {
    getFullName() {
      // metode biasa yang dijalankan setiap kali dipanggil
      console.log("getFullName dijalankan!");
      return this.firstName + " " + this.lastName;
    },
    changeName() {
      this.firstName = "Dimas";
      this.lastName = "Saputra";
    }
  }
}).mount("#app");
```

### 🧩 Penjelasan

methods berisi fungsi biasa yang dijalankan saat dipanggil ({{ getFullName() }}).

Setiap kali Vue merender ulang DOM, fungsi ini akan selalu dieksekusi ulang, meskipun datanya belum berubah.

methods cocok digunakan untuk aksi/event seperti klik tombol atau proses data satu kali.
---

### ⚖️ 3. Perbedaan computed vs methods
Aspek	Computed Property	Methods Property
Sifat	Reaktif & memiliki cache	Dipanggil setiap kali dirender
Kapan dijalankan	Hanya saat data yang tergantung berubah	Setiap kali dipanggil
Cocok untuk	Mengolah data tampilan yang bergantung pada data lain	Melakukan aksi atau fungsi interaktif
Contoh	Menggabungkan nama, menghitung total harga	Menyimpan data, memanggil API, klik tombol
📚 Contoh Gabungan computed dan methods
```bash
<div id="app">
  <h2>Perbedaan Computed dan Methods</h2>

  <input v-model="firstName" placeholder="Nama Depan">
  <input v-model="lastName" placeholder="Nama Belakang">

  <p><b>Computed:</b> {{ fullName }}</p>
  <p><b>Methods:</b> {{ getFullName() }}</p>
</div>

<script>
const { createApp } = Vue;

createApp({
  data() {
    return {
      firstName: "Yeviki",
      lastName: "Putra"
    };
  },
  computed: {
    fullName() {
      console.log("computed dijalankan!");
      return this.firstName + " " + this.lastName;
    }
  },
  methods: {
    getFullName() {
      console.log("method dijalankan!");
      return this.firstName + " " + this.lastName;
    }
  }
}).mount("#app");
</script>
```
---

### 🧩 Amati console browser

Saat mengetik di input, computed hanya dieksekusi jika datanya berubah.

Sedangkan methods selalu dijalankan ulang setiap kali halaman dirender ulang.
---

### 🧭 Kesimpulan

Gunakan computed jika kamu ingin menampilkan hasil perhitungan berdasarkan data yang berubah.

Gunakan methods jika kamu ingin menjalankan logika atau aksi berdasarkan interaksi pengguna.
