<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>
          <nuxt-link to="/">Nuxt Blog</nuxt-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <nuxt-link to="/">Home</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/blog">Blog</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/resources">Resources</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/contact">Contact</nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <nuxt />
    <div class="footer">
      <div>Nuxt Blog - Copyright 2020</div>
    </div>
  </div>
</template>

<style lang="scss">
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background: rgb(255, 255, 255);
}

a {
  color: white;
}

a:hover {
  color: $nuxt-light-green;
  text-decoration: none;
}

.footer {
  background: $dark;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  color: white;
}
</style>
