angular.
module('appCategories').
component('appCategories', {
  // Note: The URL is relative to our `index.html` file
  templateUrl: 'app/app-categories/app-categories.template.html',
  controller: function ImageListController($http) {
            this.list = [{name: 'The avengers', collection: 'the_avengers', url: 'thanos.jpeg', video: 0},
                         {name: 'The cats', collection: 'cats', url: 'cats.jpg', video: 0},
                         {name: 'programmer jokes', collection: 'programmers_jokes', url: 'programmer.jpeg', video: 0},
                         {name: 'gifs', collection: 'vids', url: 'nyan_cat.gif', video: 1},];
        }
});