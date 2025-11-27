<!-- components/TrackingPage.vue -->
<template>
  <div class="container-fluid py-4">
    <!-- HEADER -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fw-bold">📦 Tracking Delivery Order (DO)</h2>
      <RouterLink to="/" class="btn btn-outline-secondary btn-sm"> ← Kembali </RouterLink>
    </div>

    <!-- FORM CARD -->
    <div class="card shadow-sm mb-4">
      <div class="card-header bg-primary text-white fw-bold">Tambah Delivery Order</div>

      <div class="card-body">
        <form @submit.prevent="addDO" class="row g-3">
          <div class="col-md-4">
            <label class="form-label">Nomor DO</label>
            <input type="text" class="form-control" :value="nextDoNumber" readonly />
          </div>

          <div class="col-md-4">
            <label class="form-label">NIM</label>
            <input type="text" v-model="doForm.nim" class="form-control" required />
          </div>

          <div class="col-md-4">
            <label class="form-label">Nama</label>
            <input type="text" v-model="doForm.nama" class="form-control" required />
          </div>

          <div class="col-md-4">
            <label class="form-label">Ekspedisi</label>
            <select v-model="doForm.ekspedisi" class="form-select" required>
              <option value="">-- Pilih --</option>
              <option v-for="e in ekspedisiOptions" :key="e">{{ e }}</option>
            </select>
          </div>

          <div class="col-md-4">
            <label class="form-label">Paket Bahan Ajar</label>
            <select v-model="doForm.paket" class="form-select" required>
              <option value="">-- Pilih Paket --</option>
              <option v-for="p in paketList" :key="p.kode" :value="p.kode">
                {{ p.kode }} — {{ p.nama }}
              </option>
            </select>
          </div>

          <div class="col-md-4">
            <label class="form-label">Tanggal Kirim</label>
            <input type="date" v-model="doForm.tanggalKirim" class="form-control" />
          </div>

          <!-- DETAIL PAKET -->
          <div v-if="selectedPaket" class="col-12">
            <div class="alert alert-info mt-2">
              <h5 class="fw-bold">Detail Paket</h5>
              <p><strong>Kode:</strong> {{ selectedPaket.kode }}</p>
              <p><strong>Nama:</strong> {{ selectedPaket.nama }}</p>
              <p class="mb-1"><strong>Isi Paket:</strong></p>
              <ul class="mb-2">
                <li v-for="item in selectedPaket.isi" :key="item">{{ item }}</li>
              </ul>
              <p><strong>Harga:</strong> Rp {{ formatNumber(selectedPaket.harga) }}</p>
            </div>
          </div>

          <div class="col-md-4">
            <label class="form-label">Total Harga</label>
            <input
              type="text"
              class="form-control"
              :value="selectedPaket ? formatNumber(selectedPaket.harga) : 0"
              readonly
            />
          </div>

          <div class="col-12 mt-3">
            <button type="submit" class="btn btn-primary px-4">
              <i class="bi bi-plus-circle"></i> Tambah DO
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- TABLE -->
    <div class="card shadow-sm">
      <div class="card-header bg-success text-white fw-bold">Daftar Delivery Order</div>

      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-striped table-bordered m-0">
            <thead class="table-dark">
              <tr>
                <th>No DO</th>
                <th>NIM</th>
                <th>Nama</th>
                <th>Ekspedisi</th>
                <th>Paket</th>
                <th>Tanggal Kirim</th>
                <th>Total Harga</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="d in doList" :key="d.nomor">
                <td>{{ d.nomor }}</td>
                <td>{{ d.nim }}</td>
                <td>{{ d.nama }}</td>
                <td>{{ d.ekspedisi }}</td>
                <td>{{ d.paket }} — {{ paketByKode(d.paket)?.nama }}</td>
                <td>{{ d.tanggalKirim || '-' }}</td>
                <td>Rp {{ formatNumber(paketByKode(d.paket)?.harga || 0) }}</td>

                <td>
                  <button class="btn btn-sm btn-info me-1" @click="openTracking(d.nomor)">
                    <i class="bi bi-eye"></i> Tracking
                  </button>

                  <button class="btn btn-sm btn-success" @click="openAddTracking(d.nomor)">
                    <i class="bi bi-plus-circle"></i> Tambah Tracking
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: LIHAT TRACKING -->
  <div class="modal fade" id="modalTracking" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-info text-white">
          <h5 class="modal-title">Tracking: {{ selectedTracking?.nomor }}</h5>
          <button class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
          <p><strong>Status:</strong> {{ selectedTracking?.data.status }}</p>
          <p><strong>Ekspedisi:</strong> {{ selectedTracking?.data.ekspedisi }}</p>

          <h6 class="fw-bold mt-3">Riwayat Perjalanan:</h6>

          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(item, idx) in selectedTracking?.data.perjalanan"
              :key="idx"
            >
              <strong>{{ item.waktu }}</strong
              ><br />
              {{ item.keterangan }}
            </li>
          </ul>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: TAMBAH TRACKING -->
  <div class="modal fade" id="modalAddTracking" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-success text-white">
          <h5 class="modal-title">Tambah Tracking DO: {{ addTrackDoNumber }}</h5>
          <button class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Waktu</label>
            <input type="datetime-local" v-model="trackingForm.waktu" class="form-control" />
          </div>

          <div class="mb-3">
            <label class="form-label">Keterangan</label>
            <textarea v-model="trackingForm.keterangan" class="form-control"></textarea>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
          <button class="btn btn-primary" @click="saveTracking">Simpan Tracking</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import dataBahanAjar from '../data/dataBahanAjar.js'
import { Modal } from 'bootstrap'

const paketList = ref(dataBahanAjar.paket)
const trackingData = reactive(dataBahanAjar.tracking)
const doList = ref([])

const doForm = reactive({
  nim: '',
  nama: '',
  ekspedisi: '',
  paket: '',
  tanggalKirim: '',
})

const ekspedisiOptions = ['JNE', 'POS Indonesia', 'TIKI', 'SiCepat']

const nextDoNumber = computed(() => {
  const year = 2025
  const existing = Object.keys(trackingData || {}).length + doList.value.length + 1
  return `DO${year}-${String(existing).padStart(4, '0')}`
})

const selectedPaket = computed(() => {
  return paketList.value.find((p) => p.kode === doForm.paket)
})

const formatNumber = (n) => Number(n).toLocaleString('id-ID')

const paketByKode = (kode) => paketList.value.find((p) => p.kode === kode)

const addDO = () => {
  if (!doForm.nim || !doForm.nama || !doForm.ekspedisi || !doForm.paket) {
    alert('Lengkapi semua data sebelum simpan!')
    return
  }

  const nomor = nextDoNumber.value

  const newDO = {
    nomor,
    nim: doForm.nim,
    nama: doForm.nama,
    ekspedisi: doForm.ekspedisi,
    paket: doForm.paket,
    tanggalKirim: doForm.tanggalKirim,
  }

  doList.value.push(newDO)

  trackingData[nomor] = {
    nim: newDO.nim,
    nama: newDO.nama,
    ekspedisi: newDO.ekspedisi,
    tanggalKirim: newDO.tanggalKirim,
    paket: newDO.paket,
    status: 'Menunggu Pengiriman',
    total: selectedPaket.value?.harga || 0,
    perjalanan: [],
  }

  alert(`DO ${nomor} berhasil ditambahkan!`)

  Object.assign(doForm, {
    nim: '',
    nama: '',
    ekspedisi: '',
    paket: '',
    tanggalKirim: '',
  })
}

onMounted(() => {
  for (const [kode, val] of Object.entries(trackingData)) {
    doList.value.push({
      nomor: kode,
      nim: val.nim,
      nama: val.nama,
      ekspedisi: val.ekspedisi,
      paket: val.paket,
      tanggalKirim: val.tanggalKirim,
    })
  }
})

const selectedTracking = ref(null)
const addTrackDoNumber = ref('')
let modalTracking = null
let modalAddTracking = null

const trackingForm = reactive({
  waktu: '',
  keterangan: '',
})

const openTracking = (nomor) => {
  selectedTracking.value = {
    nomor,
    data: trackingData[nomor],
  }

  if (!modalTracking) modalTracking = new Modal(document.getElementById('modalTracking'))

  modalTracking.show()
}

const openAddTracking = (nomor) => {
  addTrackDoNumber.value = nomor

  trackingForm.waktu = ''
  trackingForm.keterangan = ''

  if (!modalAddTracking) modalAddTracking = new Modal(document.getElementById('modalAddTracking'))

  modalAddTracking.show()
}

const saveTracking = () => {
  if (!trackingForm.waktu || !trackingForm.keterangan) {
    alert('Lengkapi semua data tracking!')
    return
  }

  trackingData[addTrackDoNumber.value].perjalanan.push({
    waktu: trackingForm.waktu,
    keterangan: trackingForm.keterangan,
  })

  modalAddTracking.hide()
  alert('Tracking baru berhasil ditambahkan!')
}
</script>

<style scoped></style>
