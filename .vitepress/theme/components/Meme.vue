<template>
  <img
    v-if="src"
    :src="src"
    :alt="name"
    :class="$style.meme"
  />
  <span v-else>❓</span>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  name: String
})

const emojiMap = ref({})

// 自动导入表情包
const importEmojis = async () => {
  try {
    const files = import.meta.glob('/public/emojis/**/*.*') // 获取所有文件
    for (const path in files) {
      const name = path.split('/').pop().split('.')[0] // 获取文件名（不含扩展名）
      emojiMap.value[name] = path.replace('/public', '') // 添加到 emojiMap
    }
  } catch (error) {
    console.error('Failed to load emojis:', error)
  }
}

onMounted(() => {
  importEmojis()
})

const src = computed(() => emojiMap.value[props.name])
</script>

<style module>
.meme {
  display: inline-block;
  height: 1.5em;
  width: auto;
  vertical-align: -0.2em;
  margin: 0 0.1em;
}
</style>