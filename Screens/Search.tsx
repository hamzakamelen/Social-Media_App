import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from '../style/style'
import HMIcon from '../Components/Icons'

const Search = () => {
  return (
    <View style={[styles.bgLightBlack, styles.h100, styles.p2]}>
      <Text style={[styles.fs2, styles.textBold, styles.textLight]}>Search</Text>
      <TextInput placeholderTextColor='grey' style={[styles.border1, styles.my1, styles.p1, styles.bgLightBlack, { height: 40, borderColor: "grey", borderRadius: 8 }]} placeholder='Search' />
    </View>
  )
}

export default Search