import { logLevel, kafkaWrapperProducer } from '@gmahechas/erp-common-ms-utils-js';

export const initKafkaProducers = async () => {
	await kafkaWrapperProducer.connect({ clientId: 'ms-3-producer', brokers: ['10.1.0.229:9090'], logLevel: logLevel.NOTHING });
}