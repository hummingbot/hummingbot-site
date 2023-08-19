const glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  peek: {
    before: -25,
    after: 25
  },
  // gap: 10,
  breakpoints: {
    800: {
      perView: 1
    }
  }
});

glide.mount();
