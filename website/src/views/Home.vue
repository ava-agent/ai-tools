<template>
  <div class="min-h-screen bg-background">
    <Hero />
    <SearchBar />
    <Suspense>
      <template #default>
        <ToolGrid
          :tools="filteredTools"
          @clear-filters="handleClearFilters"
        />
      </template>
      <template #fallback>
        <LoadingSpinner />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { computed, Suspense } from 'vue'
import { useToolsStore } from '../stores/tools'
import Hero from '../components/Hero.vue'
import SearchBar from '../components/SearchBar.vue'
import ToolGrid from '../components/ToolGrid.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'

const toolsStore = useToolsStore()

const filteredTools = computed(() => toolsStore.filteredTools)

function handleClearFilters() {
  toolsStore.clearFilters()
}
</script>
