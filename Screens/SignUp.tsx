import { useEffect, useState } from 'react'
import { Image, StyleSheet, ToastAndroid, Alert, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../style/style'
import { SafeAreaView } from 'react-native-safe-area-context';
// import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker'
// import HMIcon from '../Components/Icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../redux/actions/userAction';
// import { add } from '../redux/reducer/signupslice';

function SignUp({ navigation }: any) {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  // const {error,user}= useSelector((state:any)=>state.user)
  // const [avatar, setavatar] = useState('');
  // const dispatch = useDispatch();

  // const uploadImage = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 300,
  //     cropping: true,
  //     compressImageQuality: 0.9,
  //     includeBase64: true,
  //   }).then((image: ImageOrVideo | any) => {
  //     if(image){
  //     setavatar('data:image/jpeg;base64,' + image?.data)
  //     }
  //   })
  // }

  // useEffect(() => {
  //   if(error){
  //     Alert.alert(error);
  //   }
  // }, [error])

  const Submit = () => {
    if (Name == '' || Email == '' || Password == '' || ConfirmPassword == '') {
      ToastAndroid.show(
        "Please Fill All Fields",
        ToastAndroid.SHORT
      )
    } else {
      // registerUser(Name,Email,Password,ConfirmPassword)(dispatch);
      navigation.navigate('Login')
      Alert.alert("Account Created Successfully")
    }
  }
  return (
    <SafeAreaView>
      <View style={[styles.bgWhite, styles.h100, styles.p1]}>
        <ScrollView>
          <Image style={STYLE.image}
            source={require('../Assets/Threads.png')} />
          <Text
            style={[STYLE.heading, styles.textCenter, styles.my3, styles.textBold,
            styles.textBlack]}>Register</Text>
          {/* <Image style={{ height: 90, width: 90, marginLeft: 10,borderRadius: 20, }} source={{ uri: avatar ? avatar : 'https://www.fote.org.uk/wp-content/uploads/2017/03/profile-icon.png' }} />
          <View style={styles.flexRow}>
            <HMIcon name="cloud-upload" color="grey" size={27} />
            <Text onPress={uploadImage} style={[styles.textBlack, { marginTop: 2, marginLeft: 5 }, styles.fs5, styles.mb2]}>Upload/Change Picture</Text>
          </View> */}
          <TextInput style={[styles.input, { marginTop: -5 }]}
            value={Name}
            onChangeText={(e) => setName(e)}
            placeholder='Name'
            placeholderTextColor='black'
          />
          <TextInput style={[styles.input, styles.my2]}
            value={Email}
            onChangeText={(e) => setEmail(e)}
            placeholder='Email'
            placeholderTextColor='black'
          />
          <TextInput style={[styles.input]}
            value={Password}
            onChangeText={(e) => setPassword(e)}
            placeholder='Password'
            placeholderTextColor='black'
          />
          <TextInput style={[styles.input, styles.my2]}
            value={ConfirmPassword}
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
        </ScrollView>
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
export default SignUp