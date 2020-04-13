<template>
  <div class="widget-container">
    <h2 class="display-4">{{ header }}</h2>
    <div class="row">
      <div class="recent-posts-container col-12">
        <div class="row">
          <div
            v-for="(post, index) in recentposts"
            :key="index"
            class="recent-post-card col-4 mx-auto"
          >
            <h4>
              <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
            </h4>
            <div class="image-container">
              <nuxt-link :to="{ path: post.slug }">
                <img :src="post.feature_image" alt="an image" />
              </nuxt-link>
            </div>

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
  name: 'ThreePostWidget',
  props: { recentposts: Array, header: String, viewmorelink: String }
};
</script>

<style scoped lang="scss">
.widget-container {
  padding-top: 4rem;
  padding-bottom: 4rem;
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
  .image-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 20vh;
    height: 20vh;
    overflow: hidden;

    @media only screen and (min-width: 992px) {
      width: 25vh;
      height: 25vh;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      &:hover {
        -webkit-filter: brightness(110%);
      }
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
    margin-left: 80%;
    float: right;
    margin-bottom: 1.5rem;
    background: $nuxt-light-green;
    a {
      color: white;
      text-decoration: none;
    }

    &:hover {
      background: $nuxt-dark-green;
    }

    @media only screen and (min-width: 992px) {
      margin-left: 85%;
    }
  }
}
</style>
