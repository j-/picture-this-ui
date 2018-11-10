import { ThunkAction } from 'redux-thunk';
import { RootReducerState, getVideoRef } from './index';

import {
	ActionSendPhotoError,
} from './actions';

type SendPhotoActions = (
	ActionSendPhotoError
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

export const sendPhoto = (): ThunkAction<void, RootReducerState, void, SendPhotoActions> => async (dispatch, getState) => {
	const state = getState();
	const video = getVideoRef(state);

	try {
		if (!video) {
			throw new Error('Video stream was not available');
		}

		if (!navigator.share) {
			throw new Error('Share function is not supported');
		}

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
	} catch (err) {
		dispatch<ActionSendPhotoError>({
			type: 'SendPhotoError',
			data: {
				message: err.message
			},
		});
	}
};
