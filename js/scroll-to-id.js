function anchorSetLoadPage() {
  const anchor = window.location.hash.substr(1).replace('#', '');
  if(window.location.hash.substr(1) !== '') {
    const mainSection = document.querySelectorAll('.main > .section');
    const menuActive = document.querySelectorAll('.menu > .menu__nav > .ul > .menu__item');

    function removeFirstActiveSection() {
      mainSection.forEach(function(item) {
        item.classList.remove('is-active')
        item.classList.remove('is-visited')
      });

      menuActive.forEach(function(item) {
        item.classList.remove('is-active')
      });
    }
    if(document.getElementById(anchor) == null) {
      return false;
    } else {
      removeFirstActiveSection();
      document.querySelector('.menu > .menu__nav > .ul > .menu__item[data-id='+ anchor +']').classList.add('is-active');
      document.getElementById(anchor).classList.add('is-active');
      document.getElementById(anchor).classList.add('is-visited');
    }
  } 
  return false;
}
anchorSetLoadPage();