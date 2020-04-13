<template>
  <div class="container-fluid">
    <main>
      <h1>{{ page.title }}</h1>
      <img class="img-fluid" :src="page.feature_image" alt="an image" />
      <div class="content">
        <!-- eslint-disable-next-line  -->
        <div v-html="page.html">{{ page.html }}</div>
      </div>
    </main>
  </div>
</template>

<script>
import { getPage } from '~/api/posts';

export default {
  async asyncData() {
    const page = await getPage('contact');
    return { page };
  },
  head() {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'Contact',
          name: 'Contact',
          content: 'Contact'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.container-fluid {
  background: $nuxt-light-green;
  height: 80vh;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 60%;
  }
}
</style>
