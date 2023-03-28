import { Builder } from '@builder.io/react';
import { Example } from './Example';

Builder.registerComponent(Example, {
  name: 'Example',
  inputs: [
    {
      name: 'link',
      type: 'text',
      defaultValue: 'https://example.com'
    }
  ]
});
