import React, { Component } from 'react'
import PieChart from '../components/pieChart';

export class Charts extends Component {
    render() {
        return (
            <div>
                <PieChart props = {this.props}/>
            </div>
        )
    }
}

export default Charts
