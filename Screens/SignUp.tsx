import React, { useState } from 'react'
import { Image, StyleSheet, Alert, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../style/style'
import { SafeAreaView } from 'react-native-safe-area-context';
const Login = ({ navigation }: any) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const data = {
    Name: Name,
    Email: Email,
    Password: Password,
    ConfirmPassword: ConfirmPassword
  }

  const Submit = () => {
    navigation.navigate('Login')
    Alert.alert("Account Created Successfully")
    console.log(data);
  }

  
  return (
    <SafeAreaView>
      <View style={[styles.bgWhite, styles.h100, styles.p1]}>
        <Image style={STYLE.image}
          source={require('../Assets/Threads.png')} />
        <Text
          style={[STYLE.heading, styles.textCenter, styles.my3, styles.textBold,
          styles.textBlack]}>Sign Up</Text>
        <TextInput style={[styles.input, { marginTop: -5 }]}
          onChangeText={(e) => setName(e)}
          placeholder='Name'
          placeholderTextColor='black'
        />
        <TextInput style={[styles.input, styles.my2]}
          onChangeText={(e) => setEmail(e)}
          placeholder='Email'
          placeholderTextColor='black'
        />
        <TextInput style={[styles.input]}
          onChangeText={(e) => setPassword(e)}
          placeholder='Password'
          placeholderTextColor='black'
        />
        <TextInput style={[styles.input, styles.my2]}
          onChangeText={(e) => setConfirmPassword(e)}
          placeholder='Confirm Password'
          placeholderTextColor='black'
        />
        <View style={[styles.flexCenter]}>
          <Text style={[styles.textBlack, styles.fs5]}>
            Already have an Account?
            <Text onPress={() => navigation.navigate('Login')} style={[styles.fs5, styles.textBold,
            styles.textSecondary]}> Login</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={Submit} style={[styles.btn, styles.bgBlack, styles.my1]}>
          <Text
            style={[styles.textCenter, styles.textBold,
            styles.textWhite, styles.fs3]}>Sign Up</Text>
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
  },
})
export default Login