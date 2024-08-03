<template>
  <div>
    <header class="relative">

      <!-- About Team Banner -->
      <img
        src="https://placehold.co/1920x600/22c55e/22c55e/"
        alt="About Team"
        class="w-full h-[33vh] object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
        <h1 class="text-white text-4xl md:text-5xl font-bold">About Team</h1>
        <p class="text-gray-200 text-lg mt-2 mx-2 text-center">Learn more about our dedicated team members and their contributions.</p>
      </div>
    </header>

    <!-- Achievements Banner Area (Blue Flag) -->
    <section class="pt-8 flex justify-between">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-medium text-center mb-8">Achievements</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          <WinnerBanner
            v-for="(item, index) in WinnerBannerItems"
            :key="index"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
    </section>

    <!-- Mentors Section -->
    <section id="mentors" class="py-16 px-6 bg-green-100">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold mb-8">Our Mentors</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MentorCard
            v-for="(mentor, index) in mentors"
            :key="index"
            :src="mentor.avatar"
            :alt="mentor.name"
            :name="mentor.name"
            :role="mentor.role"
            :detailsLink="`/mentors/${mentor.name.replace(/ /g, '-')}`"
            :email="mentor.email"
          />
        </div>
      </div>
    </section>

    <!-- Gallery Area -->
    <section class="py-12">
      <div class="container mx-auto px-5">
        <h2 class="text-3xl font-medium text-center mb-8">Gallery</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <GalleryCard
            v-for="(item, index) in galleryItems"
            :key="index"
            :image="item.image"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WinnerBanner from '@/components/Cards/WinnerBanner.vue';
import mentorsData from '../components/Mentor/info.json';
import MentorCard from '@/components/Cards/MentorCard.vue';
import GalleryCard from '@/components/Cards/GalleryCard.vue';

export default defineComponent({
  name: 'About',
  components: {
    WinnerBanner,
    MentorCard,
    GalleryCard,
  },
  data() {
    return {
      WinnerBannerItems: [
        { title: 'Winner', description: '2023 SOUTH FLORIDA REGIONAL' },
        { title: 'Winner', description: '2023 SOUTH FLORIDA REGIONAL' },
        { title: 'Winner', description: '2023 SOUTH FLORIDA REGIONAL' },
      ],
      mentors: mentorsData,
      galleryItems: [
        { title: 'Pittsburgh Regional', description: 'Pittsburgh Regional 2024', image: 'https://r2.fastbirdcdn.online/Robotics/Robots/66ad276113a1c-20240803_RoboticsTeamPittsburghRegional.jpg' },
        { title: 'Gold Module', description: 'Gold Module scores a cube', image: 'https://r2.fastbirdcdn.online/Robotics/Robots/66ac2313c6e20-20240802_Screenshot%202024-08-01%20200551.png' },
        { title: 'Gold Module', description: 'Gold Module on practice field', image: 'https://r2.fastbirdcdn.online/Robotics/Robots/66ac2313c81d8-20240802_Screenshot%202024-08-01%20200559.png' },
        { title: 'Gold Module', description: 'Description for image 4.', image: 'https://r2.fastbirdcdn.online/Robotics/Robots/66ac2099b1841-20240802_Screenshot%202024-08-01%20193902.png' },
        /*
        { title: 'Image Title 5', description: 'Description for image 5.', image: 'https://placehold.co/400x300/444/white/' },
        { title: 'Image Title 6', description: 'Description for image 6.', image: 'https://placehold.co/400x300/444/white/' },
        */
      ],
    };
  },
});
</script>

<style scoped>
/* Some Style Might need (?) */
</style>