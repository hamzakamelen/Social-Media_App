import React, { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import styles from '../style/style'
import HMIcon from '../Components/Icons'

const Post = () => {
  const [avatar, setavatar] = useState('')
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
  return (
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
      <TextInput style={[styles.mt3, styles.border1, styles.p1, styles.borderLight, { borderRadius: 5 }]} multiline placeholder='Write Something '></TextInput>
      <Image style={{ height: 90, width: 90, marginLeft: 10,borderRadius: 5, }} source={{ uri: avatar ? avatar : 'https://lh6.googleusercontent.com/proxy/xJTqeKdDUTpCQIdSDgSC-zkek2K7N2ziuCHcASBiROTcdMwCn15OH1080m1_R_EScPMzIbnOeCSN2DBGgLE0AqZgRmVgw9KM-L9OD-KeVvN-YM00k65q=s0-d' }} />
          <View style={styles.flexRow}>
            {/* <HMIcon name="cloud-upload" color="grey" size={27} /> */}
            <Text style={[styles.textBlack, { marginTop: 2, marginLeft: 5 }, styles.fs5, styles.mb2]}>Upload/Change Picture</Text>
          </View>
    </View>
  )
}

export default Post