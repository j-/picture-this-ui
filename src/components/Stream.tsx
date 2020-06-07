import * as React from 'react';

export type StreamType = MediaStream | null
export type VideoType = HTMLVideoElement | null
export type SetStreamType = (stream: MediaStream) => void

export interface StreamContextType {
  stream: StreamType;
  video: VideoType;
  setStream: SetStreamType;
}

export const StreamContext = React.createContext<StreamContextType>({
  stream: null,
  video: null,
  setStream() {},
});

export interface Props {
  stream?: MediaStream;
}

export const StreamProvider: React.FC<Props> = ({ stream: streamProp, children }) => {
  const [stream, setStreamState] = React.useState<StreamType>(streamProp || null);
  const video = React.useRef<HTMLVideoElement>(document.createElement('video'));
  const setStream = React.useCallback<SetStreamType>((stream) => setStreamState(stream), []);

  React.useEffect(() => {
    video.current.autoplay = true;
    video.current.srcObject = stream;
  }, [stream]);

  return (
    <StreamContext.Provider value={{ stream, video: video.current, setStream }}>
      {children}
    </StreamContext.Provider>
  );
};

export default StreamProvider;

export const useStream = (): [StreamType, SetStreamType] => {
  const context = React.useContext(StreamContext);
  return [context.stream, context.setStream];
};

export const useVideo = (): VideoType => {
  const context = React.useContext(StreamContext);
  return context.video;
};

export const useCapture = () => {
  const video = useVideo();
  return async () => {
    if (!video) throw new Error('Expected video');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Expected rendering context');
    ctx.drawImage(video, 0, 0);
    const capture = new Image(video.videoWidth, video.videoHeight);
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve));
    if (!blob) throw new Error('Failed to create blob');
    const url = URL.createObjectURL(blob);
    capture.src = url;
    return capture;
  };
};
