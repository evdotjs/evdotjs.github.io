const projectList = [
  {
          title: 'Google Homepage',
           link: 'https://evdotjs.github.io/my-projects/google-homepage/',
     repository: 'https://github.com/evdotjs/my-projects/tree/gh-pages/google-homepage',
      thumbnail: 'img/google-homepage.png',
            alt: 'google-homepage',
    description: 'a recreation of Google’s homepage using HTML and CSS'
  },
  {
          title: 'Firefox Browser',
           link: 'https://evdotjs.github.io/my-projects/firefox-browser/',
     repository: 'https://github.com/evdotjs/my-projects/tree/gh-pages/firefox-browser',
      thumbnail: 'img/firefox-browser.png',
            alt: 'firefox-browser',
    description: 'a recreation of the Mozilla Firefox download page'
  },
  {
          title: 'Calculator',
           link: 'https://evdotjs.github.io/my-projects/calculator/',
     repository: 'https://github.com/evdotjs/my-projects/tree/gh-pages/calculator',
      thumbnail: 'img/calculator.png',
            alt: 'calculator',
    description: 'a simple calculator using HTML, SASS, and Javascript'
  },
  {
          title: 'To-Do List',
           link: 'https://evdotjs.github.io/my-projects/todo-list/',
     repository: 'https://github.com/evdotjs/my-projects/tree/gh-pages/todo-list',
      thumbnail: 'img/todo-list.png',
            alt: 'todo-list',
    description: 'a to-do list app using HTML, SASS, and Javascript'
  }
];

new Vue({
  el: 'main',
  data: {
         title: 'My Projects',
      projects: projectList,
  }
});
