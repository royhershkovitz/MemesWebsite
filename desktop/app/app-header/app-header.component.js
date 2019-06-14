function extractTitle(input){
  var out = input.substr(input.lastIndexOf("/")+1);
  if(out.indexOf("?") >= 0)
    out = out.substr(0, input.indexOf("?"));
  return out;
}

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
      var html = extractTitle(window.location.href);
      this.title = html.substr(0, html.indexOf("."));
      if(html === ''){
        this.title = 'main';        
        html = 'index.html';
      }      
      if(this.title === 'index')
        this.title = 'main';
      if(this.title === 'categories')
        html = 'index.html';
      this.list.forEach((element)=>{
        if(element.url === html){
          element['style'] = 'background: orange;'
        }
      })
    }
});