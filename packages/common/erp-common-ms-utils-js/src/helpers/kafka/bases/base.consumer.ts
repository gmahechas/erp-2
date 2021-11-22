import { Kafka, Consumer, KafkaMessage, CompressionCodecs, CompressionTypes } from 'kafkajs';
const snappy = require('kafkajs-snappy');
CompressionCodecs[CompressionTypes.Snappy] = snappy;

interface Event {
	topic: string;
	value: any;
}

export abstract class BaseConsumer<T extends Event> {
	private kafka: Kafka;
	private groupId: string;
	private consumer: Consumer;
	abstract topic: T['topic'];
	abstract onMessage(value: T['value'], msg: KafkaMessage, resolveOffset: (offset: string) => void): void;

	constructor(kafka: Kafka, groupId: string) {
		this.kafka = kafka;
		this.groupId = groupId;
		this.consumer = this.kafka.consumer({ groupId: this.groupId });
	}
	
	async init() {
		//this.consumer.on('consumer.connect', () => console.log(`kafka consumer.connect to topic ${this.topic}`));
		await this.consumer.connect();
		await this.consumer.subscribe({ topic: this.topic, fromBeginning: true });
		await this.run();
	}

	async run() {
		await this.consumer.run({
			eachBatchAutoResolve: false,
			eachBatch: async ({ batch, resolveOffset, heartbeat }) => {
				for (let message of batch.messages) {
					const value = this.parseMessage(message);
					this.onMessage(value, message, resolveOffset);
					await heartbeat();
				}
			}
		});
	}

	parseMessage(message: KafkaMessage) {
		const data = message.value;
		if (data) {
			return typeof data === 'string' ? JSON.parse(data) : JSON.parse(data.toString('utf8'))
		} else {
			return null;
		}
	}
}


