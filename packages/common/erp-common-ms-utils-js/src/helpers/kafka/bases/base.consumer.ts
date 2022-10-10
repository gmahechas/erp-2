import {
  Consumer,
  KafkaMessage,
  CompressionCodecs,
  CompressionTypes,
} from 'kafkajs';
const snappy = require('kafkajs-snappy');
CompressionCodecs[CompressionTypes.Snappy] = snappy;

interface Event {
  topic: string;
  value: any;
}

type resolveOffsetType = (offset: string) => void;
type resolveFunctionType = <T extends Event>(
  value: T['value'],
) => Promise<void>;

export abstract class BaseConsumer<T extends Event> {
  protected consumer: Consumer;
  abstract topic: T['topic'];
  abstract onMessage(
    value: T['value'],
    msg: KafkaMessage,
    resolveOffset: resolveOffsetType,
    resolveFunction: resolveFunctionType,
  ): Promise<void>;

  constructor(consumer: Consumer) {
    this.consumer = consumer;
  }

  async run(resolveFunction: resolveFunctionType) {
    await this.consumer.run({
      eachBatchAutoResolve: false,
      eachBatch: async ({ batch, resolveOffset, heartbeat }) => {
        for (let message of batch.messages) {
          const value = this.parseMessage(message);
          await this.onMessage(value, message, resolveOffset, resolveFunction);
          await heartbeat();
        }
      },
    });
  }

  parseMessage(message: KafkaMessage) {
    const data = message.value;
    if (data) {
      return typeof data === 'string'
        ? JSON.parse(data)
        : JSON.parse(data.toString('utf8'));
    } else {
      return null;
    }
  }
}
