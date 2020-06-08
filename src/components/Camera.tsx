import * as React from 'react';
import { useStream } from './Stream';
import './Camera.css';

const Camera: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [stream] = useStream();

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.srcObject = stream;
  }, [stream]);

  return (
    <div className="Camera">
      <video className="Camera-video" autoPlay={true} ref={videoRef} />
    </div>
  );
};

export default Camera;
