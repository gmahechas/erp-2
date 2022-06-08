import { ICountry } from '@gmahechas/erp-common-js';
import { CountryTopics } from './country.topics';

export interface CountryCreatedEvent {
	topic: CountryTopics.COUNTRY_CREATE;
	value: Partial<ICountry>;
}

export interface CountryUpdatedEvent {
	topic: CountryTopics.COUNTRY_UPDATED;
	value: Partial<ICountry>;
}

export interface CountryDeletedEvent {
	topic: CountryTopics.COUNTRY_DELETED;
	value: Partial<ICountry>;
}