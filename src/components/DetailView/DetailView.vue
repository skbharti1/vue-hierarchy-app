<template>
  <div class="card p-4 position-fixed" v-show="node.name">
  <div class="position-relative">
    <div class="position-absolute top-0 end-0">
      <button type="button" class="btn-close" aria-label="Close" @click="emit('close')"></button>
    </div>
    <h2>{{ node.name }}</h2>
    <p>{{ node.description }}</p>
  </div></div>
</template>

<script setup>
defineProps(['node']);
const emit = defineEmits(['close']);
</script>

<style scoped>
.card {
  width:fit-content;
}
</style>