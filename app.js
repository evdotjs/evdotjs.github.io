const projectList = [
  {
          title: 'Google Homepage',
    description: 'a recreation of Google’s homepage using HTML and CSS',
           link: 'https://evdotjs.github.io/my-projects/google-homepage/',
     repository: 'https://github.com/evdotjs/my-projects/tree/gh-pages/google-homepage',
      thumbnail: 'img/google-homepage.png',
            alt: 'google-homepage'
  },
  {
          title: 'Firefox Browser',
    description: 'a recreation of the Mozilla Firefox download page',
           link: 'https://evdotjs.github.io/my-projects/firefox-browser/',
     repository: 'https://github.com/evdotjs/my-projects/tree/gh-pages/firefox-browser',
      thumbnail: 'img/firefox-browser.png',
            alt: 'firefox-browser'
  },
  {
          title: 'Calculator',
    description: 'a simple calculator using HTML, SASS, and Javascript',
           link: 'https://evdotjs.github.io/my-projects/calculator/',
     repository: 'https://github.com/evdotjs/my-projects/tree/gh-pages/calculator',
      thumbnail: 'img/calculator.png',
            alt: 'calculator'
  },
  {
          title: 'To-Do List',
    description: 'a to-do list app using HTML, SASS, and Vue.js',
           link: 'https://evdotjs.github.io/my-projects/todo-list/',
     repository: 'https://github.com/evdotjs/my-projects/tree/gh-pages/todo-list',
      thumbnail: 'img/todo-list-v2.png',
            alt: 'todo-list'
  }
];

new Vue({
  el: 'main',
  data: {
         title: 'My Projects',
      projects: projectList,
  }
});
