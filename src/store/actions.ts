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
