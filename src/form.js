import React from 'react'
class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.onHandelSubmit = this.onHandelSubmit.bind(this)
        this.onHandelChangel = this.onHandelChangel.bind(this)
        this.state = {
            value: ''
        }
    }

    onHandelChangel(e) {
        this.setState({value: e.target.value})
    }

    onHandelSubmit(e) {
        console.log(this.state.value)
        e.preventDefault()
    }

    render() {
        return (
            <p>
                <form action="" onSubmit={this.onHandelSubmit}>
                    <label htmlFor="">Name:</label><input type="text" value={this.state.value} onChange={this.onHandelChangel}/>
                    <input type="submit" value='submit'/>
                    <p>{this.state.value}</p>
                </form>
            </p>
        )
    }
}
export default NameForm