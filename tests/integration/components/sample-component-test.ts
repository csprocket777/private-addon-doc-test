import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sample-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(0)
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // await render(hbs`{{sample-component}}`);

    // assert.equal(this.element.textContent.trim(), '');

    // // Template block usage:
    // await render(hbs`
    //   {{#sample-component}}
    //     template block text
    //   {{/sample-component}}
    // `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
