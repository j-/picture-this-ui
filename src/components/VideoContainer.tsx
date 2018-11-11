import * as React from 'react';
import { getVideoElement } from '../video';

export interface Props extends React.VideoHTMLAttributes<HTMLVideoElement> {

}

export default class VideoContainer extends React.Component<Props> {
	private container: HTMLDivElement;

	componentDidMount () {
		this.container.appendChild(
			getVideoElement()
		);
	}

	render () {
		return (
			<div
				className="VideoContainer"
				ref={(el) => this.container = el as HTMLDivElement}
			/>
		);
	}
}
