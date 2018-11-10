import * as React from 'react';
import ErrorMessage, { Props as ErrorMessageProps } from './ErrorMessage';

export interface Props extends ErrorMessageProps {

}

const MaybeErrorMessage: React.StatelessComponent<Props> = (props) => (
	!props.children ? null :
		<ErrorMessage {...props}>
			{props.children}
		</ErrorMessage>
);

export default MaybeErrorMessage;
