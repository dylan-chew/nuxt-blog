<template>
  <div class="widget-container">
    <div class="row">
      <div class="recent-posts-container col-12">
        <h2>{{ header }}</h2>
        <div class="row">
          <div
            class="recent-post-card col-4 mx-auto"
            v-for="(post, index) in recentposts"
            :key="index"
          >
            <h3>
              <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
            </h3>
            <img :src="post.feature_image" alt="an image" />
            <div class="content">
              <p>{{ post.excerpt }}</p>
            </div>
          </div>
          <div class="btn btn-success">
            <nuxt-link :to="viewmorelink">View More</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recentposts', 'header', 'viewmorelink'],
  name: 'ThreePostWidget'
};
</script>

<style scoped lang="scss">
.widget-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.recent-posts-container {
  background: rgb(150, 150, 150);
  a {
    color: white;
    &:hover {
      color: rgb(199, 199, 199);
    }
  }
  img {
    width: 80%;
  }
  .recent-post-card {
    display: block;
    justify-content: center;
    align-content: center;
    text-align: center;
  }

  .btn {
    margin-left: 80%;
    float: right;
  }
}
</style>
