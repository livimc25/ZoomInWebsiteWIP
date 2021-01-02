import EmberRouter from '@ember/routing/router';
import config from 'firstemberapplication/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('study-groups');
  this.route('sign-in');
});
