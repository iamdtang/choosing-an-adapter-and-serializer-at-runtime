import Store from '@ember-data/store';
import { inject as service } from '@ember/service';

export default class StoreService extends Store {
  @service settings;

  adapterFor() {
    if (this.settings.useJsonApi) {
      return super.adapterFor('json-api');
    }

    return super.adapterFor(...arguments);
  }

  serializerFor() {
    if (this.settings.useJsonApi) {
      return super.serializerFor('json-api');
    }

    return super.serializerFor(...arguments);
  }
}
