import * as React from 'react';

export interface Props {
	condition?: any;
}

const Maybe: React.StatelessComponent<Props> = ({ condition, children }) => (
	<>{condition ? children : null}</>
);

export default Maybe;
