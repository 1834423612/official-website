<template>
  <div>
    <main class="flex-1">
      <section id="robots" class="py-16 px-6 bg-muted">
        <div class="container mx-auto max-w-4xl">
          <h2 class="text-3xl font-bold mb-8">Our Robots</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <img src="https://1drv.ms/i/c/8c6e9013852d4128/ESEGUGf9uaFJk5bg60DyKqoBBqMU1InyHaLV6Jl_3tw1Iw?e=qJg9Rx" width="400" height="300" alt="Robot 1" class="rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>Robot 2023-2024</CardTitle>
                <CardDescription>
                  This simple yet eloquent design advancede to worlds.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img src="https://gravatar.com/avatar/361a331e88af15ea5f7f81cdd60a6633e7bc4a69db43b236caae96cdcb1ddd03?s=1024" width="400" height="300" alt="Robot 2" class="rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>Robot 2</CardTitle>
                <CardDescription>
                  Our first robot, test was really good and we will continue winning the competition.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img src="https://gravatar.com/avatar/361a331e88af15ea5f7f81cdd60a6633e7bc4a69db43b236caae96cdcb1ddd03?s=1024" width="400" height="300" alt="Robot 3" class="rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>Robot 3</CardTitle>
                <CardDescription>
                  Our first robot, test was really good and we will continue winning the competition.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '../components/Card.vue';
import CardHeader from '../components/CardHeader.vue';
import CardTitle from '../components/CardTitle.vue';
import CardDescription from '../components/CardDescription.vue';
import CardContent from '../components/CardContent.vue';

export default defineComponent({
  components: {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
  },
});
</script>
