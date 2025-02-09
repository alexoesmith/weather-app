<template>
  <div
    class="sm:py-20 py-10 max-w-2xl mx-auto px-4 sm:px-8 flex flex-col gap-y-10"
  >
    <AppLogo />
    <WeatherSearch />
    <AppError>Something went wrong. Please try again.</AppError>
    <LoadingSpinner />
    <WeatherDisplay />
    <AppButton>Search Weather</AppButton>
    <AppFooter />
  </div>
</template>
