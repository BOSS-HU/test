import React from 'react';
import './headTest.css'
class HeadTest extends React.Component {
    render() {
        return (
            <h1 className="headTest">{this.props.name}</h1>
        )
    }
}
export default HeadTest