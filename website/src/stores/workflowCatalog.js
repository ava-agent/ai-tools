import { ref } from 'vue'
import { defineStore } from 'pinia'
import { matcherCatalog } from '../data/generated/matcherCatalog.js'

export const useWorkflowCatalogStore = defineStore('workflowCatalog', () => {
  const tools = ref(matcherCatalog)

  function getToolById(id) {
    return tools.value.find((tool) => tool.id === id) || null
  }

  function $reset() {
    tools.value = matcherCatalog
  }

  return { tools, getToolById, $reset }
})
