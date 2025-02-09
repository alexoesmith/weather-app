<script setup lang="ts">
const city = ref("");
const { weatherData, error, loading, fetchWeather } = useWeather();
</script>

<template>
  <div
    class="sm:py-20 py-10 max-w-2xl mx-auto px-4 sm:px-8 flex flex-col gap-y-10"
  >
    <AppLogo />
    <WeatherSearch v-model="city" />
    <AppError v-if="error">
      {{ error }}
    </AppError>
    <LoadingSpinner v-if="loading" />
    <WeatherDisplay v-if="weatherData" />
    <AppButton :disabled="loading">
      {{ loading ? "Loading..." : "Search Weather" }}
    </AppButton>
    <AppFooter />
  </div>
</template>
