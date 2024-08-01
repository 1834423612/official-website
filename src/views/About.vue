<template>
  <div>
    <header class="relative">
      <img
        src="https://placehold.co/1920x600/22c55e/22c55e/"
        alt="About Team"
        class="w-full h-[33vh] object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
        <h1 class="text-white text-4xl md:text-5xl font-bold">About Team</h1>
        <p class="text-white text-lg mt-2">Learn more about our dedicated team members and their contributions.</p>
      </div>
    </header>

    <section class="pt-12">
      <div class="container mx-auto px-5">
        <h2 class="text-3xl font-medium text-center mb-8">Achievements</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <WinnerBanner
            v-for="(item, index) in WinnerBannerItems"
            :key="index"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="container mx-auto px-5">
        <h2 class="text-3xl font-medium text-center mb-8">Our [Gallery Name]</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <GalleryCard
            v-for="(item, index) in galleryItems"
            :key="index"
            :title="item.title"
            :description="item.description"
            :image="item.image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GalleryCard from '@/components/Cards/GalleryCard.vue';
import WinnerBanner from '@/components/Cards/WinnerBanner.vue';

export default defineComponent({
  name: 'About',
  components: {
    GalleryCard,
    WinnerBanner,
  },
  data() {
    return {
      galleryItems: [
        { title: 'Image Title 1', description: 'Description for image 1.', image: 'https://placehold.co/400x300/444/white/' },
        { title: 'Image Title 2', description: 'Description for image 2.', image: 'https://placehold.co/400x300/444/white/' },
        { title: 'Image Title 3', description: 'Description for image 3.', image: 'https://placehold.co/400x300/444/white/' },
        { title: 'Image Title 4', description: 'Description for image 4.', image: 'https://placehold.co/400x300/444/white/' },
        { title: 'Image Title 5', description: 'Description for image 5.', image: 'https://placehold.co/400x300/444/white/' },
        { title: 'Image Title 6', description: 'Description for image 6.', image: 'https://placehold.co/400x300/444/white/' },
      ],
      WinnerBannerItems: [
        { title: 'Winner', description: '2023 SOUTH FLORIDA REGIONAL' },
        { title: 'Winner', description: '2023 SOUTH FLORIDA REGIONAL' },
        { title: 'Winner', description: '2023 SOUTH FLORIDA REGIONAL' },
      ],
    };
  },
});
</script>

<style scoped>
/* Some Style Might need (?) */
</style>