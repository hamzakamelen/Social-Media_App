import React from 'react'
import { Text, View } from 'react-native'
import styles from '../style/style'

const Post = () => {
  return (
    <View style={[styles.bgBlack,styles.h100]}>
    <Text style={styles.fs1}>Post</Text>
   </View>
  )
}

export default Post