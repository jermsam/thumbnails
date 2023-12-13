const assert = require('assert');
const app = require('../../src/app');

describe('\'thumbnails\' service', () => {
  it('registered the service', () => {
    const service = app.service('thumbnails');

    assert.ok(service, 'Registered the service');
  });
});
