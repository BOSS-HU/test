import React from 'react';
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({liked: !this.state.liked})
    }

    render() {
        let text = this.state.liked ? '喜欢' : '不喜欢'
        return (
            <p onClick={this.handleClick}>你{text}我</p>
        )
    }
}
export default LikeButton