import * as React from 'react';
import { useStream } from './Stream';

const CancelOnPageHidden: React.FC = () => {
  const [stream, setStream] = useStream();

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stream?.getTracks().forEach((track) => track.stop());
        setStream(null);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [stream, setStream]);

  return null;
};

export default CancelOnPageHidden;
