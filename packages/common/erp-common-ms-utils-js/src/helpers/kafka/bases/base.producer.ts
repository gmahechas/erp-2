import { Kafka, Producer, CompressionCodecs, CompressionTypes } from 'kafkajs';
const snappy = require('kafkajs-snappy');
CompressionCodecs[CompressionTypes.Snappy] = snappy;

interface Event {
  topic: string;
  value: any;
}

export abstract class BaseProducer<T extends Event> {
  protected producer: Producer;
  abstract topic: T['topic'];

  constructor(producer: Producer) {
    this.producer = producer;
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
