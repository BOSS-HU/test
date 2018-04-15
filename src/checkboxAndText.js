import React from 'react'
class MoreForms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isCheckBox: false, isNumber: 2}
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        const target = e.target
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <p>
                <label htmlFor="box">checkBox is :{this.state.isCheckBox.toString()} </label>
                <input type="checkbox"
                       checked={this.state.isCheckBox}
                       onChange={this.onChange}
                       id="box"
                       name="isCheckBox"
                />
                <input type="number"
                       onChange={this.onChange}
                       value={this.state.isNumber}
                       name="isNumber"
                />
            </p>
        )
    }
}

export default MoreForms