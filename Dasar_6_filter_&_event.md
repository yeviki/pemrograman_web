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

## 🧩 Vue 3 : Filter (String Formatting) & Event Handling (Input Mouse/Keyboard)

## 🧠 1. PENJELASAN TEORI
### 🟦 A. Filter (Formatting String)

    Pada Vue 2 ada fitur "filters", tetapi Vue 3 menghilangkan filter.
    Solusi resmi: gunakan computed atau methods untuk formatting.

✨ Contoh Formatting String yang akan dipelajari:

- Uppercase: hello → HELLO

- Lowercase: HELLO → hello

- Capitalize: hello world → Hello World

- Currency: 10000 → Rp 10.000

- Truncate (potong teks): "Lorem ipsum..."

Dengan Vue 3, kita membuat custom formatter sendiri.

---

### 🟦 B. Event Handling

Vue 3 menggunakan directive:
```dash
v-on:eventname="fungsi"
```

Atau shorthand:

```dash
@click="fungsi"
@keyup="fungsi"
@input="fungsi"
```

Event yang dipelajari :

- Mouse Event

  - @click

  - @dblclick

  - @mousemove

  - @mouseover

  - @contextmenu

- Keyboard Event

  - @keyup

  - @keydown

  - @keypress

  - Modifier keys: .enter, .esc, .shift
---

## 🚀 2. PROJECT IMPLEMENTASI
### Judul: “Text Formatter & Event Demo App”

Project ini berisi :
- ✔ Input teks
- ✔ Formatting string (uppercase, lowercase, capitalize)
- ✔ Keyboard event (keyup.enter, keyup)
- ✔ Mouse event (click, mouseover)
- ✔ Output realtime
---

## 🧱 3. LANGKAH MEMBUAT PROJECT
### 1️⃣ Membuat project Vue 3
```dash
npm create vue@latest
```

Pilih default saja.

### 2️⃣ Masuk folder
```dash
cd text-formatter
npm install
npm run dev
```

## 📁 4. STRUKTUR FILE
```dash
src/
 ├─ App.vue
 └─ components/
      └─ FormatterDemo.vue
```

## 🧩 5. KODE App.vue (singkat)
```dash
<template>
  <div class="wrapper">
    <h1>Vue 3 Filter & Event Handling Demo</h1>
    <FormatterDemo />
  </div>
</template>

<script setup>
import FormatterDemo from "./components/FormatterDemo.vue"
</script>

<style>
.wrapper {
  max-width: 800px;
  margin: auto;
  font-family: Arial;
  padding: 20px;
}
</style>
```
---

## 🧩 6. KODE FormatterDemo.vue + PENJELASAN
```dash
<template>
  <div>

    <!-- ========================== -->
    <!-- INPUT TEXT -->
    <!-- ========================== -->

    <h2>1. Text Formatter (Filter)</h2>

    <!-- Input utama -->
    <input 
      v-model="text" 
      placeholder="Ketik sesuatu..."
      @keyup.enter="onEnter"
      class="input-box"
    />

    <!-- Format result -->
    <p><strong>Uppercase:</strong> {{ uppercaseText }}</p>
    <p><strong>Lowercase:</strong> {{ lowercaseText }}</p>
    <p><strong>Capitalized:</strong> {{ capitalizedText }}</p>

    <hr />

    <!-- ========================== -->
    <!-- MOUSE EVENT -->
    <!-- ========================== -->

    <h2>2. Mouse Events</h2>

    <button 
      @click="countClick++"
      @dblclick="onDoubleClick"
      @contextmenu.prevent="onRightClick"
      class="btn"
    >
      Klik Saya
    </button>

    <p>Jumlah Klik: {{ countClick }}</p>
    <p>{{ mouseMessage }}</p>

    <div 
      class="mouse-area"
      @mousemove="onMouseMove"
    >
      Arahkan mouse di area ini
    </div>

    <p>Posisi Mouse: X={{ mouseX }}, Y={{ mouseY }}</p>

    <hr />

    <!-- ========================== -->
    <!-- KEYBOARD EVENT -->
    <!-- ========================== -->

    <h2>3. Keyboard Events</h2>

    <input 
      placeholder="Tekan keyboard..."
      @keyup="onKeyUp"
      @keydown.shift="onShiftDown"
      class="input-box"
    />

    <p>Key terakhir ditekan: {{ lastKey }}</p>

  </div>
</template>

<script setup>
import { ref, computed } from "vue"

/* -----------------------------------------
   INPUT TEXT UNTUK FILTERING
----------------------------------------- */
const text = ref("")

// Formatting menggunakan computed:
const uppercaseText = computed(() => text.value.toUpperCase())

const lowercaseText = computed(() => text.value.toLowerCase())

const capitalizedText = computed(() => {
  return text.value
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
})

function onEnter() {
  alert("Anda menekan ENTER!")
}

/* -----------------------------------------
   MOUSE EVENTS
----------------------------------------- */
const countClick = ref(0)
const mouseMessage = ref("")

function onDoubleClick() {
  mouseMessage.value = "Anda melakukan DOUBLE CLICK!"
}

function onRightClick() {
  mouseMessage.value = "Klik kanan terdeteksi!"
}

const mouseX = ref(0)
const mouseY = ref(0)

function onMouseMove(event) {
  mouseX.value = event.offsetX
  mouseY.value = event.offsetY
}

/* -----------------------------------------
   KEYBOARD EVENTS
----------------------------------------- */
const lastKey = ref("")

function onKeyUp(event) {
  lastKey.value = event.key
}

function onShiftDown() {
  alert("SHIFT ditekan!")
}

</script>

<style scoped>
.input-box {
  padding: 10px;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #aaa;
}
.btn {
  padding: 10px 20px;
  background: #0055ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.mouse-area {
  height: 150px;
  border: 2px dashed #999;
  margin-top: 15px;
  padding: 20px;
}
</style>
```
---

## 🧠 7. PENJELASAN SINGKAT UNTUK MAHASISWA
### ✅ A. Filter (String Formatting)

Karena Vue 3 tidak punya filter bawaan, kita gunakan:

- ✔ Computed property

Untuk formatting otomatis:
```dash
const uppercaseText = computed(() => text.value.toUpperCase())
```

✔ Bisa dipakai sebagai “filter custom”

### ✅ B. Event Handling

✔ Mouse Event
```dash
@click="fungsi"
@dblclick="fungsi"
@contextmenu.prevent="fungsi"
@mousemove="fungsi"
```

✔ Keyboard Event
```dash
@keyup="fungsi"
@keyup.enter="fungsi"
@keydown.shift="fungsi"
```
---

## 🎯 8. HASIL PROJECT

Mahasiswa dapat:

- ✔ Melakukan formatting string: uppercase, lowercase, capitalize
- ✔ Menangani event mouse: click, double click, right click, mousemove
- ✔ Menangani event keyboard: keyup, keydown, key modifier
- ✔ Melihat update realtime di layar
