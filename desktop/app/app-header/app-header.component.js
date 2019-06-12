angular.
module('appHeader').
component('appHeader', {
  // Note: The URL is relative to our `index.html` file
  templateUrl: 'app/app-header/app-header.template.html',
  controller: function ImageListController($http) {
            this.list = [{name: 'Main', url: 'index.html'},
                         {name: 'Memes', url: 'dynamic.html'},
                         {name: 'Upload', url: 'upload.html'},
                         {name: 'About', url: 'about.html'},];
        }
});