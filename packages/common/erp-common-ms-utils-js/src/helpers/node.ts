import * as path from 'path';
import * as fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
export const resolvePath = (relativePath: string) =>
  path.resolve(appDirectory, relativePath);
export const checkExistsFile = (filePath: string) => fs.existsSync(filePath);
export const readFileSync = (filePath: string) => fs.readFileSync(filePath);
