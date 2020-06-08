import * as React from 'react';
import Masking from './Masking';

export default {
  title: 'Masking',
  component: Masking,
};

export const Size100Percent = () => (
  <Masking style={{ width: '100%', height: '100%' }} />
);
