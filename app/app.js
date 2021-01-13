import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'firstemberapplication/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
  
//   actions: {
//   zoomIn() {
//       var myImg = document.getElementById("bgimage")
//       var currWidth = myImg.clientWidth;
//       myImg.style.width = (currWidth + 100) + "px";
 // }
}

loadInitializers(App, config.modulePrefix);
