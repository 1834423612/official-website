<template>
  <div>
    <main class="flex-1">
      <section id="members" class="py-16 px-6">
        <div class="container mx-auto max-w-4xl">
          <h2 class="text-3xl font-bold mb-8">Our Team Members</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Avatar>
                  <AvatarImage
                    src="https://gravatar.com/avatar/361a331e88af15ea5f7f81cdd60a6633e7bc4a69db43b236caae96cdcb1ddd03?s=1024" />
                </Avatar>
                <CardTitle>Test Name</CardTitle>
                <CardDescription>Team Member</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Test Name is a good guy:) Some description of him.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Avatar>
                  <AvatarImage
                    src="https://gravatar.com/avatar/361a331e88af15ea5f7f81cdd60a6633e7bc4a69db43b236caae96cdcb1ddd03?s=1024" />
                </Avatar>
                <CardTitle>Test Name</CardTitle>
                <CardDescription>Team Member</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Test Name is a good guy:) Some description of him.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Avatar>
                  <AvatarImage
                    src="https://gravatar.com/avatar/361a331e88af15ea5f7f81cdd60a6633e7bc4a69db43b236caae96cdcb1ddd03?s=1024" />
                </Avatar>
                <CardTitle>Test Name</CardTitle>
                <CardDescription>Team Member</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Test Name is a good guy:) Some description of him.
                </p>
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
import Avatar from '../components/Avatar.vue';
import AvatarImage from '../components/AvatarImage.vue';
import AvatarFallback from '../components/AvatarFallback.vue';

export default defineComponent({
  components: {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    Avatar,
    AvatarImage,
    AvatarFallback,
  },
});
</script>
