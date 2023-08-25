import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from '../style/style'

const Profile = () => {
  return (
    <View style={[styles.bgLightBlack, styles.h100]}>
      <View style={[styles.p1]}>
        <View style={[styles.flexRow, styles.mt1]}>
          <Text style={[styles.fs3]}>Hamza Kamelen</Text>
          <Image
            style={[
              {
                height: 100,
                width: 100,
                borderRadius: 50,
                marginLeft: 75
              },
            ]}
            source={{ uri: "https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.6435-9/86794394_787989285021157_3379173860678041600_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH5PO1Hv2hq5xCorItaTnX759OQtX360Rrn05C1ffrRGooupLep2ILAvPm55BpVxbUGo7QMek4ws2ORHmWLkVip&_nc_ohc=a8nMk1wP4HgAX8ig7Dj&_nc_ht=scontent.fkhi8-1.fna&oh=00_AfC5VJ9cqNLYYYx9oKiSxlTfFj_9XrKOtcTvE2vfgiTqwA&oe=6509D165" }}
          />
        </View>
        <Text style={[{ marginTop: -68 }]}>hamzakamelen_2244</Text>
        <View>
          <Text style={[styles.mt1]}>
            DUET'26 🎓 {'\n'}
            MERN Stack Developer {'\n'}
            Mobile App Developer {'\n'}
          </Text>
        </View>
      </View>
      <View style={[styles.borderTop1,{borderColor:"#343a40"},styles.borderBottom1,styles.flexRow,styles.justifyContentBetween]}>
          <TouchableOpacity><Text style={[styles.textBold,styles.p1,styles.textWhite,styles.borderLeft1,styles.textCenter]}>80 Post</Text></TouchableOpacity>
          <TouchableOpacity><Text style={[styles.textBold,styles.p1,styles.textWhite,styles.borderLeft1,styles.textCenter]}>80 Followers</Text></TouchableOpacity>
          <TouchableOpacity><Text style={[styles.textBold,styles.p1,styles.textWhite,styles.borderLeft1,styles.textCenter]}>80 Following</Text></TouchableOpacity>
        </View>
    </View>
  )
}

export default Profile