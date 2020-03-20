<template>
  <div class="widget-container">
    <h2 class="display-4">{{ header }}</h2>
    <div class="row">
      <div class="recent-posts-container col-12">
        <div class="row">
          <div
            class="recent-post-card col-4 mx-auto"
            v-for="(post, index) in recentposts"
            :key="index"
          >
            <h4>
              <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
            </h4>
            <nuxt-link :to="{ path: post.slug }"
              ><img :src="post.feature_image" alt="an image"
            /></nuxt-link>

            <div class="content">
              <p>{{ post.excerpt }}</p>
            </div>
          </div>
          <div class="btn">
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
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.recent-posts-container {
  padding-top: 1.5rem;
  background: $nuxt-blue;
  border-radius: 2rem;

  h2 {
    color: white;
    font-weight: 500;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  a {
    color: white;
    text-decoration: underline;
    &:hover {
      color: $nuxt-light-green;
    }
  }
  img {
    width: 80%;
    &:hover {
      -webkit-filter: brightness(110%);
    }
  }
  .recent-post-card {
    display: block;
    justify-content: center;
    align-content: center;
    text-align: center;

    p {
      color: white;
    }
  }

  .btn {
    margin-left: 85%;
    float: right;
    margin-bottom: 1.5rem;
    background: $nuxt-light-green;
    a {
      color: white;
    }

    &:hover {
      background: $nuxt-dark-green;
    }
  }
}
</style>
