<template>
  <div class="homepage text-center">
    <h1 class="fw-bold mt-4">UT - Pemesanan Bahan Ajar</h1>
    <p class="text-muted mb-5">Tugas Praktik 3 (Vue + Bootstrap)</p>

    <div class="row justify-content-center gx-5">
      <!-- Card Stock -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card shadow-lg dashboard-card">
          <div class="card-body text-center">
            <h4 class="fw-bold">Stok Bahan Ajar</h4>
            <p class="text-secondary">Kelola dan pantau stok bahan ajar.</p>
            <RouterLink to="/stock" class="btn btn-primary w-100">Buka Halaman Stok</RouterLink>
          </div>
        </div>
      </div>

      <!-- Card Tracking -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card shadow-lg dashboard-card">
          <div class="card-body text-center">
            <h4 class="fw-bold">Tracking Delivery Order</h4>
            <p class="text-secondary">Monitoring pengiriman paket mahasiswa.</p>
            <RouterLink to="/tracking" class="btn btn-success w-100">Buka Tracking DO</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.dashboard-card {
  transition: 0.2s ease;
  border-radius: 14px;
}
.dashboard-card:hover {
  transform: translateY(-6px);
}

/* Full width */
.homepage {
  width: 100%;
  padding: 20px;
}
</style>
