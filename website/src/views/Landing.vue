<!-- src/views/Landing.vue -->
<template>
  <div class="min-h-screen">
    <HeroSection />
    <ToolLandscape />
    <RecommendationCards />
    <QuickEntryCards />
  </div>
</template>

<script setup>
import HeroSection from '../components/landing/HeroSection.vue'
import ToolLandscape from '../components/landing/ToolLandscape.vue'
import RecommendationCards from '../components/landing/RecommendationCards.vue'
import QuickEntryCards from '../components/landing/QuickEntryCards.vue'
</script>
