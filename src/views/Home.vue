<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-1">
      <section class="bg-primary py-20 px-6 text-primary-foreground">
        <div class="container mx-auto max-w-4xl space-y-6 text-center">
          <img src="/placeholder.svg" width="80" height="80" alt="Team Logo" class="mx-auto rounded-full" />
          <h1 class="text-4xl font-bold">Team Robotics</h1>
          <p class="text-lg">
            We are a FIRST Robotics Competition team dedicated to inspiring the next generation of engineers,
            innovators, and leaders. Our team has a rich history of building award-winning robots and competing at the
            highest levels of the FIRST Robotics Competition.
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  components: { Header, Footer },
});
</script>
