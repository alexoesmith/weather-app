<script setup lang="ts">
const search = defineModel<string>({ default: "" });
</script>

<template>
  <div>
    <label for="search" class="sr-only">Enter city name</label>
    <div class="relative">
      <input
        v-model.trim="search"
        type="text"
        name="search"
        id="search"
        class="bg-white rounded-xl w-full px-6 py-5 outline-0 placeholder:text-gray-400 ring-1 ring-inset focus:ring-2 focus:ring-effect-300 ring-effect-200 peer transition-colors"
        placeholder="Enter city name"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="Search"
        aria-hidden="true"
        class="size-6 absolute right-6 top-1/2 transform -translate-y-1/2 text-effect-400 peer-focus-within:scale-120 transition-transform"
      >
        <path
          fill-rule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>
