import type { WeatherData } from "~/types/weather";
import type { NuxtError } from "#app";

export function useWeather() {
  const weatherData = useState<WeatherData | null>("weatherData", () => null);
  const error = ref<string | null>(null);
  const loading = ref<boolean>(false);

  const fetchWeather = async (city: string) => {
    if (!city) {
      error.value = "Please enter a city name";
      return;
    }

    if (city === weatherData.value?.location.name) return;

    loading.value = true;
    error.value = null;

    try {
      const data = await $fetch<WeatherData>("/api/weather", {
        method: "GET",
        query: { city: city },
      });
      console.log("🚀 ~ fetchWeather ~ data:", data);

      if (data.error) {
        error.value =
          data.error?.message ||
          "Unable to fetch weather data. Please try again later.";
        return;
      }

      weatherData.value = data;
    } catch (e) {
      console.error("🚀 ~ fetchWeather ~ e:", e);
      if (e instanceof Error) {
        error.value =
          (e as NuxtError).statusMessage ||
          e.message ||
          "An unexpected error occurred.";
      } else {
        error.value = "An unknown error occurred. Please try again later.";
      }
    } finally {
      loading.value = false;
    }
  };

  // Ability to create additional functions e.g. searchWeather

  return { weatherData, error, loading, fetchWeather };
}
