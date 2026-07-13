import { ref } from 'vue'
import { defineStore } from 'pinia'
import { pricingCatalog } from '../data/generated/pricingCatalog.js'

export const usePricingCatalogStore = defineStore('pricingCatalog', () => {
  const tools = ref(pricingCatalog)

  function $reset() {
    tools.value = pricingCatalog
  }

  return { tools, $reset }
})
