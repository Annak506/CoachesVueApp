<template>
    <span class="badge" :class="type">
        {{  text }}
    </span>
</template>

<script>

export default {
    props: ['type', 'title'],
    computed:{
        text(){
            return this.title.toUpperCase();
        }
    }
}
</script>

<style scoped>
    .badge {
      background-color: #B0E0E6; 
      color: #252525;
      border-radius: 30px;
      padding: 0.5rem 1.5rem;
      display: inline-block;
      margin-right: 0.5rem;
    }

    .frontend {
      background-color: #006B6B; 
      color: white;
    }

    .backend {
      background-color: #2E8B57; 
      color: white;
    }

    .career {
      background-color: #6B8E23; 
      color: white;
    }

    @media (max-width: 768px) {
    .badge {
      padding: 0.25rem 0.75rem; 
      font-size: 0.94rem; 
    }
  }
</style>
