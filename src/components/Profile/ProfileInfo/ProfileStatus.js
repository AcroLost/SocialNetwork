import React, { Component } from 'react';
import s from './ProfileInfo.module.css';

export default class ProfileStatus extends Component {

    state = {
        editMode: false,
        statusValue: 'I\'m okey'
    }

    changeInputValue = (event) => {

        let text = event.target.value;
        this.setState({
            statusValue: text
        });
    }

    changeMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {

        return (
            <div>Статус:
                {this.state.editMode
                    ? <input autoFocus
                        onBlur={this.changeMode}
                        value={this.state.statusValue}
                        onChange={this.changeInputValue} />
                    : <span onClick={this.changeMode}> {this.state.statusValue}</span>
                }

            </div>
        );
    }
}
