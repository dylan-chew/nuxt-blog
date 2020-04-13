<template>
  <main>
    <div class="container blog-container">
      <div class="row">
        <div class="col-12">
          <h1 class="display-3">Latest Posts</h1>
          <PostCardsList :currentposts="pagePosts" />
        </div>
        <Pagination
          :pagenumber="pageNumber"
          :totalpages="totalPages"
          @increasePageNumber="increasePageNumber"
          @decreasePageNumber="decreasePageNumber"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { getPosts } from '~/api/posts';
import PostCardsList from '~/components/PostCardsList';
import Pagination from '~/components/Pagination';

export default {
  components: { PostCardsList, Pagination },
  async asyncData() {
    const posts = await getPosts();
    return { posts };
  },
  data() {
    return { pageNumber: 1 };
  },

  computed: {
    pagePosts() {
      return this.posts.slice((this.pageNumber - 1) * 3, this.pageNumber * 3);
    },
    totalPages() {
      return Math.ceil(this.posts.length / 3);
    }
  },
  methods: {
    increasePageNumber() {
      window.scrollTo(0, 0);
      return (this.pageNumber += 1);
    },
    decreasePageNumber() {
      window.scrollTo(0, 0);
      return (this.pageNumber -= 1);
    }
  },
  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'Nuxt Blogs',
          name: 'Nuxt Blog',
          content: 'Nuxt Blog'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
main {
  background: $nuxt-light-green;
  min-height: 90vh;
  margin-top: 3rem;
}

.blog-container {
  padding-top: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
