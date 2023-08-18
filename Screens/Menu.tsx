import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import styles from '../style/style'
import HMIcon from '../Components/Icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const Menu = () => {
  return (
    <SafeAreaView>
      <View style={[styles.bgBlack, styles.h100]}>
        <ScrollView>
          {/* <Image style={{height:10}}  source={require('../Assets/Meta.png')} /> */}
          <View style={[styles.borderBottom1, styles.borderBottomWhite, styles.borderTopWhite]}>
            <View style={[styles.my1, styles.p2,]}>
              {/* <Image style={styles.h20} source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQHUCRbI1yHJNw/profile-displayphoto-shrink_200_200/0/1680301081683?e=1697673600&v=beta&t=S4ugPq5L07JEKYGFA0-Xd-8vukE26qUabHLMKvLaqlo' }} /> */}
              <Text style={[styles.textWhite, styles.textBold, styles.ms3, styles.fs5]}>Hamza Kamelen</Text>
              <Text style={[styles.ms3]}>MERN Stack Developer</Text>
              <HMIcon name="wine-glass" color='white' />
            </View>
            <View style={[styles.p1, { marginTop: -20 }]}>
              <Image style={{ height: 400, width: '100%' }} source={{ uri: 'https://assets.visme.co/templates/banners/thumbnails/i_We-re-Hiring-LinkedIn-Post_full.jpg' }} />
            </View>
            {/* <View>
              <HMIcon name='heart' />
            </View> */}
          </View>
          {/* ----------------------------------------------- */}
          <View style={[styles.borderTop1, styles.borderBottom1, styles.borderBottomWhite, styles.borderTopWhite]}>
            <View style={[styles.my1, styles.p2,]}>
              {/* <Image style={styles.h20} source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQHUCRbI1yHJNw/profile-displayphoto-shrink_200_200/0/1680301081683?e=1697673600&v=beta&t=S4ugPq5L07JEKYGFA0-Xd-8vukE26qUabHLMKvLaqlo' }} /> */}
              <Text style={[styles.textWhite, styles.textBold, styles.ms3, styles.fs5]}>Hamza Kamelen</Text>
              <Text style={[styles.ms3]}>MERN Stack Developer</Text>
              {/* <HMIcon name='settings' color='white' /> */}
            </View>
            <View style={[styles.p1, { marginTop: -20 }]}>
              <Image style={{ height: 400, width: '100%' }} source={{ uri: 'https://assets.visme.co/templates/banners/thumbnails/i_We-re-Hiring-LinkedIn-Post_full.jpg' }} />
            </View>
          </View>
          {/* ----------------------------------------------- */}
          <View style={[styles.borderTop1, styles.borderBottom1, styles.borderBottomWhite, styles.borderTopWhite]}>
            <View style={[styles.my1, styles.p2,]}>
              {/* <Image style={styles.h20} source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQHUCRbI1yHJNw/profile-displayphoto-shrink_200_200/0/1680301081683?e=1697673600&v=beta&t=S4ugPq5L07JEKYGFA0-Xd-8vukE26qUabHLMKvLaqlo' }} /> */}
              <Text style={[styles.textWhite, styles.textBold, styles.ms3, styles.fs5]}>Hamza Kamelen</Text>
              <Text style={[styles.ms3]}>MERN Stack Developer</Text>
              {/* <HMIcon name='settings' color='white' /> */}
            </View>
            <View style={[styles.p1, { marginTop: -20 }]}>
              <Image style={{ height: 400, width: '100%' }} source={{ uri: 'https://assets.visme.co/templates/banners/thumbnails/i_We-re-Hiring-LinkedIn-Post_full.jpg' }} />
            </View>
          </View>
          {/* ----------------------------------------------- */}
          <View style={[, styles.borderTop1, styles.borderBottom1, styles.borderBottomWhite, styles.borderTopWhite]}>
            <View style={[styles.my1, styles.p2,]}>
              {/* <Image style={styles.h20} source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQHUCRbI1yHJNw/profile-displayphoto-shrink_200_200/0/1680301081683?e=1697673600&v=beta&t=S4ugPq5L07JEKYGFA0-Xd-8vukE26qUabHLMKvLaqlo' }} /> */}
              <Text style={[styles.textWhite, styles.textBold, styles.ms3, styles.fs5]}>Hamza Kamelen</Text>
              <Text style={[styles.ms3]}>MERN Stack Developer</Text>
              {/* <HMIcon name='settings' color='white' /> */}
            </View>
            <View style={[styles.p1, { marginTop: -20 }]}>
              <Image style={{ height: 400, width: '100%' }} source={{ uri: 'https://assets.visme.co/templates/banners/thumbnails/i_We-re-Hiring-LinkedIn-Post_full.jpg' }} />
            </View>
          </View>
          {/* ----------------------------------------------- */}
          <View style={[, styles.borderTop1, styles.borderBottom1, styles.borderBottomWhite, styles.borderTopWhite]}>
            <View style={[styles.my1, styles.p2,]}>
              {/* <Image style={styles.h20} source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQHUCRbI1yHJNw/profile-displayphoto-shrink_200_200/0/1680301081683?e=1697673600&v=beta&t=S4ugPq5L07JEKYGFA0-Xd-8vukE26qUabHLMKvLaqlo' }} /> */}
              <Text style={[styles.textWhite, styles.textBold, styles.ms3, styles.fs5]}>Hamza Kamelen</Text>
              <Text style={[styles.ms3]}>MERN Stack Developer</Text>
              {/* <HMIcon name='settings' color='white' /> */}
            </View>
            <View style={[styles.p1, { marginTop: -20 }]}>
              <Image style={{ height: 400, width: '100%' }} source={{ uri: 'https://assets.visme.co/templates/banners/thumbnails/i_We-re-Hiring-LinkedIn-Post_full.jpg' }} />
            </View>
          </View>
          {/* ----------------------------------------------- */}
          <View style={[, styles.borderTop1, styles.borderBottom1, styles.borderBottomWhite, styles.borderTopWhite]}>
            <View style={[styles.my1, styles.p2,]}>
              {/* <Image style={styles.h20} source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQHUCRbI1yHJNw/profile-displayphoto-shrink_200_200/0/1680301081683?e=1697673600&v=beta&t=S4ugPq5L07JEKYGFA0-Xd-8vukE26qUabHLMKvLaqlo' }} /> */}
              <Text style={[styles.textWhite, styles.textBold, styles.ms3, styles.fs5]}>Hamza Kamelen</Text>
              <Text style={[styles.ms3]}>MERN Stack Developer</Text>
              {/* <HMIcon name='settings' color='white' /> */}
            </View>
            <View style={[styles.p1, { marginTop: -20 }]}>
              <Image style={{ height: 400, width: '100%' }} source={{ uri: 'https://assets.visme.co/templates/banners/thumbnails/i_We-re-Hiring-LinkedIn-Post_full.jpg' }} />
            </View>
          </View>
          {/* ----------------------------------------------- */}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({

})
export default Menu