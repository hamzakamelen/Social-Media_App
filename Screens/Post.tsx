import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from '../style/style'

const Post = () => {
  return (
    <View style={[styles.bgLightBlack, styles.h100, styles.p2]}>
      {/* <Text style={[styles.fs2, styles.textBold, styles.textLight]}>Post</Text> */}
      <Image
        style={[
          {
            height: 80,
            width: 80,
            borderRadius: 50,
          },
        ]}
        source={{ uri: "https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.6435-9/86794394_787989285021157_3379173860678041600_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH5PO1Hv2hq5xCorItaTnX759OQtX360Rrn05C1ffrRGooupLep2ILAvPm55BpVxbUGo7QMek4ws2ORHmWLkVip&_nc_ohc=a8nMk1wP4HgAX8ig7Dj&_nc_ht=scontent.fkhi8-1.fna&oh=00_AfC5VJ9cqNLYYYx9oKiSxlTfFj_9XrKOtcTvE2vfgiTqwA&oe=6509D165"  }}
      />
    </View>
  )
}

export default Post