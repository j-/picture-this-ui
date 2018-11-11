const video = document.createElement('video');
video.autoplay = true;

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

export const setDimensions = (width: number, height: number) => {
	video.width = width;
	video.height = height;
};

export const getDimensions = () => {
	return {
		width: video.width,
		height: video.height,
	};
};

export const setSource = (src: string) => {
	video.src = src;
};

export const getDataURL = () => {
	const { width, height } = getDimensions();
	canvas.width = width;
	canvas.height = height;
	ctx.drawImage(video, 0, 0, width, height);
	return canvas.toDataURL();
};

export const getVideoElement = () => {
	return video;
};
