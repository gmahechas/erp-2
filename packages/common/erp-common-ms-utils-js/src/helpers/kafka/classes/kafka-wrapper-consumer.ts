import { Kafka, KafkaConfig, Consumer } from 'kafkajs';

export class KafkaWrapperConsumer {
	private _consumer?: Consumer;
	get consumer() {
		if (!this._consumer) {
			throw new Error('Cannot access NATs client before connecting!!!');
		}
		return this._consumer;
	}
	async connect(config: KafkaConfig, groupId: string) {
		const kafka = new Kafka(config);
		this._consumer = kafka.consumer({ groupId });
		this.consumer.on('consumer.connect', () => console.log(`kafka consumer.connect`));
		await this.consumer.connect();
	}
}

export const kafkaWrapperConsumer = new KafkaWrapperConsumer();