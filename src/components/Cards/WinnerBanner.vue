<template>
    <!-- <div class="relative w-64 mx-auto">
      <div class="bg-[#0f4bcb] text-center py-3">
        <img
          src="https://www.thebluealliance.com/images/first_icon.svg"
          alt="FRC Logo"
          class="w-12 mx-auto mb-1"
        />
        <h2 class="text-white font-bold italic text-lg">{{ title }}</h2>
        <p class="text-white text-md mt-1">{{ description }}</p>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-0 w-0 border-l-[32px] border-r-[32px] border-t-[16px] border-t-transparent border-l-[#0f4bcb] border-r-[#0f4bcb]"></div>
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0 w-0 border-l-[32px] border-r-[32px] border-t-[16px] border-t-[#0f4bcb] border-l-transparent border-r-transparent"></div>
    </div> -->

    <div class="relative inline-block bg-[#0f4bcb] text-white text-center p-2 w-36 h-[170px] mb-10">
    <img
      src="https://www.thebluealliance.com/images/first_icon.svg"
      alt="FRC Logo"
      class="w-[4.8rem] mx-auto mb-2 mt-4"
    />
    <div class="award-name">
      <span class="text-base font-bold italic text-center mb-8">{{ title }}</span>
    </div>
    <div class="award-event mt-1">
      <span class="text-xs font-medium text-center">{{ description }}</span>
    </div>
    <div class="absolute left-0 right-0 top-full border-l-[#0f4bcb] border-r-[#0f4bcb] border-b-[#0000] border-solid border-x-[72px] border-b-[30px]"></div>
  </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'WinnerBanner',
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  });
  </script>

<style scoped>
.banner {
  /* Use the shadow effect of Tailwind CSS */
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
}
</style>
