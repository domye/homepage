<template>
  <div class="buttom-sheet" :class="{ show: isVisible, dragging: isDragging }">
    <div class="sheet-overlay" @click="hide"></div>
    <div class="content" :style="{ height: currentHeight + 'vh' }">
      <div class="header">
        <div class="drag-icon" @mousedown="dragStart" @touchstart="dragStart">
          <span></span>
        </div>
      </div>
      <div class="body">
        <div class="project-detail">
          <div class="detail-left">
            <img :src="item.img" alt="project" class="project-cover" />
          </div>
          <div class="detail-right">
            <h2>{{ item.title }}</h2>
            <div class="meta-info">
              <span v-if="item.type" class="meta-item">{{ item.type }}</span>
              <span v-if="item.author" class="meta-item">{{
                item.author
              }}</span>
              <span v-if="item.desc" class="meta-item">{{ item.desc }}</span>
            </div>
            <div class="action-buttons">
              <a
                v-if="item.link"
                :href="item.link"
                class="project-link"
                target="_blank"
                >访问</a
              >
              <a
                v-if="item.github"
                :href="item.github"
                class="github-link"
                target="_blank"
                >GitHub</a
              >
            </div>
          </div>
        </div>
        <div class="project-description" v-if="item.content">
          <h3>简介</h3>
          <p v-for="(line, idx) in item.content.split('\n')" :key="idx">
            {{ line.trim() }}
          </p>
        </div>
        <div class="tech-stack" v-if="item.tech">
          <h3>标签</h3>
          <div class="tech-tags">
            <span
              v-for="(tag, idx) in item.tech.split(',')"
              :key="idx"
              class="tech-tag"
              >{{ tag.trim() }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import type { ModalItem } from '@/types/components'

const props = defineProps<{ item: ModalItem; isVisible: boolean }>()
const emit = defineEmits<{ (e: 'update:isVisible', value: boolean): void }>()

const isDragging = ref(false)
const startY = ref(0)
const startHeight = ref(60)
const currentHeight = ref(60)

const hide = () => emit('update:isVisible', false)

const dragStart = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true
  startY.value = 'touches' in e ? e.touches[0].pageY : e.pageY
  startHeight.value = currentHeight.value
}

const onDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return
  const y = 'touches' in e ? e.touches[0].pageY : e.pageY
  const delta = startY.value - y
  currentHeight.value = Math.min(
    100,
    Math.max(0, startHeight.value + (delta / window.innerHeight) * 100)
  )
}

const dragEnd = () => {
  if (!isDragging.value) return
  isDragging.value = false
  if (currentHeight.value < 25) hide()
  else if (currentHeight.value > 75) currentHeight.value = 100
  else currentHeight.value = 60
}

watch(
  () => props.isVisible,
  (v) => {
    document.body.style.overflowY = v ? 'hidden' : 'auto'
  }
)

onMounted(() => {
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', dragEnd)
  document.addEventListener('touchmove', onDrag)
  document.addEventListener('touchend', dragEnd)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', dragEnd)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('touchend', dragEnd)
})
</script>

<style scoped>
.buttom-sheet {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0;
  pointer-events: none;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.1s linear;
  z-index: 100;
}
.buttom-sheet.show {
  opacity: 1;
  pointer-events: auto;
}
.sheet-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background: var(--item_bg_color);
}
.content {
  width: 100%;
  position: relative;
  background: var(--box_bg_color);
  backdrop-filter: blur(20px);
  max-height: 100vh;
  height: 60vh;
  max-width: 800px;
  padding: 25px 30px;
  transform: translateY(100%);
  border-radius: 15px 15px 0 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.3s ease-out,
    opacity 0.1s linear;
}
.buttom-sheet.show .content {
  transform: translateY(0);
  opacity: 1;
}
.buttom-sheet.dragging .content {
  transition: none;
}
.header {
  display: flex;
  justify-content: center;
}
.drag-icon {
  cursor: grab;
  user-select: none;
  padding: 15px;
  margin-top: -15px;
}
.drag-icon span {
  height: 4px;
  width: 40px;
  display: block;
  background: #c7d0e1;
  border-radius: 50px;
}
.body {
  height: 100%;
  overflow-y: auto;
  padding: 15px 0 40px;
  scrollbar-width: none;
}
.body::-webkit-scrollbar {
  width: 0;
}
.project-detail {
  display: flex;
  margin-bottom: 20px;
}
.detail-left {
  flex: 0 0 150px;
  margin-right: 30px;
  margin-left: 10px;
}
.project-cover {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.45);
}
.detail-right {
  flex: 1;
}
.detail-right h2 {
  font-size: 24px;
  margin: 0 0 10px;
  color: #fff;
}
.meta-info {
  margin: 15px 0;
  color: #fff;
  font-size: 14px;
  line-height: 1.6;
}
.meta-item {
  display: inline-block;
  margin-right: 20px;
  position: relative;
}
.meta-item:not(:last-child):after {
  content: '•';
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
}
.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}
.project-link,
.github-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}
.project-link {
  background-color: #007bff93;
  color: white;
  border: 1px solid #007bff88;
}
.github-link {
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
}
.project-description {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
.project-description h3 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #fff;
}
.project-description p {
  line-height: 1.8;
  color: #fff;
  font-size: 15px;
  margin: 0;
}
.tech-stack {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
.tech-stack h3 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #fff;
}
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tech-tag {
  background-color: #f0f0f0;
  color: #555;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
}
@media (max-width: 600px) {
  .project-detail {
    flex-direction: column;
  }
  .detail-left {
    margin: 0 0 20px;
    text-align: center;
  }
  .project-cover {
    max-width: 150px;
    margin: 0 auto;
  }
  .action-buttons {
    justify-content: center;
  }
  .content {
    padding: 20px 15px;
  }
}
</style>
