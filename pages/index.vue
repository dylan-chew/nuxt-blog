<template>
  <div class="">
    <main>
      <div class="container">
        <div class="home-header">
          <div class="row home-header-row">
            <div class="left-header col-6">
              <h1 class="display-1">
                Hello!
              </h1>
              <h2 class="display-4">Welcome to my self-directed study blog.</h2>
            </div>
            <div class="right-header col-6 logobox">
              <img
                class="header-logo"
                :src="adminData.logo"
                alt="Nuxt and Ghost blog"
              />
              <p>
                Here, I will be documenting how I got my blog up and running
                using Nuxt.js and Ghost, along with some other helpful
                resources.
              </p>
            </div>
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
import { getLast3Posts, getLast3Resources, getAdminData } from '~/api/posts';
import ThreePostWidget from '~/components/ThreePostWidget';

export default {
  components: { ThreePostWidget },
  async asyncData() {
    const posts = await getLast3Posts();
    const resources = await getLast3Resources();
    const adminData = await getAdminData();
    return { posts, resources, adminData };
  }
};
</script>

<style scoped lang="scss">
.home-header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .home-header-row {
  }

  .header-logo {
    display: block;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .left-header {
    background: $nuxt-light-green;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .right-header {
    margin-top: 2rem;
    text-align: center;
    p {
      font-size: 1.5rem;
    }
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
