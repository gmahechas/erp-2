import { Producer } from 'kafkajs';
import { BaseProducer } from '../../../../bases/base.producer';
import { CountryTopics } from './country.topics';
import { CountryCreatedEvent, CountryUpdatedEvent, CountryDeletedEvent } from './country.events';

export class CountryCreatedProducer extends BaseProducer<CountryCreatedEvent> {
  readonly topic = CountryTopics.COUNTRY_CREATE;
  constructor(producer: Producer) {
    super(producer);
  }
}

export class CountryUpdatedProducer extends BaseProducer<CountryUpdatedEvent> {
  readonly topic = CountryTopics.COUNTRY_UPDATED;
  constructor(producer: Producer) {
    super(producer);
  }
}

export class CountryDeletedProducer extends BaseProducer<CountryDeletedEvent> {
  readonly topic = CountryTopics.COUNTRY_DELETED;
  constructor(producer: Producer) {
    super(producer);
  }
}
