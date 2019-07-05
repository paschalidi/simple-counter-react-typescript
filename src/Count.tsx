import React from 'react';

interface Props {
    count: number;
}

export default class Count extends React.Component<Props> {
    render(){
        const {count} = this.props
        return <h1>{count}</h1>;
    }
};

