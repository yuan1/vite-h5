<template>
  <div class="wrapper-container">
    <!-- overflow: hidden：清除子元素相对父元素的超界溢出 -->
    <div
      style="overflow: hidden"
      :style="{
        height: showMore ? 'auto' : showHeight + 'px',
        paddingBottom: showMore ? '44px' : '0',
      }"
    >
      <div ref="contentRef">
        <slot>
          <!-- 当外界 <show-more> 标签中有元素时，使用 <show-more> 标签中的元素进行渲染，否则使用下面这个 div 进行渲染 -->
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="content"></div>
        </slot>
      </div>
    </div>

    <div
      v-show="isLongContent"
      class="control"
      :class="{ 'show-more': showMore }"
    >
      <a href="javascript:" class="text-14" @click="_toggleShowMore">{{
        showMore ? '折叠' : '展开回答'
      }}</a>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, ref, computed } from 'vue';
  const props = defineProps({
    showHeight: {
      type: Number,
      required: true,
      default: 200,
    },
    content: {
      type: String,
      default: null,
    },
  });
  const contentRef = ref(null);
  let showMore = ref(false);
  let isLongContent =  computed(() => {
      if(!contentRef.value){
          return false;
      }
      const contentHeight = contentRef.value.clientHeight;
      return contentHeight > props.showHeight;
  })
  const _toggleShowMore = () => {
    showMore.value = !showMore.value;
  };
  
</script>
<style scoped lang="scss">
  .wrapper-container {
    position: relative;
    .control {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding-top: 48px;
      text-align: center;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.7) 0%,
        rgba(255, 255, 255, 0.95) 53%,
        rgba(255, 255, 255, 1) 100%
      );
      a {
        color: #1356bd;
        text-decoration: underline;
      }
      &.show-more {
        padding-top: 0;
        background: none;
      }
    }
  }
</style>
