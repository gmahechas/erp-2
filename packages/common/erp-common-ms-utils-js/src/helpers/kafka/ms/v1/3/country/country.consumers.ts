import { Kafka, KafkaMessage } from 'kafkajs';
import { BaseConsumer } from '../../../../bases/base.consumer';
import { CountryCreatedEvent, CountryUpdatedEvent, CountryDeletedEvent } from './country.event';
import { CountryTopics } from './country.topics';

export class CountryCreatedConsumer extends BaseConsumer<CountryCreatedEvent> {
	readonly topic = CountryTopics.COUNTRY_CREATE;

	constructor(kafka: Kafka) {
		super(kafka, CountryTopics.COUNTRY_CREATE);
	}

	async initConsumer() {
		await super.init();
	}

	onMessage(value: CountryCreatedEvent['value'], message: KafkaMessage, resolveOffset: (offset: string) => void) {
		console.log('CountryCreatedListener.onMessage', value);
		resolveOffset(message.offset);
	}
}

export class CountryUpdatedConsumer extends BaseConsumer<CountryUpdatedEvent> {
	readonly topic = CountryTopics.COUNTRY_UPDATED;

	constructor(kafka: Kafka) {
		super(kafka, CountryTopics.COUNTRY_UPDATED);
	}

	async initConsumer() {
		await super.init();
	}

	onMessage(value: CountryUpdatedEvent['value'], message: KafkaMessage, resolveOffset: (offset: string) => void) {
		console.log('CountryUpdatedConsumer.onMessage', value);
		resolveOffset(message.offset);
	}
}

export class CountryDeletedConsumer extends BaseConsumer<CountryDeletedEvent> {
	readonly topic = CountryTopics.COUNTRY_DELETED;

	constructor(kafka: Kafka) {
		super(kafka, CountryTopics.COUNTRY_DELETED);
	}

	async initConsumer() {
		await super.init();
	}

	onMessage(value: CountryUpdatedEvent['value'], message: KafkaMessage, resolveOffset: (offset: string) => void) {
		console.log('CountryUpdatedConsumer.onMessage', value);
		resolveOffset(message.offset);
	}
}
