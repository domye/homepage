<template>
  <div>
    <RightTitle :page="title"></RightTitle>
    <RightIntro></RightIntro>
  </div>
</template>

<script setup lang="ts">
import RightTitle from '@/components/Right/RightTitle.vue'
import RightIntro from '@/components/Right/RightIntro.vue'
import { PAGE_TITLES } from '@/config/constants'

const title = PAGE_TITLES.ABOUT
</script>

<style></style>
