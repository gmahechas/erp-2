import { Kafka, KafkaConfig, Producer } from 'kafkajs';

class KafkaWrapperProducer {
  private _producer?: Producer;
  get producer() {
    if (!this._producer) {
      throw new Error('Cannot access NATs client before connecting!!!');
    }
    return this._producer;
  }
  async connect(config: KafkaConfig) {
    const kafka = new Kafka(config);
    this._producer = kafka.producer({ idempotent: true });
    this.producer.on('producer.connect', () => console.log(`kafka producer.connect`));
    await this.producer.connect();
  }
}

export const kafkaWrapperProducer = new KafkaWrapperProducer();
