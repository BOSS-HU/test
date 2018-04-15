import React from 'react'
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nowTime: new Date().toLocaleTimeString()}
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        this.setState({nowTime: new Date().toLocaleTimeString()})
    }

    render() {
        return (
            <p>It is{this.state.nowTime}</p>
        )
    }
}

export default Clock
