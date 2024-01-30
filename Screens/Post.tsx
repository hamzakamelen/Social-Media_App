import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import styles from '../style/style'
import HMIcon from '../Components/Icons'
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker'
import NotificationSounds, { playSampleSound } from 'react-native-notification-sounds';

const Post = ({ navigation }: any) => {
  const [caption, setcaption] = useState('')
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
      NotificationSounds.getNotifications('notification').then(soundsList => {
        playSampleSound(soundsList[4]);
      });
      ToastAndroid.show("Upload Image", 50);
      setavatar('')
      setcaption('')
    } else {
      ToastAndroid.show("Uploading.....", 30);
      ToastAndroid.show("Done", 30);
      navigation.navigate('Homes');
      NotificationSounds.getNotifications('notification').then(soundsList => {
        setTimeout(() => {
          playSampleSound(soundsList[11]);
        }, 2000);
      });
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
        <TextInput value={caption} onChangeText={(e) => setcaption(e)} placeholderTextColor='grey' style={[styles.mt2, styles.p1, styles.fs5, styles.textWhite]} multiline placeholder="What's on your mind?..."></TextInput>
        <Image style={{ marginTop: 30, marginLeft: 10, height: 330, width: 300, borderRadius: 8 }} source={{ uri: avatar ? avatar : 'https://tse1.mm.bing.net/th?id=OIP.65IMVACtXGuydSTed1uirwHaFM&pid=Api&P=0&h=220' }} />

        <View>
          <TouchableOpacity onPress={uploadImage} style={[styles.flexRow, styles.mt2, styles.ms2]}>
            <HMIcon name="photo-library" color="white" size={35} />
            <Text style={[styles.textWhite, { marginTop: 4, marginLeft: 5 }, styles.fs4, styles.mb2]}>Upload Photo from Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Submit} style={[styles.alignItemsCenter, { backgroundColor: "darkblue", borderRadius: 10, width: '100%' }, styles.flexRow]}>
            <Text style={[styles.textWhite, styles.textCenter, styles.fs5, styles.p1, styles.textBold, { marginLeft: 100 }]} >Upload</Text>
            <View style={{ marginLeft: -5 }}>
              <HMIcon name="upload" size={25} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Post