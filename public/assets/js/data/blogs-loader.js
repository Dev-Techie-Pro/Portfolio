"use strict";

(function () {
  const Portfolio = window.Portfolio || {};
  window.Portfolio = Portfolio;

  Portfolio.BLOGS = Portfolio.BLOGS || {};
  Portfolio.BLOG_ORDER = Portfolio.BLOG_ORDER || [];
  Portfolio.BLOG_GALLERY_ORDER = Portfolio.BLOG_GALLERY_ORDER || [];

  let catalogPromise = null;

  function applyCatalog(catalog) {
    const posts = catalog.posts || [];
    const blogs = {};
    posts.forEach((post) => {
      if (post && post.id) blogs[post.id] = post;
    });
    Portfolio.BLOGS = blogs;
    Portfolio.BLOG_ORDER = catalog.order || Object.keys(blogs);
    Portfolio.BLOG_GALLERY_ORDER =
      catalog.galleryOrder || Portfolio.BLOG_ORDER.slice();
    Portfolio.__blogCatalogLoaded = true;
  }

  Portfolio.ensureBlogCatalog = function ensureBlogCatalog() {
    if (Portfolio.__blogCatalogLoaded) {
      return Promise.resolve(Portfolio.BLOGS);
    }
    if (!catalogPromise) {
      catalogPromise = fetch("/api/blogs", { credentials: "same-origin" })
        .then((res) => res.json().then((data) => ({ res, data })))
        .then(({ res, data }) => {
          if (!res.ok) {
            throw new Error(data.error || "Failed to load blogs");
          }
          applyCatalog(data);
          return Portfolio.BLOGS;
        })
        .catch((err) => {
          catalogPromise = null;
          console.error("[blogs-loader]", err);
          throw err;
        });
    }
    return catalogPromise;
  };

  Portfolio.resetBlogCatalog = function resetBlogCatalog() {
    Portfolio.__blogCatalogLoaded = false;
    catalogPromise = null;
    Portfolio.BLOGS = {};
    Portfolio.BLOG_ORDER = [];
    Portfolio.BLOG_GALLERY_ORDER = [];
  };
})();
