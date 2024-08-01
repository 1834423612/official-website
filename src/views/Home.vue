<template>
  <div class="flex flex-col min-h-[100vh]">
    <main class="flex-1">
      <section class="bg-muted py-12 px-6 md:py-24 h-full">
        <div class="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 px-4 items-center">
          <div>
            <h2 class="text-xl font-bold mb-4">Welcome to</h2>
            <h2 class="text-4xl font-bold mb-4">TEAM 695 Bison Robotics</h2>
            <p class="text-muted-foreground mb-6">
              We are a FIRST Robotics Competition team dedicated to inspiring
              the next generation of engineers and innovators. Through our
              participation in the annual FIRST Robotics Competition, we strive
              to develop cutting-edge robots, foster teamwork and leadership,
              and make a positive impact on our community. 【AI Generated,
              should be changed】
            </p>
            <div class="flex gap-4">
              <router-link
                to="/"
                class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Button 1
              </router-link>
              <router-link
                to="/"
                class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Button 2
              </router-link>
            </div>
          </div>
          <!-- <img
            src="https://gravatar.com/avatar/361a331e88af15ea5f7f81cdd60a6633e7bc4a69db43b236caae96cdcb1ddd03?s=1024"
            width="600"
            height="400"
            alt="Robotics Picture"
            class="rounded-lg object-cover"
          /> -->
          <CardStack></CardStack>
        </div>
      </section>

      <!-- Mentors Section -->
      <Mentors />
      <!-- <MentorCard
        src="https://placehold.co/100x100/ff0000/ffffff/"
        alt="Mentor Avatar"
        name="John Doe"
        role="Lead Mentor"
        detailsLink="/mentors/john-doe"
      /> -->

      <!-- Team Members Section -->
      <!-- <Members /> -->

      <!-- Robots Section -->
      <!-- <Robots /> -->

      <!-- News Section -->
      <News />

      <!-- Sponsors Section -->
      <!-- <Sponsors /> -->
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardStack from "../components/CardStack.vue";
import Robots from "../views/Robots.vue";
import Mentors from './Mentors.vue';
import MentorCard from "../components/Cards/MentorCard.vue";
import Members from "../views/Members.vue";
import News from "../views/News.vue";
import Sponsors from "../views/Sponsors.vue";

export default defineComponent({
  components: { CardStack, Robots, Mentors, MentorCard, Members, News, Sponsors },
});
</script>
