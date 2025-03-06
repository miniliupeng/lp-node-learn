import path from 'node:path';
import fs from 'node:fs';
import { executablePath } from './Downloader.mjs';

let browserId = 0;

const pkgJsonPath = path.join(import.meta.dirname, '..', '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
const revision = pkg.puppeteer.chromium_revision;

//用户数据目录
const CHROME_PROFILE_PATH = path.resolve(import.meta.dirname, '..', '..', '.dev_profile');

class Browser {
  constructor(options) {
    options = options || {};

    ++browserId;
    this._userDataDir = CHROME_PROFILE_PATH + browserId;

    this._remoteDebuggingPort = 9229;
    if (typeof options.remoteDebuggingPort === 'number') {
      this._remoteDebuggingPort = options.remoteDebuggingPort;
    }
    this._chromeArguments = [
      `--user-data-dir=${this._userDataDir}`,
      `--remote-debugging-port=${this._remoteDebuggingPort}`
    ];

    if (options.headless) {
      this._chromeArguments.push(`--headless`);
    }

    if (typeof options.executablePath === 'string') {
      this._chromeExecutable = options.executablePath;
    } else {
      const chromiumRevision = revision;
      this._chromeExecutable = executablePath(chromiumRevision);
    }

    if (Array.isArray(options.args)) this._chromeArguments.push(...options.args);

    this._chromeProcess = null;
  }
}

export { Browser };
