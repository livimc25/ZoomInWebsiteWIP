import Application from 'firstemberapplication/app';
import config from 'firstemberapplication/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
