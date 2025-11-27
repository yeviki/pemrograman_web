<!-- components/StockPage.vue -->
<template>
  <div class="container-fluid py-3">
    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fw-bold">📦 Stok Bahan Ajar</h2>
      <RouterLink to="/" class="btn btn-outline-secondary btn-sm"> ← Kembali </RouterLink>
    </div>

    <!-- FILTER SECTION -->
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <div class="row g-3">
          <!-- UT Daerah -->
          <div class="col-md-3">
            <label class="form-label fw-semibold">UT-Daerah</label>
            <select class="form-select" v-model="filters.upbjj" @change="onUpbjjChange">
              <option value="">-- Semua UT-daerah --</option>
              <option v-for="u in upbjjList" :key="u" :value="u">{{ u }}</option>
            </select>
          </div>

          <!-- Kategori -->
          <div class="col-md-3">
            <label class="form-label fw-semibold">Kategori Mata Kuliah</label>
            <select class="form-select" v-model="filters.kategori" :disabled="!filters.upbjj">
              <option value="">-- Semua Kategori --</option>
              <option v-for="k in kategoriOptions" :key="k">{{ k }}</option>
            </select>
          </div>

          <!-- Reorder -->
          <div class="col-md-2">
            <label class="form-label fw-semibold">Filter Reorder</label>
            <select class="form-select" v-model="filters.reorder">
              <option value="">Semua</option>
              <option value="belowSafety">Stok &lt; Safety</option>
              <option value="zero">Stok = 0</option>
            </select>
          </div>

          <!-- Sort -->
          <div class="col-md-2">
            <label class="form-label fw-semibold">Urutkan Berdasarkan</label>
            <select class="form-select" v-model="sortBy">
              <option value="judul">Judul</option>
              <option value="qty">Stok</option>
              <option value="harga">Harga</option>
            </select>
          </div>

          <!-- Sort Direction -->
          <div class="col-md-1">
            <label class="form-label fw-semibold d-block">Arah</label>
            <button class="btn btn-outline-dark w-100" @click="toggleSortDir">
              {{ sortDir === 'asc' ? '↑' : '↓' }}
            </button>
          </div>

          <!-- Reset -->
          <div class="col-md-1">
            <label class="form-label fw-semibold d-block">&nbsp;</label>
            <button class="btn btn-secondary w-100" @click="resetFilters">Reset</button>
          </div>

          <!-- Add -->
          <div class="col-md-2 mt-3">
            <button class="btn btn-primary w-100" @click="toggleAddForm">
              ➕ Tambah Bahan Ajar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- FORM ADD/EDIT -->
    <div v-if="showAddForm" class="card shadow-sm mb-4">
      <div class="card-header bg-light fw-bold">Tambah / Edit Bahan Ajar</div>

      <div class="card-body">
        <form @submit.prevent="saveItem" class="row g-3">
          <div class="col-md-3">
            <label class="form-label">Kode</label>
            <input class="form-control" v-model="form.kode" required />
          </div>

          <div class="col-md-6">
            <label class="form-label">Judul</label>
            <input class="form-control" v-model="form.judul" required />
          </div>

          <div class="col-md-3">
            <label class="form-label">Kategori</label>
            <input class="form-control" v-model="form.kategori" required />
          </div>

          <div class="col-md-3">
            <label class="form-label">UT-Daerah</label>
            <select class="form-select" v-model="form.upbjj" required>
              <option value="">-- PILIH --</option>
              <option v-for="u in upbjjList" :key="u">{{ u }}</option>
            </select>
          </div>

          <div class="col-md-3">
            <label class="form-label">Lokasi Rak</label>
            <input class="form-control" v-model="form.lokasiRak" />
          </div>

          <div class="col-md-2">
            <label class="form-label">Qty</label>
            <input type="number" class="form-control" v-model.number="form.qty" min="0" required />
          </div>

          <div class="col-md-2">
            <label class="form-label">Safety</label>
            <input
              type="number"
              class="form-control"
              v-model.number="form.safety"
              min="0"
              required
            />
          </div>

          <div class="col-md-2">
            <label class="form-label">Harga</label>
            <input type="number" class="form-control" v-model.number="form.harga" min="0" />
          </div>

          <div class="col-12">
            <label class="form-label">Catatan (HTML)</label>
            <textarea class="form-control" rows="3" v-model="form.catatanHTML"></textarea>
          </div>

          <div class="col-12 d-flex gap-2 mt-2">
            <button type="submit" class="btn btn-success">Simpan</button>
            <button type="button" class="btn btn-outline-secondary" @click="cancelEdit">
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- TABLE RESULT -->
    <div class="card shadow-sm">
      <div class="card-body p-0">
        <table class="table table-hover table-striped mb-0">
          <thead class="table-dark">
            <tr>
              <th>Kode</th>
              <th>Judul</th>
              <th>Kategori</th>
              <th>UT-Daerah</th>
              <th>Lokasi Rak</th>
              <th>Stok</th>
              <th>Safety</th>
              <th>Status</th>
              <th>Catatan</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in sortedAndFiltered" :key="item.kode">
              <td>{{ item.kode }}</td>
              <td class="fw-semibold">{{ item.judul }}</td>
              <td>{{ item.kategori }}</td>
              <td>{{ item.upbjj }}</td>
              <td>{{ item.lokasiRak }}</td>
              <td>{{ item.qty }}</td>
              <td>{{ item.safety }}</td>

              <td>
                <span :class="statusClass(item)" class="badge">
                  {{ statusText(item) }}
                </span>
              </td>

              <td v-html="item.catatanHTML"></td>

              <td>
                <button class="btn btn-sm btn-warning me-1" @click="editItem(item)">Edit</button>
                <button class="btn btn-sm btn-danger" @click="deleteItem(item)">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
/* 100% Sama - Tidak Ada Logika yang Diubah */
import { ref, reactive, computed } from 'vue'
import dataBahanAjar from '../data/dataBahanAjar.js'

const upbjjList = dataBahanAjar.upbjjList
const items = ref([...dataBahanAjar.stok])

const filters = reactive({ upbjj: '', kategori: '', reorder: '' })
const sortBy = ref('judul')
const sortDir = ref('asc')
const showAddForm = ref(false)

const form = reactive({
  kode: '',
  judul: '',
  kategori: '',
  upbjj: '',
  lokasiRak: '',
  qty: 0,
  safety: 0,
  harga: 0,
  catatanHTML: '',
})

const onUpbjjChange = () => {
  filters.kategori = ''
}

const kategoriOptions = computed(() => {
  const set = new Set()
  items.value
    .filter((i) => !filters.upbjj || i.upbjj === filters.upbjj)
    .forEach((i) => set.add(i.kategori))
  return [...set]
})

const toggleSortDir = () => {
  sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
}
const resetFilters = () => {
  filters.upbjj = ''
  filters.kategori = ''
  filters.reorder = ''
}
const toggleAddForm = () => {
  showAddForm.value = !showAddForm.value
}

const saveItem = () => {
  const existing = items.value.find((i) => i.kode === form.kode)
  existing ? Object.assign(existing, form) : items.value.push({ ...form })
  cancelEdit()
}

const editItem = (item) => {
  Object.assign(form, item)
  showAddForm.value = true
}
const deleteItem = (item) => {
  items.value = items.value.filter((i) => i.kode !== item.kode)
}

const cancelEdit = () => {
  Object.assign(form, {
    kode: '',
    judul: '',
    kategori: '',
    upbjj: '',
    lokasiRak: '',
    qty: 0,
    safety: 0,
    harga: 0,
    catatanHTML: '',
  })
  showAddForm.value = false
}

const sortedAndFiltered = computed(() => {
  let list = [...items.value]

  if (filters.upbjj) list = list.filter((i) => i.upbjj === filters.upbjj)
  if (filters.kategori) list = list.filter((i) => i.kategori === filters.kategori)
  if (filters.reorder === 'belowSafety') list = list.filter((i) => i.qty < i.safety)
  if (filters.reorder === 'zero') list = list.filter((i) => i.qty === 0)

  list.sort((a, b) => {
    const A = a[sortBy.value],
      B = b[sortBy.value]
    return A < B
      ? sortDir.value === 'asc'
        ? -1
        : 1
      : A > B
        ? sortDir.value === 'asc'
          ? 1
          : -1
        : 0
  })

  return list
})

const statusText = (item) =>
  item.qty === 0 ? 'Habis' : item.qty < item.safety ? 'Reorder' : 'Aman'

const statusClass = (item) =>
  item.qty === 0 ? 'bg-danger' : item.qty < item.safety ? 'bg-warning text-dark' : 'bg-success'
</script>
