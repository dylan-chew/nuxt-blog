<template>
  <div class="">
    <main>
      <div class="container">
        <div class="row">
          <div class="home-header col-12">
            <h1>Self Directed Study</h1>
            <p>
              My self directed study site using Nuxt.js and Headless Ghost CMS
            </p>
          </div>
        </div>
        <ThreePostWidget
          header="Recent Blog Posts"
          :recentposts="posts"
          viewmorelink="blog"
        />
        <ThreePostWidget
          header="Recent Resources"
          :recentposts="resources"
          viewmorelink="resources"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { getLast3Posts, getLast3Resources } from '~/api/posts';
import ThreePostWidget from '~/components/ThreePostWidget';

export default {
  components: { ThreePostWidget },
  async asyncData() {
    const posts = await getLast3Posts();
    const resources = await getLast3Resources();
    return { posts, resources };
  }
};
</script>

<style scoped lang="scss">
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
