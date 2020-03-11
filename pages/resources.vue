<template>
  <main>
    <h1>Resources</h1>
  </main>
</template>

<script>
import { getResources } from '~/api/posts';

export default {
  async asyncData() {
    const resources = await getResources();
    return { resources };
  }
};
</script>

<style></style>
