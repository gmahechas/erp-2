import { Kafka } from 'kafkajs';
import { BaseProducer } from '../../../../bases/base.producer';
import { CountryCreatedEvent, CountryUpdatedEvent, CountryDeletedEvent } from './country.event';
import { CountryTopics } from './country.topics';

export class CountryCreatedProducer extends BaseProducer<CountryCreatedEvent> {
	readonly topic = CountryTopics.COUNTRY_CREATE;

	constructor(kafka: Kafka) {
		super(kafka);
	}

	async initProducer() {
		await super.init();
	}
}

export class CountryUpdatedProducer extends BaseProducer<CountryUpdatedEvent> {
	readonly topic = CountryTopics.COUNTRY_UPDATED;

	constructor(kafka: Kafka) {
		super(kafka);
	}

	async initProducer() {
		await super.init();
	}
}

export class CountryDeletedProducer extends BaseProducer<CountryDeletedEvent> {
	readonly topic = CountryTopics.COUNTRY_DELETED;

	constructor(kafka: Kafka) {
		super(kafka);
	}

	async initProducer() {
		await super.init();
	}
}