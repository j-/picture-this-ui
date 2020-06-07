const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

export const captureImageFromVideo = async (video: HTMLVideoElement) => {
  if (!ctx) throw new Error('Expected rendering context');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0);
  const capture = new Image(video.videoWidth, video.videoHeight);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve));
  if (!blob) throw new Error('Failed to create blob');
  capture.src = URL.createObjectURL(blob);
  return capture;
};
