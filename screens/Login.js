import React, { Component } from 'react';
import Message from './Message';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Login extends Component {
    // J'initialise ici un state avec une variable secureTextEntry à false
    state = {
        secureTextEntry: true
    }

    // On pourrait aussi le faire depuis un constructeur c'est complètement équivalent
    /**
     * constructor(props){
     *  super(props)
     *  this.state = {
     *      secureTextEntry: false
     *  } 
     * }
     */

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <View style={{ flexDirection: 'row', height: 40, backgroundColor: '#008489', justifyContent: 'space-between', }}>
                    <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/left-arrow.png')} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>mot de passe oublié?</Text>
                    </View>
                </View>
            )
        }
    }
    toggleSecureTextEntry = () => {
        // Ici j'inverse la valeur de secureTextEntry dans le state
        // Lorsqu'on appelle this.setState() la méthode render() est automatiquement appelée
        // ce qui provoque un rafraichissement de l'interface avec les valeurs à jour
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }
    render() {
        // Je lis le state et récupère la variable secureTextEntry
        const { secureTextEntry } = this.state

        // cette écriture est équivalente à 
        // const secureTextEntry = this.state.secureTextEntry

        return (
            <View
                style={styles.container}>
                <View >
                    <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', }}>Connexion</Text>
                </View>
                <View >
                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ fontSize: 17, color: 'white' }}>ADRESSE E-MAIL</Text>
                        <TextInput onChangeText={(text) => validateEmail(text)} style={{ height: 60, borderBottomColor: 'white', borderBottomWidth: 1, color: 'white', fontSize: 25 }} />
                    </View>
                    <View style={{ marginBottom: 30 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 17, color: 'white' }}>MOT DE PASSE</Text>
                            <TouchableOpacity onPress={this.toggleSecureTextEntry}><Text style={{ fontSize: 15, color: 'white' }}>{secureTextEntry ? 'Afficher' : 'Cacher'}</Text></TouchableOpacity>
                        </View>
                        <TextInput textContentType={'password'} secureTextEntry={secureTextEntry} style={{ height: 60, borderBottomColor: 'white', borderBottomWidth: 1, color: 'white', fontSize: 25 }} />
                    </View>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 50, height: 50, width: 50, padding: 15, }}>
                        <Image source={require('../assets/next.png')} style={{ width: 20, height: 20 }} />
                    </View>
                    <View class="error">
                        <Message>blabla</Message>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#008489',
        padding: 20,
        justifyContent: 'space-around',
        flex: 1
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


