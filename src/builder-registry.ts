import { Builder } from '@builder.io/react';
import MyCustomComponent from '../components/MyCustomComponent';
import ErrorThrowingComponent from '../components/ErrorThrowingComponent';

// Register your custom components
Builder.registerComponent(MyCustomComponent, {
  name: 'My Custom Component',
  inputs: [
    {
      name: 'name',
      type: 'string',
      defaultValue: 'Default Product Name',
      required: true,
    },
  ],
});

Builder.registerComponent(ErrorThrowingComponent, {
  name: 'Error Throwing Component',
  inputs: [
    {
      name: 'message',
      type: 'string',
      defaultValue: 'This component will throw an error',
    },
  ],
}); 