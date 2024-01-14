<!-- SocialSignInButton.vue -->
<template>
    <button :type="buttonType" class="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
      <NuxtImg :src="logoSrc" width="20" height="20" />
      {{ buttonText }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      buttonType: String,
      logoSrc: String,
      buttonText: String,
    },
  };
  </script>
  