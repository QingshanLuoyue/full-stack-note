// @ts-nocheck
import { Plugin } from 'D:/myproject/full-stack-note/react/06-react-practice-02/lesson6-umi/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['modifyClientRenderOpts','patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});
plugin.register({
  apply: require('D:/myproject/full-stack-note/react/06-react-practice-02/lesson6-umi/src/.umi/plugin-dva/runtime.tsx'),
  path: 'D:/myproject/full-stack-note/react/06-react-practice-02/lesson6-umi/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
