import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  id() { return faker.random.uuid(); },
  name() { return faker.commerce.productName(); },
  price() { return faker.commerce.price(); },
  expirationDate() { return faker.date.future(); },
  quantity() { return faker.random.number(); },
  tags() { return [faker.commerce.productAdjective()]; }
});
