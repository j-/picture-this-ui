const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

export const captureImageFromVideo = async (video: HTMLVideoElement) => {
  if (!ctx) throw new Error('Expected rendering context');
  const size = Math.min(video.videoWidth, video.videoHeight);
  canvas.width = size;
  canvas.height = size;
  const sx = (video.videoWidth - size) / 2;
  const sy = (video.videoHeight - size) / 2;
  const sw = size;
  const sh = size;
  const dx = 0;
  const dy = 0;
  const dw = size;
  const dh = size;
  ctx.drawImage(video, sx, sy, sw, sh, dx, dy, dw, dh);
  const capture = new Image(size, size);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve));
  if (!blob) throw new Error('Failed to create blob');
  capture.src = URL.createObjectURL(blob);
  return capture;
};
