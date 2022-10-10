import {
  generalHandlerError,
  initEnv,
  initWinston,
  env,
  sendError,
  TypeErrorMessage,
} from '@gmahechas/erp-common-ms-utils-js';
import { connectDatabases } from '@gmahechas/erp-common-ms-1-js';
import { app } from './app';

const start = async () => {
  try {
    await initEnv();
    await connectDatabases();
    const { name, port } = env['ms-1']!.app!;
    await initWinston({ serviceName: name!, transports: ['dailyRotateFile'] });
    if (!name || !port) {
      sendError(TypeErrorMessage.CONFIG);
    }
    app.listen(port, () => {
      console.log(`environment: ${env.environment}`);
      console.log(`${name} is runnig on: http://localhost:${port}`);
    });
  } catch (error) {
    generalHandlerError(error);
  }
};

start();
