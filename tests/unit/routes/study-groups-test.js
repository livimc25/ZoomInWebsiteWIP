import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | study-groups', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:study-groups');
    assert.ok(route);
  });
});
