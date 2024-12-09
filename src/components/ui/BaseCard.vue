<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
 
  padding: 1.5rem; /* Adjust padding for better consistency */
  margin: 2rem auto;
  max-width: 40rem;
  background-color: #F8F1EB;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f2c35d; /* Soft Green Border */
}
</style>
