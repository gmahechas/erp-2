import { Kafka, logLevel } from 'kafkajs';
import { CountryCreatedProducer, CountryUpdatedProducer, CountryDeletedProducer } from './country.producers'
import { CountryCreatedConsumer, CountryUpdatedConsumer, CountryDeletedConsumer } from './country.consumers';

export const initCountryProducers = async () => {
	const kafka = new Kafka({ clientId: 'ms-3-producer', brokers: ['10.1.0.229:9090'], logLevel: logLevel.NOTHING });
	const createProducer = await new CountryCreatedProducer(kafka).initProducer();
	const updateProducer = await new CountryUpdatedProducer(kafka).initProducer();
	const deleteProducer = await new CountryDeletedProducer(kafka).initProducer();
	//Promise.all([createProducer.initProducer(), updateProducer.initProducer(), deleteProducer.initProducer()]);
	//createProducer.send({id: '1', countryName: 'Spain', countryCode: 'ES'});
	console.log('kafka producers have been initialized');
}

export const initCountryConsumers = async () => {
	const kafka = new Kafka({ clientId: 'ms-3-consumer', brokers: ['10.1.0.229:9090'], logLevel: logLevel.NOTHING });
	const createConsumer = await new CountryCreatedConsumer(kafka).initConsumer();
	const updateConsumer = await new CountryUpdatedConsumer(kafka).initConsumer();
	const deleteConsumer = await new CountryDeletedConsumer(kafka).initConsumer();
	console.log('kafka consumers have been initialized');
}