import React from 'react';
import { ICar } from './state'

interface IProps {
    model: ICar;
    year: ICar;
}

class Car extends React.Component {

    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (
            <div>awfwf</div>
        )
    }
}

export default Car;