import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Image, Input, Button } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authUser => {
            if (authUser) {
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .catch(error => alert)
    }
    return (
        <KeyboardAvoidingView behaviour="padding" style={styles.container}>
            <StatusBar style='light' />
            <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png?20190715211000" }}
                style={{ width: 150, height: 150 }} />
            <View style={styles.inputContainer}>
                <Input placeholder='Email' autoFocus type="email" value={email}
                    onChangeText={(text) => setEmail(text)} />
                <Input placeholder='Password' secureTextEntry type="password" value={password}
                    onChangeText={(text) => setPassword(text)} />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} type="outline" onPress={() => navigation.navigate('Register')}
                title="Register" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>

    )
}
export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})