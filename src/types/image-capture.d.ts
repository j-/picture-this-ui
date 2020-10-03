interface ImageCapture {
  takePhoto(capabilities?: MediaTrackCapabilities): Promise<Blob>;
  grabFrame(): Promise<ImageBitmap>;
}

declare var ImageCapture: {
  prototype: ImageCapture;
  new(mediaStreamTrack: MediaStreamTrack): ImageCapture;
}

declare global {
  interface Window {
    ImageCapture?: ImageCapture;
  }
}
