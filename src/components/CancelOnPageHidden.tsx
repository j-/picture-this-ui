import * as React from 'react';
import { useStream } from './Stream';

const CancelOnPageHidden: React.FC = () => {
  const [stream] = useStream();

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stream?.getTracks().forEach((track) => track.stop());
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [stream]);

  return null;
};

export default CancelOnPageHidden;
