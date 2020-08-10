<template>
  <div id="app">
    <MenuBar/>
    <ItemList/>
    <MemoEdit v-if="$store.state.showEdit"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuBar from "./components/MenuBar.vue";
import ItemList from './components/ItemList.vue'
import MemoEdit from './components/MemoEdit.vue'

@Component({
  components: {
    MenuBar,
    ItemList,
    MemoEdit
  },
})
export default class App extends Vue {}
</script>

<style>
</style>
