<template>
  <div class="box" :style="{ ...bgImageStyle }">
    <div class="content-box">
      <div class="content-box-top">
        <div class="content-box-top-left">
          <div
            v-if="frontmatter?.customModule?.heroText"
            class="content-box-top-left-title"
          >
            深入Source
          </div>
          <div
            v-if="frontmatter?.customModule?.heroText"
            class="content-box-top-left-title"
          >
            {{ frontmatter?.customModule?.heroText }}
          </div>
          <div
            v-if="frontmatter?.customModule?.tagline"
            class="content-box-top-left-desc"
          >
            {{ frontmatter?.customModule?.tagline }}
          </div>
        </div>
      </div>
      <div class="content-box-bottom">
        <ul class="btn-group" v-if="buttons.length > 0">
          <li
            v-for="(btn, index) in buttons"
            :class="btn.type"
            :key="index"
            class="btn-group-li"
          >
            <Xicons
              :icon="btn.icon"
              :text="btn.text"
              :link="btn.link"
              icon-size="20"
              text-size="14"
              :class="'Xicons-item-' + index"
            />
          </li>
        </ul>
      </div>
      <div align="center" class="content-box-github-icon">
        <a href="">
          <img
            src="https://img.shields.io/badge/Github-1.8k+-143?logo=typescript&color=3178C6&logoColor=fff"
          />
        </a>
        <a href="https://discord.gg/UgKBCq9">
          <img
            src="https://badgen.net/badge/icon/typescript?icon=typescript&label"
          />
        </a>
        <a
          href="https://www.typescriptlang.org/play?install-plugin=%40type-challenges%2Fplayground-plugin"
        >
          <img
            src="https://img.shields.io/badge/Playground-143?logo=typescript&color=3178C6&logoColor=fff"
          />
        </a>
      </div>
    </div>
    <div class="content-box-item">
      <div class="content-box-item-group" v-if="feature.length > 0">
        <div
          v-for="(item, index) in feature"
          :key="index"
          class="content-box-item-group-items"
        >
          <div class="content-box-item-group-items-title">{{ item.title }}</div>
          <div class="content-box-item-group-items-desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageFrontmatter, withBase } from "@vuepress/client";
import {
  ref,
  reactive,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
} from "vue";
const frontmatter: any = usePageFrontmatter();
console.log(frontmatter.value?.customModule);
const heroImage = computed(() => {
  return frontmatter.value?.customModule?.heroImage
    ? withBase(frontmatter.value?.customModule?.heroImage)
    : null;
});
const buttons = computed(() => {
  return frontmatter.value?.customModule?.buttons || [];
});
const feature = computed(() => {
  return frontmatter.value?.customModule?.feature || [];
});
const heroImageStyle = computed(
  () => frontmatter?.value?.customModule?.heroImageStyle || {}
);
const bgImageStyle = computed(() => {
  const { bgImageStyle, bgImage } =
    (frontmatter.value?.customModule as { bgImageStyle: any; bgImage: any }) ||
    ({} as { bgImageStyle: any; bgImage: any });
  const initBgImageStyle = bgImage
    ? {
        overflow: "hidden",
        // background: `url(${withBase(bgImage)}) center/cover no-repeat`,
      }
    : {};
  return bgImageStyle
    ? { ...initBgImageStyle, ...bgImageStyle }
    : initBgImageStyle;
});
</script>
<style lang="less">
.box {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  border-radius: 4px;
}
.content-box {
  width: 100%;
  height: 66vh;
  &-top {
    padding-top: 140px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    &-left {
      width: auto;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      &-title {
        max-width: 960px;
        font-size: 76px;
        line-height: 1.25;
        font-weight: 900;
        letter-spacing: -1px;
        margin: 0 auto;
        background: -webkit-linear-gradient(316deg,#90d5ff 30%,#65a5ff);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &-desc {
        max-width: 960px;
        line-height: 1.5;
        transition: color 0.5s;
        font-size: 22px;
        margin: 24px auto 40px;
        letter-spacing: normal;
        font-family: Quotes, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
      }
    }
    &-right {
      width: 200px;
      height: 200px;
    }
  }
  &-bottom {
    padding-top: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
  }
  .btn-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    li {
      list-style: none;
      .Xicons-item-0 {
        font-size: 16px;
        display: inline-block;
        border-radius: 16px;
        transition: background-color 0.5s, color 0.5s;
        position: relative;
        font-weight: 600;
        border: 1px solid transparent;
        border-color: #d1d1d1;
        margin-right: 18px;
        padding: 8px 1em;
        background-color: #858de6;
      }
      .Xicons-item-1 {
        font-size: 16px;
        display: inline-block;
        border-radius: 16px;
        transition: background-color 0.5s, color 0.5s;
        position: relative;
        font-weight: 600;
        border: 1px solid transparent;
        border-color: #d1d1d1;
        margin-right: 18px;
        padding: 8px 1em;
      }
      //   .Xicons-item:last-child {
      //   }
    }
  }
  &-github-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 50px auto;
    justify-content: center;
    a {
      margin-right: 10px;
    }
  }
}
.special-sponsor {
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(84, 84, 84, 0.48);
  border-bottom: 1px solid rgba(84, 84, 84, 0.48);
  padding: 12px 24px;
  text-align: center;
  font-weight: 500;
  font-size: 11px;
}
.content-box-item {
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  &-group {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-items {
      transition: color 0.5s, background-color 0.5s;
      padding: 28px 36px;
      border-radius: 8px;
      flex: 0 32%;
      font-size: 14px;
      font-weight: 500;
      background-color: transparent;
      &-title {
        font-weight: 600;
        font-size: 20px;
        letter-spacing: -0.4px;
        transition: color 0.5s;
        margin-bottom: 0.75em;
      }
      &-desc {
        font-weight: 400;
        font-size: 15px;
      }
    }
  }
}
</style>
