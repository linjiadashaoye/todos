<template>
  <!-- 便签新增/编辑区 -->
  <div>
    <div class="cover-layer"></div>
    <div id="new-markdown" class="editor-layer">
      <div class="editor-top">
        <input class="editor-title form-control" type="text" placeholder="标题" v-model="title" />
        <div class="dropdown select-category">
          <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
            <span class="category">{{categoryId | cateF}}</span>
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li @click="toggle(0)">
              <a>工作</a>
            </li>
            <li @click="toggle(1)">
              <a>生活</a>
            </li>
            <li @click="toggle(2)">
              <a>学习</a>
            </li>
          </ul>
        </div>
        <ul class="tools">
          <li class="save" @click="save"></li>
          <li class="cancel" @click="close"></li>
        </ul>
      </div>
      <textarea class="text-content form-control" placeholder="内容" v-model="content"></textarea>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemData from "@/dataModel/ItemData";
@Component({
  filters: {
    cateF(v: number) {
      if (v == 0) {
        return "工作";
      } else if (v == 1) {
        return "生活";
      } else if (v == 2) {
        return "学习";
      }
    },
  },
})
export default class MemoEdit extends Vue {
  categoryId: number = 0;
  title: string = "";
  content: string = "";
  item!: ItemData;
  memoList!: Array<ItemData>;

  toggle(e: number): void {
    this.categoryId = e;
  }

  save(): void {
    let item: ItemData = new ItemData();
    item.categoryId = this.categoryId;
    item.title = this.title;
    item.content = this.content;
    if (!this.item) {
      this.$store.state.ah.add(item);
    } else {
      item.id = this.item.id;
      this.$store.state.ah.edit(item);
    }
    this.close();
  }

  close(): void {
    this.$store.commit("toggleEdit");
    this.$store.commit("editItem", null);
  }

  created() {
    this.item = this.$store.state.item;
    if (this.item) {
      this.categoryId = this.item.categoryId;
      this.title = this.item.title;
      this.content = this.item.content;
    }
  }
}
</script>