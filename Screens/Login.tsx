import React, { useState } from 'react'
import { Image, StyleSheet, Alert, Text, View, TextInput, Button, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from '../style/style'
const Login = ({ navigation }: any) => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const data = {
        Email: Email,
        Password: Password
    }

    const Submit = () => {
        navigation.navigate('Menu')
        console.log(data);
    }


    return (
        <SafeAreaView>
            <View style={[styles.bgWhite, styles.h100, styles.p1]}>
                <Image style={STYLE.image}
                    source={require('../Assets/Threads.png')} />
                <Text
                    style={[STYLE.heading, styles.textCenter, styles.my5, styles.textBold,
                    styles.textBlack]}>Login</Text>
                <TextInput style={[styles.input]}
                    placeholder='Email'
                    onChangeText={(e) => setEmail(e)}
                    placeholderTextColor='black'
                />
                <TextInput style={[styles.input, styles.my2]}
                    placeholder='Password'
                    onChangeText={(e) => setPassword(e)}
                    placeholderTextColor='black'
                />
                <View style={[styles.flexCenter]}>
                    <Text style={[styles.textBlack, styles.fs5]}>
                        Don't have an Account?
                        <Text onPress={() => navigation.navigate('SignUp')} style={[styles.fs5, styles.textBold, styles.textSecondary]}> SignUp</Text>
                    </Text>
                </View>
                <TouchableOpacity
                    style={[styles.btn, styles.bgBlack, styles.my2]}
                    onPress={Submit}
                >
                    <Text
                        style={[styles.textCenter, styles.textBold, styles.textWhite, styles.fs3]}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const STYLE = StyleSheet.create({
    image: {
        height: 108,
        width: 200,
        marginTop: 90,
        marginLeft: 70
    },
    heading: {
        fontSize: 40,
    }
})
export default Login