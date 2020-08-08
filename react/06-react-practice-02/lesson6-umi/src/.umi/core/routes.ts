// @ts-nocheck
import { ApplyPluginsType } from 'D:/myproject/full-stack-note/react/06-react-practice-02/lesson6-umi/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('@/pages/layout/index').default,
    "routes": [
      {
        "path": "/",
        "component": require('@/pages/index').default,
        "exact": true
      },
      {
        "path": "/about",
        "component": require('@/pages/about').default,
        "exact": true
      },
      {
        "path": "/table",
        "component": require('@/pages/table/index').default,
        "exact": true
      },
      {
        "path": "/more",
        "component": require('@/pages/more/index').default,
        "exact": true
      },
      {
        "path": "/product/:id",
        "component": require('@/pages/product/_layout').default,
        "routes": [
          {
            "path": "/product/:id",
            "component": require('@/pages/product/[id]').default,
            "exact": true
          }
        ]
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
