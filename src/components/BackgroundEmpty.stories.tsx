import * as React from 'react';
import BackgroundEmpty from './BackgroundEmpty';

export default {
  title: 'BackgroundEmpty',
  component: BackgroundEmpty,
};

export const Size200Px = () => (
  <BackgroundEmpty style={{ width: 200, height: 200 }} />
);

export const Size100Percent = () => (
  <BackgroundEmpty style={{ width: '100%', height: '100%' }} />
);

export const SizeIrregular = () => (
  <BackgroundEmpty style={{ width: 500, height: 100 }} />
);
