import { useState } from 'react'
import { Image, StyleSheet, Alert, Text, View, TextInput, Button, TouchableOpacity, SafeAreaView, ToastAndroid } from 'react-native'
import styles from '../style/style'
// import { useDispatch } from 'react-redux';
// import { add } from '../redux/reducer/loginslice';

function Login({ navigation }: any) {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    // const dispatch = useDispatch();
    const Submit = () => {
        if (Email == '' || Password == '') {
            ToastAndroid.show(
                "Please Fill All Fields",
                ToastAndroid.SHORT
            )
        } else {
            // dispatch(
            //     add({
            //         email: Email,
            //         password: Password,
            //     })
            // )
            ToastAndroid.showWithGravity(
                'Login Successful',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            )
            navigation.navigate('Home')
        }
    }

    return (
        <SafeAreaView>
            <View style={[styles.bgWhite, styles.h100, styles.p2]}>
                <Image style={STYLE.image}
                    source={require('../Assets/Threads.png')} />
                <Text
                    style={[STYLE.heading, styles.textCenter, styles.my3, styles.mx1, styles.textBold,
                    styles.textBlack]}>Login</Text>
                <TextInput style={[styles.input]}
                    value={Email}
                    placeholder='Email'
                    onChangeText={(e) => setEmail(e)}
                    placeholderTextColor='black'
                />
                <TextInput style={[styles.input, styles.my2]}
                    value={Password}
                    placeholder='Password'
                    onChangeText={(e) => setPassword(e)}
                    placeholderTextColor='black'
                />
                <View style={[styles.flexCenter]}>
                    <Text style={[styles.textBlack, styles.fs5]}>
                        Don't have an Account?
                        <Text onPress={() => navigation.navigate('SignUp')} style={[styles.textBold, styles.textSecondary]}> Create Account</Text>
                    </Text>
                </View>
                <TouchableOpacity
                    style={[styles.btn, styles.bgBlack, styles.my2]}
                    onPress={Submit}
                >
                    <Text
                        style={[styles.textCenter, styles.textBold, styles.textWhite, styles.fs3]}>Login</Text>
                </TouchableOpacity>
                <Text style={[styles.mt1, { color: "grey", fontSize: 20, textAlign: 'center' }]}>Or Login with</Text>
                <View style={[styles.my2, styles.flexRow]}>
                    <TouchableOpacity style={[styles.border1, { marginLeft: 90, borderRadius: 15, width: '17%', borderColor: 'lightgrey' }]}>
                        <Image style={[{ marginLeft: -3.2, height: 60, width: 60 }]} source={{ uri: 'https://support.bluebeam.com/wp-content/uploads/2016/04/apple_logo_4096x4096_black.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.border1, { marginLeft: 40, borderRadius: 15, width: '17%', borderColor: 'lightgrey' }]}>
                        <Image style={[{ marginLeft: -3, height: 60, width: 60 }]} source={{ uri: 'https://i1.wp.com/www.teguhonline7.com/wp-content/uploads/2016/07/google-icon.png?fit=1125%2C1125' }} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const STYLE = StyleSheet.create({
    image: {
        height: 75,
        width: 120,
        marginTop: 70,
        marginLeft: 100
    },
    heading: {
        fontSize: 35,
    }
})
export default Login