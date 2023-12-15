import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import styles from '../style/style'
import HMIcon from '../Components/Icons'
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker'

const Post = ({ navigation }: any) => {
  const [caption,setcaption] = useState('')
  const [avatar, setavatar] = useState('')
  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      compressImageQuality: 0.9,
      includeBase64: true,
    }).then((image: ImageOrVideo | any) => {
      if (image) {
        setavatar('data:image/jpeg;base64,' + image?.data)
      }
    })
  }
  const Submit = () => {
    if (avatar == '') {
      ToastAndroid.show("Upload Image", 50);
      setavatar('')
      setcaption('')
    } else {
      navigation.navigate('Homes');
      setavatar('')
      setcaption('')
    }
  }
  return (
    <ScrollView>
      <View style={[styles.bgLightBlack, styles.h100, styles.p2]}>
        {/* <Text style={[styles.fs2, styles.textBold, styles.textLight]}>Post</Text> */}
        <View style={[styles.flexRow]}>
          <Image
            style={[
              {
                height: 60,
                width: 60,
                borderRadius: 50,
              },
            ]}
            source={{ uri: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600" }}
          />
          <Text style={[styles.fs4, styles.ms1, styles.mt1, styles.textBold, styles.textWhite]}>Hamza Kamelen</Text>
        </View>
        <Text style={[{ marginLeft: 70, marginTop: -22 }]}>hamzakamelen_2244</Text>
        <TextInput value={caption} onChangeText={(e)=>setcaption(e)} placeholderTextColor='grey' style={[styles.mt2, styles.p1,styles.fs5,styles.textWhite]} multiline placeholder="What's on your mind?..."></TextInput>
        <Image style={{ marginTop: 30, marginLeft: 10, height: 330, width: 300, borderRadius: 8, }} source={{ uri: avatar ? avatar : 'https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?w=740&t=st=1702666596~exp=1702667196~hmac=610f60430d7da3779d0c6ee532f333fc70d4759a1e78db18326aafa3ba0dd2de' }} />
        <TouchableOpacity onPress={uploadImage} style={[styles.flexRow, styles.ms3, styles.mt2]}>
          <HMIcon name="photo-library" color="white" size={32} />
          <Text style={[styles.textWhite, { marginTop: 2, marginLeft: 5 }, styles.fs5, styles.mb2]}>Upload Photo From Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Submit} style={[styles.alignItemsCenter,{backgroundColor: "darkblue", borderRadius: 10, width: '100%' }, styles.flexRow]}>
          <Text style={[styles.textWhite, styles.textCenter, styles.fs5, styles.p1, styles.textBold,{marginLeft:100}]} >Upload</Text>
          <View style={{marginLeft:-5}}>
            <HMIcon name="upload" size={25} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Post