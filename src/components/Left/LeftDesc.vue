<template>
  <div class="left-div left-des">
    <div v-for="(item, index) in dec" :key="index" class="left-des-item">
      <svg class="icon" viewBox="0 0 1024 1024" width="256" height="256">
        <path :d="item.icon"></path>
      </svg>
      <a
        style="border-bottom: 1px solid rgba(125, 125, 125, 0.3)"
        target="_blank"
        onclick="return false"
        href="#"
      >
        {{ item.dec }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { personalInfo } from '@/config/data'

const dec = personalInfo
</script>

<style scoped>
.left-des {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.left-des-item {
  display: flex;
  align-items: center;
  line-height: 20px;
  font-size: 15px;
  margin-bottom: 5px;
  overflow: hidden;
}

.left-des-item svg {
  width: 16px;
  height: 16px;
  fill: var(--fill);
  font-size: 18px;
  margin-right: 10px;
}
</style>
