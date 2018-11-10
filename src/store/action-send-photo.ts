import { ThunkAction } from 'redux-thunk';
import { RootReducerState, getVideoRef } from './index';

import {
	ActionRequestCamera,
	ActionRequestCameraSuccess,
	ActionRequestCameraError,
} from './actions';

type RequestCameraActions = (
	ActionRequestCamera |
	ActionRequestCameraError |
	ActionRequestCameraSuccess
)

interface ShareOptions {
	title?: string;
	text?: string;
	url?: string;
}

interface Navigator {
	share(options: ShareOptions): Promise<void>;
}

declare var navigator: Navigator;

export const sendPhoto = (): ThunkAction<void, RootReducerState, void, RequestCameraActions> => async (dispatch, getState) => {
	const state = getState();
	const video = getVideoRef(state);

	if (video && typeof navigator.share === 'function') {
		const canvas = document.createElement('canvas');
		canvas.width = video.width;
		canvas.height = video.height;
		const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		ctx.drawImage(video, 0, 0, video.width, video.height);
		const url = canvas.toDataURL();
		await navigator.share({
			title: 'Picture This!',
			url,
		});
	}
};
