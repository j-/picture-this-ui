import * as React from 'react';

export interface Props extends React.VideoHTMLAttributes<HTMLVideoElement> {

}

const Video: React.StatelessComponent<Props> = (props) => (
	<video {...props} />
);

export default Video;
