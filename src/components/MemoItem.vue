<template>
  <div class="memo-container">
    <div class="memo">
      <div class="mark"></div>
      <div class="memo-heading">
        <h5 class="title">{{memo.title}}</h5>
        <ul class="tools">
          <li class="edit" @click="edit(memo)"></li>
          <li class="delete" @click="del(memo)"></li>
        </ul>
      </div>
      <h6 class="memo-info">
        <span class="timeStamp">{{memo.time}}</span>
        <span class="category">分类: {{memo.categoryId}}</span>
      </h6>
      <div class="content">
        <div class="text">{{memo.content}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ItemData from "../dataModel/ItemData";
@Component
export default class MemoItem extends Vue {
  @Prop() memo!: ItemData;

  del(memo: ItemData): void {
    if (!confirm(`确认要删除${memo.title}吗?`)) return;
    this.$store.state.ah.remove(memo.id);
  }

  edit(memo: ItemData): void {
    this.$store.commit("toggleEdit");
    let item = new ItemData();
    let newTime = item.formatTime(Date.now());
    memo.time = newTime;
    this.$store.commit("editItem", memo);
  }
}
</script>