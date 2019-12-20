import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

class Message extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Text style={{ textAlign: "right", backgroundColor: 'white', }}>{this.props.message}</Text>
        );
    }
}
export default Message