<template>
  <div class="row m-4">
    <template v-if="!error">
      <div class="col-8">
        <tree-view
          v-if="treeData.value"
          :data="treeData.value"
          :label-class-name="labelClassName"
          @node-click="(event, node) => nodeClicked(event, node)"
        />
      </div>
      <div class="col-4">
        <detail-view
          :node="selectedNode"
          @close="deselectNode()"
        />
      </div>
    </template>
    <template v-else>Service Error : {{ error }}</template>
  </div>
</template>

<script setup>
import TreeView from '@/components/TreeView/TreeView.vue';
import DetailView from '@/components/DetailView/DetailView.vue';
import { ref, reactive, onMounted } from 'vue';
import { getData } from '@/services/treeDataServices/treeDataServices.js';
import { convert } from '@//utils/convertor';

const treeData = reactive([]);
const selectedNode = ref({});
let error = ref(null);

const nodeClicked = (event, node) => node.name !== selectedNode.value.name ? selectNode(node) : deselectNode();

const selectNode = (node) => selectedNode.value = node;

const deselectNode = () => selectedNode.value = {};

const labelClassName = (node) => node.name === selectedNode.value.name ? 'node selected-node' : 'node';

const getTreeData = async () => {
  try {
    const data = await getData();
    treeData.value = convert(data);
  }
  catch (err) {
    error.value = err;
  }
}

onMounted(async() => {
  await getTreeData();
});
</script>

<style>
.selected-node {
  border: 2px black solid;
}
.node {
  cursor: pointer;
}
</style>
