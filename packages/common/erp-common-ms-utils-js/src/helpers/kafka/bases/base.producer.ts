import { Kafka, Producer, CompressionCodecs, CompressionTypes } from 'kafkajs';
const snappy = require('kafkajs-snappy');
CompressionCodecs[CompressionTypes.Snappy] = snappy;

interface Event {
	topic: string;
	value: any;
}

export abstract class BaseProducer<T extends Event> {
	private kafka: Kafka;
	private producer: Producer;
	abstract topic: T['topic'];

	constructor(kafka: Kafka) {
		this.kafka = kafka;
		this.producer = this.kafka.producer({ idempotent: true });
	}

	async init() {
		//this.producer.on('producer.connect', () => console.log(`kafka producer.connect to topic ${this.topic}`));
		await this.producer.connect();
	}

	async send(value: T['value']) {
		return await this.producer.send({
			topic: this.topic,
			acks: -1,
			compression: 2,
			messages: [{ value: JSON.stringify(value) }],
		});
	}
}