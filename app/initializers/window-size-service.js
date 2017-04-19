export function initialize(application) {
  application.inject('view', 'windowSizeService', 'ember-computed-size@service:window-size');
}

export default {
  name: 'window-size-service',
  initialize: initialize
};
