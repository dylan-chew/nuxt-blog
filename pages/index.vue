<template>
  <div class="">
    <main>
      <div class="container-fluid">
        <div class="row header-container">
          <div class="container">
            <div class="row">
              <div class="home-header">
                <div class="row">
                  <div class="left-header col-md-6 col-sm-12">
                    <h1 class="display-1">
                      Hello!
                    </h1>
                    <h2 class="display-4">
                      Welcome to my self-directed study blog.
                    </h2>
                  </div>

                  <div class="right-header col-md-6 col-sm-12 logobox">
                    <client-only>
                      <kinesis-container>
                        <kinesis-element type="depth" :strength="20">
                          <img
                            class="header-logo"
                            :src="adminData.logo"
                            alt="Nuxt and Ghost blog"
                          />
                        </kinesis-element>
                      </kinesis-container>
                    </client-only>
                    <p>
                      Here, I will be documenting how I got my blog up and
                      running using Nuxt.js and Ghost, along with some other
                      helpful resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="intro-container col-12">
            <div class="container">
              <div class="what-is-container">
                <div class="row what-nuxt-row">
                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <h3>What is Nuxt.js?</h3>
                    <p>
                      Nuxt is a framework for creating universal Vue apps. It
                      can be used to speed up development times and can help you
                      build server-rendered applications. Nuxt can also be used
                      as a static site generator. What makes Nuxt such a great
                      framework is how it abstracts most of the complex
                      configurations involved in creating an app such as
                      asynchronus data, middleware, and routing.
                    </p>
                    <a href="https://nuxtjs.org/" target="_blank"
                      ><div class="btn">Official Docs</div>
                    </a>
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12 what-is-image">
                    <client-only>
                      <kinesis-container>
                        <kinesis-element type="depth" :strength="20">
                          <img
                            src="~/assets/images/nuxt.png"
                            alt="Nuxt Universal Vue.js Applications"
                            class="img-fluid"
                          />
                        </kinesis-element>
                      </kinesis-container>
                    </client-only>
                  </div>
                </div>
                <div class="row what-ghost-row">
                  <div class="col-lg-6 col-md-12 col-sm-12 what-is-image">
                    <client-only>
                      <kinesis-container>
                        <kinesis-element type="depth" :strength="20">
                          <img
                            src="~/assets/images/ghost.jpg"
                            alt=""
                            class="img-fluid"
                          />
                        </kinesis-element>
                      </kinesis-container>
                    </client-only>
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <h3>What is Ghost?</h3>
                    <p>
                      Ghost is an open source blogging platform/content
                      management system (CMS). Since it is open source, the
                      source code can be downloaded and run on a user's server
                      or the user can pay for premium features offered by Ghost
                      and get them to do the hosting. The platform runs using
                      Node.js and comes with a headless API which allows a
                      developer to customize the front end while pulling content
                      from the API. Customers of Ghost include: CodeAcademy,
                      Tinder, Digital Ocean, Cloudflare, and many more.
                    </p>
                    <a href="https://ghost.org/" target="_blank"
                      ><div class="btn">Learn More</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row widget-row">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <ThreePostWidget
                  header="Recent Blog Posts"
                  :recentposts="posts"
                  viewmorelink="blog"
                />
              </div>
              <div class="col-12">
                <ThreePostWidget
                  header="Recent Resources"
                  :recentposts="resources"
                  viewmorelink="resources"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import { getLast3Posts, getLast3Resources, getAdminData } from '~/api/posts';
import ThreePostWidget from '~/components/ThreePostWidget';

export default {
  components: { ThreePostWidget, KinesisContainer, KinesisElement },
  async asyncData() {
    const posts = await getLast3Posts();
    const resources = await getLast3Resources();
    const adminData = await getAdminData();
    return { posts, resources, adminData };
  },
  head() {
    return {
      title: 'My Nuxt Blog - Front Page',
      meta: [
        {
          hid: 'Nuxt Blog Front Page',
          name: 'Nuxt Blog Front Page',
          content: 'Nuxt Blog Front Page'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.header-container {
  background: $nuxt-light-green;
}

.home-header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .header-logo {
    display: block;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .left-header {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .right-header {
    border-radius: 2rem;
    background: white;
    margin-top: 2rem;
    text-align: center;
    p {
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 414px) {
      display: none;
    }
  }

  @media only screen and (max-width: 414px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}

.intro-container {
  background: white;
  margin-bottom: 3rem;

  .what-is-container {
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .what-nuxt-row {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .what-ghost-row {
    margin-top: 5rem;
  }

  .btn {
    background: $nuxt-light-green;
    color: white;
    &:hover {
      background: $nuxt-dark-green;
    }
  }
}

.widget-row {
  background: $nuxt-light-green;
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
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

.links {
  padding-top: 15px;
}

.what-is-image {
  display: none;
  @media only screen and (min-width: 992px) {
    display: block;
  }
}
</style>
