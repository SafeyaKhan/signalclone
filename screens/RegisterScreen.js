import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase'

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL : imageUrl || "https://randomuser.me/api/portraits/thumb/men/75.jpg"
                })
            })
            .catch(error => alert(error.message))
    };
    return (
        <KeyboardAvoidingView behaviour="padding" style={styles.container}>
            <Text h3 style={{ marginBottom: 50 }}>Create a Signal Account</Text>
            <View style={styles.inputContainer}>
                <Input placeholder='Name' autoFocus type="text" value={name}
                    onChangeText={(text) => setName(text)} />
                <Input placeholder='Email' type="email" value={email}
                    onChangeText={(text) => setEmail(text)} />
                <Input placeholder='Password' secureTextEntry type="password" value={password}
                    onChangeText={(text) => setPassword(text)} />
                <Input placeholder='Profile Picture URl(Optional)' type="text" value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)} />
            </View>
            <Button containerStyle={styles.button} raised onPress={register}
                title="Register" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

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