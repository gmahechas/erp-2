import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'common-webcomponents',
  outputTargets: [
    react({
      componentCorePackage: '@gmahechas/common-webcomponents',
      proxiesFile: '../common-webcomponents-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  globalStyle: 'src/global/app.css',
  plugins: [
    sass({
      includePaths: ['./node_modules/']
    })
  ],
};
