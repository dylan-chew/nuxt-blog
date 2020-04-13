<template>
  <main>
    <div class="container-fluid full-page">
      <div class="container post-container">
        <div class="row">
          <div class="col-12 header-container">
            <h1>{{ post.title }}</h1>
          </div>
          <div class="col-12 image-container">
            <img
              :src="post.feature_image"
              alt="an image"
              :class="'vertical-image'"
            />
          </div>
          <div class="content col-12">
            <!-- eslint-disable-next-line  -->
            <div v-html="post.html">{{ post.html }}</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { getSinglePost } from '~/api/posts';
import Prism from '~/plugins/prism';

export default {
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug);
    return { post };
  },
  mounted() {
    Prism.highlightAll();
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: this.post.title,
          name: this.post.title,
          content: this.post.title
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.full-page {
  background: $nuxt-light-green;
}

img {
  max-width: 60vw;
}

.post-container {
  margin-top: 3rem;
  padding-top: 3rem;
  text-align: center;
  .content {
    text-align: left;
  }
}

@media only screen and (min-width: 992px) {
  .post-container {
    margin-top: 3rem;
    padding-top: 3rem;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;

    .header-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
      h1 {
        margin-left: auto;
        margin-right: auto;
      }
    }

    .image-container {
      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }

      .horizontal-image {
        width: 50%;
      }

      .vertical-image {
        max-height: 20rem;
        width: auto;
        height: auto;
      }
    }

    .content {
      margin-top: 2rem;
      margin-bottom: 2rem;
      padding: 0 5rem;
    }

    .kg-image {
      width: 60%;
    }
  }
}
</style>
