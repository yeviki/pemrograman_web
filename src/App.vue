<!-- App.vue -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="d-flex" id="wrapper">
    <!-- SIDEBAR -->
    <div id="sidebar-wrapper" class="bg-dark border-end">
      <div class="sidebar-heading text-white py-4 px-3 fs-4 fw-bold">UT Admin</div>

      <div class="list-group list-group-flush">
        <RouterLink to="/" class="list-group-item list-group-item-action bg-dark text-white">
          <i class="bi bi-house-door"></i> Home
        </RouterLink>

        <RouterLink to="/stock" class="list-group-item list-group-item-action bg-dark text-white">
          <i class="bi bi-box-seam"></i> Stock
        </RouterLink>

        <RouterLink
          to="/tracking"
          class="list-group-item list-group-item-action bg-dark text-white"
        >
          <i class="bi bi-truck"></i> Tracking DO
        </RouterLink>
      </div>
    </div>

    <!-- CONTENT -->
    <div id="page-content-wrapper" class="flex-grow-1">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom px-3">
        <button class="btn btn-primary" id="menu-toggle" @click="toggleSidebar">☰</button>
        <div class="ms-auto fw-semibold">Admin Dashboard</div>
      </nav>

      <!-- FULL SCREEN CONTENT -->
      <div class="page-body px-4 py-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      document.getElementById('wrapper').classList.toggle('toggled')
    },
  },
}
</script>

<style>
/* Layout full screen */
html,
body,
#app,
#wrapper {
  height: 100%;
  width: 100%;
  margin: 0;
}

/* Sidebar full height */
#sidebar-wrapper {
  width: 260px;
  min-height: 100vh;
  transition: all 0.3s ease;
}

/* Sidebar collapse */
#wrapper.toggled #sidebar-wrapper {
  margin-left: -260px;
}

/* Hover */
.list-group-item:hover {
  background-color: #343a40 !important;
  color: #fff !important;
}

/* Content full */
#page-content-wrapper {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}

/* Body area */
.page-body {
  height: calc(100vh - 56px); /* minus navbar height */
  overflow-y: auto;
}

/* Icon spacing */
.bi {
  margin-right: 8px;
}
</style>
