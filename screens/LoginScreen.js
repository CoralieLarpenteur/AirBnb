import React, { Component } from 'react';
import Button from './Button';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native';

export default class LoginScreen extends Component {
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
                                <View style={{ flex: 3 }}>
                                    <Image source={require('../assets/multiply.png')} style={{ width: 25, height: 25 }} />
                                </View>
                                <View style={{ flex: 3, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 20, color: 'white' }}>Connexion</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom: 40 }}>
                                <Image source={require('../assets/airbnb.png')} style={{ width: 50, height: 50 }} />
                            </View>
                            <View style={{ marginBottom: 40 }}>
                                <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', }}>Bienvenue sur Airbnb.</Text>
                            </View>
                            <Button textColor={'#008489'} backgroundcolor={'white'} content={'continuer avec facebook'}></Button>
                            <Button textColor={'white'} backgroundcolor={'#008489'} content={'Crée un compte'}></Button>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontSize: 20, color: 'white' }}>Plus d'options</Text>
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={{ fontSize: 15, color: 'white' }}>en appuyant sur Continuer, Crée un compte ou Plus d'options, j'accepte les <Text style={{ textDecorationLine: "underline" }}>Conditions générales</Text>, les <Text style={{ textDecorationLine: "underline" }}>Conditions de service relatives aux paiments</Text>, la <Text style={{ textDecorationLine: "underline" }}>Politique de confidentialité</Text> et la <Text style={{ textDecorationLine: "underline" }}>Politique de non-discrimination</Text> d'Airbnb</Text>
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
