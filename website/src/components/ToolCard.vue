<template>
  <RouterLink
    :to="{ name: 'tool-detail', params: { id: tool.id } }"
    class="block"
  >
    <article class="glass-card glass-card-interactive p-4">
      <!-- Header: Icon + Name + Developer -->
      <div class="flex items-center gap-2.5 mb-2.5">
        <ToolLogo
          :tool-id="tool.id"
          :tool-name="tool.name"
          size="sm"
        />
        <div class="min-w-0">
          <div class="text-sm font-semibold text-white truncate">
            {{ tool.name }}
          </div>
          <div class="flex items-center gap-1.5 min-w-0">
            <div class="text-[11px] text-white/40 truncate">
              {{ tool.developer }}
            </div>
            <span
              :class="verificationClass"
              :title="verification.description"
            >
              {{ verification.label }}
            </span>
          </div>
        </div>
      </div>

      <!-- Description -->
      <p class="text-xs text-white/45 leading-relaxed mb-2.5 line-clamp-2">
        {{ tool.bestFor }}
      </p>

      <!-- Footer: Stars + Score Badge -->
      <div class="flex justify-between items-center">
        <StarRating
          :rating="tool.personalExperience?.rating || 0"
          class="text-[#ffd60a]"
        />
        <div
          v-if="tool.personalExperience?.rating"
          class="text-[11px] text-[#30d158] px-2 py-0.5 rounded-md"
          style="background: rgba(48, 209, 88, 0.1);"
        >
          {{ tool.personalExperience.rating.toFixed(1) }}
        </div>
      </div>
    </article>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ToolLogo from './ToolLogo.vue'
import StarRating from './StarRating.vue'
import { getToolVerification, getVerificationBadgeClass } from '../utils/toolMetadata'

const props = defineProps({
  tool: {
    type: Object,
    required: true
  }
})

const verification = computed(() => getToolVerification(props.tool))
const verificationClass = computed(() => getVerificationBadgeClass(props.tool))
</script>

<style scoped>
a { text-decoration: none; }
</style>
