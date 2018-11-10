import { Action } from 'redux';

export interface ActionRequestCamera extends Action {
	type: 'RequestCamera';
}

export const isActionRequestCamera = (action: Action): action is ActionRequestCamera => (
	action.type === 'RequestCamera'
);

export interface ActionRequestCameraSuccess extends Action {
	type: 'RequestCameraSuccess';
	data: {
		stream: MediaStream;
	};
}

export const isActionRequestCameraSuccess = (action: Action): action is ActionRequestCameraSuccess => (
	action.type === 'RequestCameraSuccess'
);

export interface ActionRequestCameraError extends Action {
	type: 'RequestCameraError';
	data: {
		message: string;
	};
}

export const isActionRequestCameraError = (action: Action): action is ActionRequestCameraError => (
	action.type === 'RequestCameraError'
);

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
