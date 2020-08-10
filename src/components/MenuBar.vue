<template>
  <!-- 菜单栏 -->
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand">
          <img height="40" src="../assets/xiaoW.png" />
        </a>
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          aria-expanded="false"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse navbar-right">
        <ul class="nav navbar-nav">
          <li class="add dropdown">
            <a class="create-new dropdown-toggle" data-toggle="dropdown">新建</a>
            <ul class="dropdown-menu">
              <li @click="add">
                <a>文本便签</a>
              </li>
            </ul>
          </li>
          <li class="categories dropdown">
            <a class="current-category dropdown-toggle" data-toggle="dropdown">
              全部
              <span class="count badge">{{cptd(-1)}}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="total" @click="changeCateId(-1)">
                <a>
                  全部
                  <span class="count badge">{{cptd(-1)}}</span>
                </a>
              </li>
              <li class="divider"></li>
              <li @click="changeCateId(0)">
                <a>
                  工作
                  <span class="count badge">{{cptd(0)}}</span>
                </a>
              </li>
              <li @click="changeCateId(1)">
                <a>
                  生活
                  <span class="count badge">{{cptd(1)}}</span>
                </a>
              </li>
              <li @click="changeCateId(2)">
                <a>
                  学习
                  <span class="count badge">{{cptd(2)}}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class MenuBar extends Vue {
  add() {
    this.$store.commit("toggleEdit");
  }

  cptd(id: number): Number {
    if (id == -1) {
      return this.$store.state.ah.memoList.length;
    }
    let arr = this.$store.state.ah.memoList.filter((v: any) => {
      return v.categoryId == id;
    });
    return arr.length;
  }

  changeCateId(e: number) {
    this.$store.commit("changeCateId", e);
  }
}
</script>