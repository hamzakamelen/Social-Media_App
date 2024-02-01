import React from 'react'
import { ScrollView, Text, TouchableOpacity, View, } from 'react-native'
import styles from '../style/style'
import HMIcon from '../Components/Icons'
import { SafeAreaView } from 'react-native-safe-area-context'
const Followers = ({ navigation }: any) => {
    return (
        <SafeAreaView>
            <View style={[{ height: '6%' }, styles.bgLightBlack, styles.flexRow]}>
                <TouchableOpacity style={[styles.ms2, styles.mt1]} onPress={() => (navigation.navigate('Home'))} >
                    <HMIcon name="arrow-back-ios-new" color="white" size={25} />
                </TouchableOpacity>
                <Text style={[styles.fs4, styles.mt1, styles.textBold, { marginLeft: 100 }]}>Followers</Text>
            </View>
            <View style={[styles.h100, styles.bgLightBlack]}>
                <Text>Followers</Text>
            </View>
        </SafeAreaView>
    )
}

export default Followers