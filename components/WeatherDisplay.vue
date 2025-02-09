<script setup lang="ts">
import type { WeatherData } from "~/types/weather";

const weatherData = useState<WeatherData | null>("weatherData");
</script>

<template>
  <div
    class="bg-effect-50 ring-1 ring-effect-100 w-full px-6 rounded-xl text-center divide-y divide-effect-100"
  >
    <div class="py-6">
      <h2 class="text-4xl font-semibold text-gray-900">
        {{ weatherData?.location.name }}
      </h2>
      <h3 class="text-sm font-light text-gray-500">
        {{ weatherData?.location.region }}, {{ weatherData?.location.country }}
      </h3>
    </div>
    <div class="py-6">
      <p class="text-7xl font-semibold text-gray-900">
        {{ weatherData?.current.temp_c.toFixed(0) }}&#8451;
      </p>
      <p class="text-gray-500 font-light text-sm">
        {{ weatherData?.current.condition.text }}
      </p>
      <img
        :src="weatherData?.current.condition.icon"
        :alt="weatherData?.current.condition.text"
        class="mx-auto mt-2.5"
        width="50"
        height="50"
      />
    </div>
  </div>
</template>
