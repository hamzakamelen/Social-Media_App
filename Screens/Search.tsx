import React, { useState } from 'react'
import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../style/style'
import HMIcon from '../Components/Icons'

const Search = ({ navigation }: any) => {
  const AllUsers = [
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Talha Kamelen",
      user_name: "talhakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Hamza Kamelen",
      user_name: "hamzakamelen_2244"
    },
    {
      image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Anas Kamelen",
      user_name: "anaskamelen_2244"
    },
  ]
  return (
    <View style={[styles.bgLightBlack, styles.h100, styles.p2]}>
      <View style={[styles.flexRow, styles.justifyContentCenter]}>
        <Text style={[styles.fs3, styles.mb, styles.textBold, styles.textLight]}>Search</Text>
        <HMIcon name="search" color="white" size={30} />
      </View>
      <TextInput placeholderTextColor='grey' style={[styles.border1, styles.my1, styles.p1, styles.bgLightBlack, { height: 40, borderColor: "grey", borderRadius: 8 }]} placeholder='Search' />
      <ScrollView>
        <View>
          {AllUsers.map((x, i) => {
            const [follow, setisFollow] = useState(false)
            return (
              <TouchableOpacity onPress={() => navigation.navigate('UserProfiles')} key={i} style={[styles.mt1, styles.mb1]}>
                <View style={[styles.flexRow]}>
                  <Image
                    style={[
                      {
                        height: 50,
                        width: 50,
                        borderRadius: 50
                      },
                    ]}
                    source={{ uri: x.image }}
                  />
                  <Text style={[styles.ms, styles.fs5, styles.textWhite]}>{x.name}</Text>
                </View>
                <Text style={[styles.ms5, { marginTop: -21.5, marginLeft: 56 }]}>{x.user_name}</Text>
                <TouchableOpacity onPress={() => setisFollow(!follow)} style={[styles.border1, styles.roundedBtn, styles.bgLightBlack, { marginLeft: '70%', marginTop: -42, height: 45, width: 92 }]}>
                  {follow ? <Text style={[styles.textWhite, styles.ms]}>Following</Text> : <Text style={[styles.textWhite, styles.ms]}>Follow</Text>}
                </TouchableOpacity>
              </TouchableOpacity>)
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default Search