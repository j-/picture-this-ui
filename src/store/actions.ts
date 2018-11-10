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

/* # Set ref */

export interface ActionSetRef extends Action {
	type: 'SetRef';
	data: {
		name: string;
		element: HTMLElement;
	};
}

export const isActionSetRef = (action: Action): action is ActionSetRef => (
	action.type === 'SetRef'
);

/* ## Set video ref */

export interface ActionSetVideoRef extends ActionSetRef {
	data: {
		name: 'video';
		element: HTMLVideoElement;
	};
}

export const isActionSetVideoRef = (action: Action): action is ActionSetVideoRef => (
	isActionSetRef(action) && action.data.name === 'video'
);

export const setVideoRef = (element: HTMLVideoElement): ActionSetRef => ({
	type: 'SetRef',
	data: {
		name: 'video',
		element,
	},
});
