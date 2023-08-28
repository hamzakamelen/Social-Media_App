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
                height: 80,
                width: 80,
                borderRadius: 50,
              },
            ]}
            source={{ uri: "https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.6435-9/86794394_787989285021157_3379173860678041600_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH5PO1Hv2hq5xCorItaTnX759OQtX360Rrn05C1ffrRGooupLep2ILAvPm55BpVxbUGo7QMek4ws2ORHmWLkVip&_nc_ohc=a8nMk1wP4HgAX8ig7Dj&_nc_ht=scontent.fkhi8-1.fna&oh=00_AfC5VJ9cqNLYYYx9oKiSxlTfFj_9XrKOtcTvE2vfgiTqwA&oe=6509D165" }}
          />
          <Text style={[styles.fs4, styles.ms1, styles.mt1, styles.textBold, styles.textWhite]}>Hamza Kamelen</Text>
        </View>
        <Text style={[{ marginLeft: 93, marginTop: -40 }]}>hamzakamelen_2244</Text>
        <TextInput value={caption} onChangeText={(e)=>setcaption(e)} style={[styles.mt3, styles.border1, styles.p1, styles.borderLight, { borderRadius: 5 }]} multiline placeholder='Write Something '></TextInput>
        <Image style={{ marginTop: 30, marginLeft: 10, height: 330, width: 300, borderRadius: 8, }} source={{ uri: avatar ? avatar : 'https://lh6.googleusercontent.com/proxy/xJTqeKdDUTpCQIdSDgSC-zkek2K7N2ziuCHcASBiROTcdMwCn15OH1080m1_R_EScPMzIbnOeCSN2DBGgLE0AqZgRmVgw9KM-L9OD-KeVvN-YM00k65q=s0-d' }} />
        <TouchableOpacity onPress={uploadImage} style={[styles.flexRow, styles.ms3, styles.mt2]}>
          <HMIcon name="photo-library" color="white" size={32} />
          <Text style={[styles.textWhite, { marginTop: 2, marginLeft: 5 }, styles.fs5, styles.mb2]}>Upload Photo From Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Submit} style={[{ marginTop: -5, marginLeft: 100, backgroundColor: "blue", borderRadius: 10, width: 110 }, styles.flexRow]}>
          <Text style={[styles.textWhite, styles.textCenter, styles.fs5, styles.p1, styles.textBold,]} >Upload</Text>
          <View style={[styles.mt1]}>
            <HMIcon name="upload" size={30} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Post