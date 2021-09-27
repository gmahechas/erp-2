import * as path from 'path';
import * as fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

export const paths = ({
	appEnvironments: resolveApp('src/environments'),
});