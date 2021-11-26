import { Consumer, KafkaMessage } from 'kafkajs';
import { BaseConsumer } from '../../../../bases/base.consumer';
import { CountryTopics } from './country.topics';
import {
	CountryCreatedEvent,
	CountryUpdatedEvent,
	CountryDeletedEvent
} from './country.events';

export class CountryCreatedConsumer extends BaseConsumer<CountryCreatedEvent> {
	readonly topic = CountryTopics.COUNTRY_CREATE;
	constructor(consumer: Consumer) {
		super(consumer);
	}
	onMessage(value: CountryCreatedEvent['value'], message: KafkaMessage, resolveOffset: (offset: string) => void) {
		console.log('CountryCreatedListener.onMessage', value);
		resolveOffset(message.offset);
	}
}

export class CountryUpdatedConsumer extends BaseConsumer<CountryUpdatedEvent> {
	readonly topic = CountryTopics.COUNTRY_UPDATED;
	constructor(consumer: Consumer) {
		super(consumer);
	}
	onMessage(value: CountryUpdatedEvent['value'], message: KafkaMessage, resolveOffset: (offset: string) => void) {
		console.log('CountryUpdatedConsumer.onMessage', value);
		resolveOffset(message.offset);
	}
}

export class CountryDeletedConsumer extends BaseConsumer<CountryDeletedEvent> {
	readonly topic = CountryTopics.COUNTRY_DELETED;
	constructor(consumer: Consumer) {
		super(consumer);
	}
	onMessage(value: CountryUpdatedEvent['value'], message: KafkaMessage, resolveOffset: (offset: string) => void) {
		console.log('CountryUpdatedConsumer.onMessage', value);
		resolveOffset(message.offset);
	}
}
