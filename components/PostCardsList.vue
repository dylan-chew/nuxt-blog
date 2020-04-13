<template>
  <ul class="post-list">
    <li v-for="(post, index) in currentposts" :key="index">
      <div class="row post-container">
        <div v-if="!(index % 2 == 0)" class="col-4">
          <div class="image-container">
            <img :src="post.feature_image" alt="an image" class="img-fluid" />
          </div>
        </div>
        <div class="col-md-8  col-sm-12 content-container">
          <div class="content">
            <h2>
              <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
            </h2>
            <div v-if="screenSize < 768">
              <div class="mobile-image-container">
                <img
                  :src="post.feature_image"
                  alt="an image"
                  class="img-fluid"
                />
              </div>
            </div>
            <p>{{ post.excerpt }}</p>
          </div>
        </div>
        <div v-if="index % 2 == 0" class="col-md-4">
          <div class="image-container">
            <img :src="post.feature_image" alt="an image" class="img-fluid" />
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PostCardsList',
  props: { currentposts: Array },
  data() {
    return {
      screenSize: 0
    };
  },
  mounted() {
    this.screenSize = window.innerWidth;
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.screenSize = window.innerWidth;
    }
  }
};
</script>

<style scoped lang="scss">
.post-list {
  padding: 0;
  margin: 0 1rem 0 1rem;
}

li {
  list-style: none;
}

.post-container {
  background: white;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 3rem;
  border-radius: 2rem;

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .image-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    display: none;

    @media only screen and (min-width: 768px) {
      width: 20vh;
      height: 20vh;
      display: block;
    }

    @media only screen and (min-width: 1260px) {
      width: 25vh;
      height: 25vh;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
