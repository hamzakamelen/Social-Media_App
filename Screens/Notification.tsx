import React from 'react'
import { Text, View } from 'react-native'
import styles from '../style/style'

const Notification = () => {
  return (
    <View style={[styles.bgBlack,styles.h100]}>
    <Text style={styles.fs1}>Notification</Text>
   </View>
  )
}

export default Notification