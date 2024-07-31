import { Kafka, KafkaConfig, Consumer } from 'kafkajs';

export class KafkaWrapperConsumer {
  private _consumer?: Consumer;
  get consumer() {
    if (!this._consumer) {
      throw new Error('Cannot access NATs client before connecting!!!');
    }
    return this._consumer;
  }
  async connect(config: KafkaConfig, groupId: string, topic: string | RegExp) {
    const kafka = new Kafka(config);
    this._consumer = kafka.consumer({ groupId });
    await this.consumer.connect();
    this.consumer.on('consumer.connect', () => console.log(`kafka consumer.connect`));
    await this.consumer.subscribe({ topic, fromBeginning: true });
  }
}

export const kafkaWrapperConsumer = new KafkaWrapperConsumer();
