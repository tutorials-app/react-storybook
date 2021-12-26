import { configure } from '@storybook/react';
import '../src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

configure(require.context('../src/components', true, /\.stories\.js$/), module);