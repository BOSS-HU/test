import React, {Component} from 'react';
import HeadTest from './head'
import LikeButton from './likeButton'
import Clock from './clock'
import ButtonClick from './buttonClick'
import LoginControl from './loginControl'
import List from './list'
import NameForm from './form'
import MoreForms from './checkboxAndText'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React --</h1>
                </header>
                <HeadTest name="test-组件"/>
                <LikeButton></LikeButton>
                <Clock/>
                <ButtonClick/>
                <LoginControl/>
                <List/>
                <NameForm/>
                <MoreForms/>
            </div>
        );
    }
}

export default App;
