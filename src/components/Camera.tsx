import * as React from 'react';

export interface Props {
  stream: MediaStream;
}

const Camera: React.FC<Props> = ({ stream }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const galleryRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.autoplay = true;
    video.srcObject = stream;
  }, [stream]);

  const handleClickCapture = React.useCallback<React.MouseEventHandler>((e) => {
    e.preventDefault();
    const video = videoRef.current;
    const gallery = galleryRef.current;
    if (!video) throw new Error('Expected video element');
    if (!gallery) throw new Error('Expected gallery');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Expected rendering context');
    ctx.drawImage(video, 0, 0);
    const screenshot = new Image(video.videoWidth, video.videoHeight);
    screenshot.src = canvas.toDataURL();
    gallery.appendChild(screenshot);
  }, []);

  return (
    <div className="Camera">
      <video width={300} height={300} ref={videoRef} /><br />
      <button type="button" onClick={handleClickCapture}>Capture</button>
      <div ref={galleryRef} />
    </div>
  );
};

export default Camera;
