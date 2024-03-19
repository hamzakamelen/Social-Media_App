import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import styles from '../style/style'
import HMIcon from '../Components/Icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
// import { useSelector } from 'react-redux'
const Home = ({ navigation }: any) => {
  const posts = [
    {
      profile: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      like: true,
      name: "Hamza Kamelen",
      time: "2hr",
      occupation: "MERN Stack Developer",
      image: 'https://nationalpositions.com/wp-content/uploads/2020/08/nonamefound1597339550614769.jpeg',
      caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      Verified: false,
      likes: 200,
      saved: false
    },
    {
      profile: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      like: true,
      name: "Talha Kamelen",
      time: "1d",
      occupation: "Graphic Designer",
      image: 'https://nationalpositions.com/wp-content/uploads/2020/08/nonamefound1597339550614769.jpeg',
      caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      Verified: true,
      likes: 250,
      saved: true
    },
    {
      profile: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      like: true,
      name: "Anas Kamelen",
      time: "2m",
      occupation: "MEAN Stack Developer",
      image: 'https://nationalpositions.com/wp-content/uploads/2020/08/nonamefound1597339550614769.jpeg',
      Verified: true,
      likes: 100,
      saved: false
    },
    {
      profile: "https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=600",
      like: true,
      name: "M. Kamelen",
      time: "2d",
      occupation: "Full Stack Developer",
      image: 'https://nationalpositions.com/wp-content/uploads/2020/08/nonamefound1597339550614769.jpeg', Verified: false,
      caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      likes: 120,
      saved: true
    }
  ]
  // const Data:any = useSelector((a)=>a);
  // console.log(Data.Login);
  // console.log(Data.Signup);
  const comments = () => {
    navigation.navigate('Comments')
  }
  return (
    <SafeAreaView>
      <View style={[styles.bgLightBlack, styles.h100]}>
        <ScrollView >
          {posts.map((x, i) => {
            const [Saved, setisSaved] = useState(false);
            const [like, setislike] = useState(false);
            x.saved = Saved;
            x.like = like;
            return (
              <View key={i} style={[styles.borderBottom1, styles.borderBottomWhite, styles.borderTopWhite]}>
                <View style={[styles.my1, styles.p1]}>
                  <View style={[styles.flexRow]}>
                    <Image
                      style={[
                        {
                          height: 50,
                          width: 50,
                          borderRadius: 25,
                        },
                      ]}
                      source={{ uri: x.profile }}
                    />
                    <Text style={[styles.textWhite, styles.textBold, styles.ms1, styles.fs5]}>{x.name}</Text>
                    {x.Verified && <HMIcon name="recommend" color="lightgreen" size={23} />}
                    <Text style={[{ marginLeft: 95, fontSize: 15 }]}>{x.time}</Text>
                    <View style={{ marginLeft: 8 }}>
                      <HMIcon name="more-vert" color="white" size={25} />
                    </View>
                  </View>
                  <Text style={{ marginLeft: 60, marginTop: -25 }}>{x.occupation}</Text>
                </View>
                <View style={[styles.p, { marginTop: -10 }]}>
                  <Image style={{ borderRadius: 5, height: 400, width: 350 }} source={{ uri: x.image }} />
                </View>
                <View style={[styles.ms1, styles.flexRow, , styles.mb1]}>
                  <View>
                    {/* //Like Button */}
                    <TouchableOpacity onPress={() => setislike(!like)} style={{ marginLeft: 3 }}>
                      <HMIcon name={x.like ? "favorite" : "favorite-outline"} color={x.like ? "red" : "lightgrey"} size={30} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: 5, color: "white" }}>{x.likes} Likes</Text>
                  </View>
                  <TouchableOpacity onPress={comments} style={{ marginLeft: -15 }}>
                    <HMIcon name="chat-bubble-outline" color="lightgrey" size={30} />
                  </TouchableOpacity>
                  <View style={{ marginLeft: 15 }}>
                    <HMIcon name="send" color="lightgrey" size={30} />
                  </View>
                  <TouchableOpacity onPress={() => setisSaved(!Saved)} style={{ marginLeft: 185 }}>
                    <HMIcon name={x.saved ? "bookmark" : "bookmark-outline"} color={x.saved ? "lightgreen" : "white"} size={30} />
                    <Text style={{ marginLeft: -5 }}>{x.saved ? "Saved" : "Save"}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}
          {/* ----------------------------------------------- */}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
export default Home
