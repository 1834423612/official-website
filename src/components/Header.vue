<template>
  <header class="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <router-link to="/" class="hover:underline"><img src="../assets/images/bison-robotics.png" width="40" height="40" alt="695 Logo" class="rounded-full" /></router-link>
      <h1 class="text-2xl font-bold">695 Bison Robotics</h1>
    </div>
    <nav class="hidden md:flex items-center gap-6">
      <router-link to="/" class="hover:underline">Home</router-link>
      <!-- <router-link to="/mentors" class="hover:underline">Mentors</router-link>
      <router-link to="/members" class="hover:underline">Members</router-link>
      <router-link to="/robots" class="hover:underline">Robots</router-link>
      <router-link to="/news" class="hover:underline">News</router-link>
      <router-link to="/sponsors" class="hover:underline">Sponsors</router-link> -->
      <router-link to="/mentors" class="hover:underline">Menu 1</router-link>
      <router-link to="/members" class="hover:underline">Menu 2</router-link>
      <router-link to="/robots" class="hover:underline">Menu 3</router-link>
    </nav>
    <button class="md:hidden" @click="toggleMenu">
      <MenuIcon class="h-6 w-6" />
      <span class="sr-only">Open Menu</span>
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuIcon from './MenuIcon.vue';

export default defineComponent({
  components: { MenuIcon },
  methods: {
    toggleMenu() {
      // Some click events need to do
      console.log('Menu toggled');
    }
  }
});
</script>
