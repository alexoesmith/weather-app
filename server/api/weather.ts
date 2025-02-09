import { WeatherData } from "~/types/weather";

export default defineEventHandler(async (event) => {
  const { city } = getQuery<{ city: string }>(event);
  const { apiBaseUrl, apiKey } = useRuntimeConfig();
  const url = `${apiBaseUrl}/current.json?key=${apiKey}&q=${city}`;

  if (!apiKey || !apiBaseUrl) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request: API key or base URL not set",
    });
  }

  if (!city) {
    throw createError({
      statusCode: 400,
      statusMessage: "Please enter a city name",
    });
  }

  try {
    const data: WeatherData = await $fetch(url, {
      method: "GET",
      ignoreResponseError: true,
    });
    return { statusCode: 200, ...data };
  } catch (e) {
    console.error("🚀 ~ defineEventHandler ~ e:", e);
    throw createError({
      statusCode: 500,
      statusMessage:
        e instanceof Error ? e.message : "An unexpected error occurred",
    });
  }
});
