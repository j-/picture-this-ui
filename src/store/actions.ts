import { Action } from 'redux';

/* # Request camera */

export interface ActionRequestCamera extends Action {
	type: 'RequestCamera';
}

export const isActionRequestCamera = (action: Action): action is ActionRequestCamera => (
	action.type === 'RequestCamera'
);

/* ## Request camera success */

export interface ActionRequestCameraSuccess extends Action {
	type: 'RequestCameraSuccess';
	data: {
		stream: MediaStream;
	};
}

export const isActionRequestCameraSuccess = (action: Action): action is ActionRequestCameraSuccess => (
	action.type === 'RequestCameraSuccess'
);

/* ## Request camera error */

export interface ActionRequestCameraError extends Action {
	type: 'RequestCameraError';
	data: {
		message: string;
	};
}

export const isActionRequestCameraError = (action: Action): action is ActionRequestCameraError => (
	action.type === 'RequestCameraError'
);

/* # Send photo */

/* ## Send photo error */

export interface ActionSendPhotoError extends Action {
	type: 'SendPhotoError';
	data: {
		message: string;
	};
}

export const isActionSendPhotoError = (action: Action): action is ActionSendPhotoError => (
	action.type === 'SendPhotoError'
);
