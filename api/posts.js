// import the ghost API module
import GhostContentAPI from '@tryghost/content-api';

// create instance of API, pass in creds
const api = new GhostContentAPI({
  url: 'https://ghost-selfstudy.herokuapp.com',
  key: '07681432cabba0f8fa7d35649e',
  version: 'v2'
});

export async function getAdminData() {
  return await api.settings.browse({}).catch((err) => {
    console.log(err);
  });
}

// async to get posts, pass in post options
export async function getPosts() {
  return await api.posts
    .browse({
      filter: "tags: ['blog', 'getting-started']",
      limit: 'all',
      include: 'tags, authors'
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getResources() {
  return await api.posts
    .browse({
      filter: "tags:['resources']",
      limit: 'all',
      include: 'tags, authors'
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getLast3Posts() {
  return await api.posts
    .browse({
      filter: "tags:['blog', 'getting-started']",
      limit: '3',
      include: 'tags, authors'
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getLast3Resources() {
  return await api.posts
    .browse({
      filter: "tags:['resources']",
      limit: '3',
      include: 'tags, authors'
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getPage(pageSlug) {
  return await api.pages
    .read({
      slug: pageSlug
    })
    .catch((err) => {
      console.log(err);
    });
}
