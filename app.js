const logo = document.querySelector('.logo-2');

window.onscroll = () => {
    if (
      document.body.scrollTop >= 80 ||
      document.documentElement.scrollTop >= 80
    ) {
      logo.classList.add('scrolled')
    } else {
      logo.classList.remove('scrolled')
    }
  }