import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { comparisonCatalog } from '../data/generated/comparisonCatalog.js'
import { loadToolDetail } from '../data/generated/toolDetailLoader.js'

const detailFields = ['freeQuota', 'contextWindow', 'chineseSupport', 'pros', 'cons', 'bestFor']

function hasComparisonDetails(tool) {
  return Boolean(tool) && detailFields.some((field) =>
    Object.prototype.hasOwnProperty.call(tool, field)
  )
}

export const useComparisonStore = defineStore('comparison', () => {
  const tools = ref(comparisonCatalog)
  const comparedToolIds = ref([])
  const detailById = ref({})
  const isLoadingDetails = ref(false)
  const detailLoadError = ref(false)
  const pendingDetailLoads = new Map()
  let detailRequestId = 0

  const comparedTools = computed(() =>
    comparedToolIds.value
      .map((id) => tools.value.find((tool) => tool.id === id))
      .filter(Boolean)
  )

  const detailedComparedTools = computed(() =>
    comparedToolIds.value
      .map((id) => detailById.value[id] || tools.value.find((tool) =>
        tool.id === id && hasComparisonDetails(tool)
      ))
      .filter(Boolean)
  )

  function invalidateDetailRequest() {
    detailRequestId += 1
    isLoadingDetails.value = false
    detailLoadError.value = false
  }

  function addToCompare(toolId) {
    if (comparedToolIds.value.length < 4 && !comparedToolIds.value.includes(toolId)) {
      invalidateDetailRequest()
      comparedToolIds.value = [...comparedToolIds.value, toolId]
    }
  }

  function removeFromCompare(toolId) {
    if (!comparedToolIds.value.includes(toolId)) return
    invalidateDetailRequest()
    comparedToolIds.value = comparedToolIds.value.filter((id) => id !== toolId)
  }

  function clearCompare() {
    if (comparedToolIds.value.length) invalidateDetailRequest()
    comparedToolIds.value = []
  }

  function loadDetailOnce(id) {
    if (!pendingDetailLoads.has(id)) {
      const pending = loadToolDetail(id).finally(() => pendingDetailLoads.delete(id))
      pendingDetailLoads.set(id, pending)
    }
    return pendingDetailLoads.get(id)
  }

  async function loadComparedToolDetails() {
    const selectedIds = [...comparedToolIds.value]
    if (selectedIds.length < 2) return false

    const requestId = ++detailRequestId
    isLoadingDetails.value = true
    detailLoadError.value = false

    try {
      const loadedDetails = await Promise.all(selectedIds.map(async (id) => {
        if (detailById.value[id]) return detailById.value[id]
        const indexedTool = tools.value.find((tool) => tool.id === id)
        if (hasComparisonDetails(indexedTool)) return indexedTool
        return loadDetailOnce(id)
      }))

      const selectionIsCurrent = selectedIds.join(',') === comparedToolIds.value.join(',')
      if (requestId !== detailRequestId || !selectionIsCurrent) return false
      if (loadedDetails.some((tool) => !tool)) throw new Error('Comparison details are unavailable')

      detailById.value = {
        ...detailById.value,
        ...Object.fromEntries(loadedDetails.map((tool) => [tool.id, tool]))
      }
      return true
    } catch {
      if (requestId === detailRequestId) detailLoadError.value = true
      return false
    } finally {
      if (requestId === detailRequestId) isLoadingDetails.value = false
    }
  }

  function $reset() {
    invalidateDetailRequest()
    tools.value = comparisonCatalog
    comparedToolIds.value = []
    detailById.value = {}
    pendingDetailLoads.clear()
  }

  return {
    tools,
    comparedToolIds,
    comparedTools,
    detailedComparedTools,
    isLoadingDetails,
    detailLoadError,
    addToCompare,
    removeFromCompare,
    clearCompare,
    loadComparedToolDetails,
    $reset
  }
})
