const glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  peek: {
    before: -20,
    after: 20
  },
  breakpoints: {
    800: {
      perView: 1
    }
  }
});

glide.mount();
