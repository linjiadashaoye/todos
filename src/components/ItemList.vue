<template>
  <div id="memos" class="container">
    <MemoItem v-for="v in filterList()" :key="v.id" :memo="v" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemData from "../dataModel/ItemData";
import MemoItem from "./MemoItem.vue";
@Component({
  components: {
    MemoItem,
  },
})
export default class ItemList extends Vue {
  memoList: Array<ItemData> = this.$store.state.ah.memoList;
  filterList(): Array<ItemData> {
    
    if (this.$store.state.cateId == -1) {
      return this.$store.state.ah.memoList;
    }
    let arr = this.$store.state.ah.memoList.filter((v: any) => {
      return v.categoryId == this.$store.state.cateId;
    });
    return arr;
  }
}
</script>
