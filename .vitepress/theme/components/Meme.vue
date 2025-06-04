<template>
  <img
    v-if="src"
    :src="src"
    :alt="name"
    style="width:1.5em;vertical-align:-0.2em;"
  />
  <span v-else>❓</span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String
})

const emojiMap = {
  qgi: '/emojis/qgi.png',
  // 更多表情
}

const src = computed(() => emojiMap[props.name])
</script>