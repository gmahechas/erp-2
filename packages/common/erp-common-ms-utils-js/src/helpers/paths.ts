import * as path from 'path';
import * as fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
export const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);
export const checkExistsFile = (file: string) => fs.existsSync(file);