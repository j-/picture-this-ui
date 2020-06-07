import * as React from 'react';
import StreamProvider from './Stream';
import Camera from './Camera';

export default {
  title: 'Camera',
  component: Camera,
};

export const Default = () => (
  <StreamProvider>
    <Camera />
  </StreamProvider>
);
