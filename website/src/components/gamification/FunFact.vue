<template>
  <div
    v-if="fact"
    class="flex items-start gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/15"
  >
    <Lightbulb class="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
    <div>
      <span class="text-xs text-yellow-400/70 uppercase tracking-wider font-medium">
        你知道吗？
      </span>
      <p class="text-white/70 text-sm mt-1">
        {{ fact }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Lightbulb } from 'lucide-vue-next'
import { getRandomFact, getRandomFactAny } from '../../data/funFacts.js'

const props = defineProps({
  toolId: { type: String, default: null },
})

const fact = ref(null)

onMounted(() => {
  if (props.toolId) {
    fact.value = getRandomFact(props.toolId)
  } else {
    const result = getRandomFactAny()
    fact.value = result?.fact || null
  }
})
</script>
