<template>
  <div>
    <main class="flex-1">
      <section id="mentors" class="py-16 px-6 bg-green-100">
        <div class="container mx-auto max-w-6xl">
          <h2 class="text-3xl font-bold mb-8">Our Mentors</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MentorCard
              src="https://placehold.co/100x100/ff0000/ffffff/"
              alt="Mentor Avatar"
              name="Test Hello"
              role="Test Role"
              detailsLink="/mentors/test-hello"
            />
            <MentorCard
              src="https://placehold.co/100x100/ff0000/ffffff/"
              alt="Mentor Avatar"
              name="Test Hello"
              role="Test Role"
              detailsLink="/mentors/test-hello"
            />
            <MentorCard
              src="https://placehold.co/100x100/ff0000/ffffff/"
              alt="Mentor Avatar"
              name="Test Hello"
              role="Test Role"
              detailsLink="/mentors/test-hello"
            />
            <MentorCard
              src="https://placehold.co/100x100/ff0000/ffffff/"
              alt="Mentor Avatar"
              name="Test Hello"
              role="Test Role"
              detailsLink="/mentors/test-hello"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MentorCard from "../components/Cards/MentorCard.vue";

export default defineComponent({
  components: {
    MentorCard,
  },
});
</script>
