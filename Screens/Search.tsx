import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from '../style/style'
import HMIcon from '../Components/Icons'

const Search = () => {
  return (
    <View style={[styles.bgBlack, styles.h100, styles.p2]}>
      <Text style={[styles.fs2, styles.textBold, styles.textWhite]}>Search</Text>
      <TextInput placeholderTextColor='grey' style={[styles.border1, styles.my1, styles.p1, { height: 40, borderRadius: 8, backgroundColor: '#383633' }]} placeholder='Search' />
    </View>
  )
}

export default Search