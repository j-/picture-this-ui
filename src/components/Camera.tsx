import * as React from 'react';

export interface Props {
  stream: MediaStream;
}

const Camera: React.FC<Props> = ({ stream }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
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
