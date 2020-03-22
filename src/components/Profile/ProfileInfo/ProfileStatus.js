import React, { Component } from 'react';
import s from './ProfileInfo.module.css';

export default class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    changeStatus = (event) => {

        let text = event.target.value;
        this.setState({
            status: text
        });

    }

    activateMode = () => {

        this.setState({
            editMode: !this.state.editMode
        });
    }

    deactivateMode = () => {

        this.setState({
            editMode: !this.state.editMode
        });
        this.props.updateUserStatus(this.state.status)
    }

    componentDidUpdate(prevProps) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {

        const { status } = this.state;

        return (
            <div>Статус:
                {this.state.editMode

                    ? <input autoFocus
                        onBlur={this.deactivateMode}
                        value={status}
                        onChange={this.changeStatus} />

                    : <span className={s.status}
                        onClick={this.activateMode}> {status || "Status will be here"}</span>
                }

            </div>
        );
    }
}
