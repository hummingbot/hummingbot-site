let glide1 = new Glide('.glide1', {
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

glide1.mount();

let glide2 = new Glide('.glide2', {
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

glide2.mount();

window.onpageshow = function(event) {
  if (event.persisted) {
    if (glide1) {
      glide1.destroy();
    }
    glide1 = new Glide('.glide1', {
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
    glide1.mount();
  }
};


window.onpageshow = function(event) {
  if (event.persisted) {
    if (glide2) {
      glide2.destroy();
    }
    glide2 = new Glide('.glide2', {
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
    glide2.mount();
  }
};
