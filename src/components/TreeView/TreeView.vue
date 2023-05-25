<template>
  <!-- dropdown to select orientation of tree -->
  <div class="row mb-4">
    <label for="treeOrientationControl" class="form-label col-4">Change orientation :</label>
    <div class="col-4">
      <select class="form-select" id="treeOrientationControl" v-model="treeOrientation">
          <option value="0">Vertical</option>
          <option value="1">Horizontal</option>
      </select>
    </div>
  </div>
  <!-- v-for in case there are multiple trees with different root nodes in data set -->
  <div v-for="(root, index) in data" :key="index">
    <h4>Tree {{ index+1 }}</h4>
    <blocks-tree
      :data="root"
      :props="props"
      :horizontal="treeOrientation=='1'"
      :collapsable="false"
      :label-class-name="labelClassName"
      @node-click="(e, node, context) => nodeClick(e, node)"
    ></blocks-tree>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const treeOrientation = ref('0');
const props = {
  children: 'children',
  label: 'name',
  key: 'name',
};
defineProps(['data', 'labelClassName']);
const emit = defineEmits(['node-click']);
const nodeClick = (event, node) => emit('node-click', event, node);
</script>