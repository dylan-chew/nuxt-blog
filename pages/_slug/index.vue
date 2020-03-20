<template>
  <div class="container">
    <main>
      <h1>{{ post.title }}</h1>
      <img :src="post.feature_image" alt="an image" />
      <div class="content">
        <div v-html="post.html">{{ post.html }}</div>
      </div>
    </main>
  </div>
</template>

<script>
import { getSinglePost } from '~/api/posts';

export default {
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug);
    return { post };
  }
};
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    text-align: center;
  }

  p {
    text-align: left;
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
