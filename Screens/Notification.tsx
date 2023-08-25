import React from 'react'
import { Text, View } from 'react-native'
import styles from '../style/style'

const Notification = () => {
  return (
    <View style={[styles.bgLightBlack, styles.h100, styles.p2]}>
      <Text style={[styles.fs2, styles.textBold, styles.textLight]}>Activity</Text>
    </View>
  )
}

export default Notification