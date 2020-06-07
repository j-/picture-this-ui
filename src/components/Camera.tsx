import * as React from 'react';
import { useStream } from './Stream';

const Camera: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [stream] = useStream();

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || !stream) return;
    video.autoplay = true;
    video.srcObject = stream;
  }, [stream]);

  return (
    <div className="Camera">
      <video width={300} height={300} ref={videoRef} />
    </div>
  );
};

export default Camera;
