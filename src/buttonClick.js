import React from 'react'
class ButtonClick extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true
        }
        this.handelClick = this.handelClick.bind(this)
    }

    handelClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <p>
                <button onClick={this.handelClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
            </p>
        )
    }
}
export default ButtonClick