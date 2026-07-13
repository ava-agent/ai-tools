<!-- src/views/Landing.vue -->
<template>
  <div class="min-h-screen">
    <IntroVideo
      :show="showIntro"
      @close="showIntro = false"
    />
    <HeroSection @play-intro="showIntro = true" />
    <EcosystemAtlas />
    <ToolLandscape />
    <RecommendationCards />
    <QuickEntryCards />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '../components/landing/HeroSection.vue'
import EcosystemAtlas from '../components/landing/EcosystemAtlas.vue'
import ToolLandscape from '../components/landing/ToolLandscape.vue'
import RecommendationCards from '../components/landing/RecommendationCards.vue'
import QuickEntryCards from '../components/landing/QuickEntryCards.vue'
import IntroVideo from '../components/IntroVideo.vue'

const showIntro = ref(false)
</script>
