<template>
  <div>
    <main class="flex-1">
      <section id="news" class="py-16 px-6">
        <div class="container mx-auto max-w-6xl">
          <h2 class="text-3xl font-bold mb-8">Latest News</h2>
          <div class="space-y-6">
            <article class="p-6 bg-white rounded-lg shadow-md">
              <h3 class="text-2xl font-bold mb-2">News 1</h3>
              <p class="text-sm text-gray-500 mb-4">March 1, 2021</p>
              <p>
                Some words describe the events. Some words describe the events. Some words describe the events. Some words describe the events.
              </p>
            </article>
            <article class="p-6 bg-white rounded-lg shadow-md">
              <h3 class="text-2xl font-bold mb-2">News 2</h3>
              <p class="text-sm text-gray-500 mb-4">March 1, 2021</p>
              <p>
                Some words describe the events. Some words describe the events. Some words describe the events. Some words describe the events.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {  },
});
</script>
