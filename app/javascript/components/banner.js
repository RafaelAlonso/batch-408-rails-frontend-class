import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Learn to code", "Our toppest website"],
    typeSpeed: 30,
    loop: true
  });
}

export { loadDynamicBannerText };
