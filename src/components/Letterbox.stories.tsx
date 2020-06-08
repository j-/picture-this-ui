import * as React from 'react';
import Letterbox from './Letterbox';

export default {
  title: 'Letterbox',
  component: Letterbox,
};

export const Size100Percent = () => (
  <Letterbox style={{ width: '100%', height: '100%' }} />
);
