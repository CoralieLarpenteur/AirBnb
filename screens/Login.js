import React, { Component } from 'react';
import Message from './Message';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    NativeAppEventEmitter,
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="light-content" />
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>

                        <View style={{ margin: 20 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 40 }}>
                                <View style={{ flex: 2 }}>
                                    <Image source={require('../assets/left-arrow.png')} style={{ width: 25, height: 25 }} />
                                </View>
                                <View style={{ flex: 4, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 20, color: 'white' }}>mot de passe oublié?</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom: 40 }}>
                                <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', }}>Connexion</Text>
                            </View>
                            <View style={{ marginBottom: 30 }}>
                                <Text style={{ fontSize: 17, color: 'white' }}>ADRESSE E-MAIL</Text>
                                <TextInput onChangeText={(text) => validateEmail(text)} style={{ height: 60, borderBottomColor: 'white', borderBottomWidth: 1, color: 'white', fontSize: 25 }} />
                            </View>
                            <View style={{ marginBottom: 30 }}>
                                <Text style={{ fontSize: 17, color: 'white' }}>MOT DE PASSE</Text>
                                <TextInput textContentType={'password'} secureTextEntry={true} style={{ height: 60, borderBottomColor: 'white', borderBottomWidth: 1, color: 'white', fontSize: 25 }} />
                            </View>
                            <View style={{ height: 190 }}></View>
                            <View style={{ alignItems: "flex-end" }}>
                                <View style={{ backgroundColor: 'white', borderRadius: 50, height: 50, width: 50, padding: 15, }}>
                                    <Image source={require('../assets/next.png')} style={{ width: 20, height: 20 }} />
                                </View>
                                <View class="error">
                                    <Message>blabla</Message>
                                </View>
                            </View>

                        </View>

                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#008489',
        height: '100%',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    textW: {
        color: 'white',
    }
});

function validateEmail(email) {
    if (email != "") {
        const re = /\S+@\S+\.\S+/;
        var validEmail = re.test(email);
        if (validEmail == false) {
            console.log(email)
        }
    } else {
        message = "veuillez remplire le champ Email"
    }
}


