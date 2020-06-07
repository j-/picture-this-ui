import * as React from 'react';

export type StreamType = MediaStream | null
export type SetStreamType = (stream: MediaStream) => void

export interface StreamContextType {
  stream: StreamType;
  setStream: SetStreamType;
}

export const StreamContext = React.createContext<StreamContextType>({
  stream: null,
  setStream() {},
});

export interface Props {
  stream?: MediaStream;
}

export const StreamProvider: React.FC<Props> = ({ stream: streamProp, children }) => {
  const [stream, setStreamState] = React.useState<StreamType>(streamProp || null);
  const setStream = React.useCallback<SetStreamType>((stream) => setStreamState(stream), []);
  return (
    <StreamContext.Provider value={{ stream, setStream }}>
      {children}
    </StreamContext.Provider>
  );
};

export default StreamProvider;

export const useStream = (): [StreamType, SetStreamType] => {
  const context = React.useContext(StreamContext);
  return [context.stream, context.setStream];
};
