import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Button extends Component {
    render() {
        const { content } = this.props
        const { textColor } = this.props
        const { backgroundcolor } = this.props
        return (
            <TouchableOpacity>
                <View style={{ marginBottom: 20 }}>
                    <Text style={[styles.btn, { color: textColor, backgroundColor: backgroundcolor }]} >{content}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 12,
        borderRadius: 50,
        textAlign: 'center',
        borderColor: 'white',
        borderWidth: 1,
    },
});
