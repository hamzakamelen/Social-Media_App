import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import styles from '../style/style'
import HMIcon from '../Components/Icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
// import { useSelector } from 'react-redux'
const Home = () => {
  const posts = [
    {
      profile: "https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.6435-9/86794394_787989285021157_3379173860678041600_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH5PO1Hv2hq5xCorItaTnX759OQtX360Rrn05C1ffrRGooupLep2ILAvPm55BpVxbUGo7QMek4ws2ORHmWLkVip&_nc_ohc=a8nMk1wP4HgAX8ig7Dj&_nc_ht=scontent.fkhi8-1.fna&oh=00_AfC5VJ9cqNLYYYx9oKiSxlTfFj_9XrKOtcTvE2vfgiTqwA&oe=6509D165",
      like: true,
      name: "Hamza Kamelen",
      time: "2hr",
      occupation: "MERN Stack Developer",
      image: '../Assets/Post1.jpg',
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
      image: '../Assets/Post2.jpg',
      Verified: true,
      likes: 250,
      saved: true
    },
    {
      profile: "https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.6435-9/185187228_1101616233658459_4936989039347618189_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHxjXmQKtFBXFEo7O4AlBa-eRFkM9RtWDh5EWQz1G1YOHe5q5CnL2wS4PdQySepYFIrbqf54kCciBDN2XbHqctF&_nc_ohc=vCP9ZEgTqFYAX-7ULQY&_nc_ht=scontent.fkhi8-1.fna&oh=00_AfC-6F3e84sFcrFahpeGKRx5CiD1bJDphpFwlq0asgCnGg&oe=6509C6A9",
      like: true,
      name: "Anas Kamelen",
      time: "2m",
      occupation: "MEAN Stack Developer",
      image: '../Assets/Post3.jpg',
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
      image: '../Assets/Post4.jpg',
      Verified: false,
      likes: 120,
      saved: true
    }
  ]
  // const Data:any = useSelector((a)=>a);
  // console.log(Data.Login);
  // console.log(Data.Signup);
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
                    {x.Verified ? <HMIcon name="recommend" color="lightgreen" size={23} /> : null}
                    <Text style={[{ marginLeft: 95, fontSize: 15 }]}>{x.time}</Text>
                    <View style={{ marginLeft: 8 }}>
                      <HMIcon name="more-vert" color="white" size={25} />
                    </View>
                  </View>
                  <Text style={{ marginLeft: 60, marginTop: -25 }}>{x.occupation}</Text>
                </View>
                <View style={[styles.p1, { marginTop: -10 }]}>
                  <Image style={{ borderRadius: 10, height: 400, width: 400 }} source={{ uri: 'https://assets.visme.co/templates/banners/thumbnails/i_We-re-Hiring-LinkedIn-Post_full.jpg' }} />
                </View>
                <View style={[styles.ms1, styles.flexRow, , styles.mb1]}>
                  <View>
                    {/* //Like Button */}
                    <TouchableOpacity onPress={() => (x.like === false ? setislike(true) : setislike(false))} style={{ marginLeft: 3 }}>
                      {x.like ? <HMIcon name="favorite" color="red" size={30} /> : <HMIcon name="favorite-outline" color="lightgrey" size={30} />}
                    </TouchableOpacity>
                    <Text style={{ marginTop: 5, color: "white" }}>{x.likes} Likes</Text>
                  </View>
                  <View style={{ marginLeft: -15 }}>
                    <HMIcon name="chat-bubble-outline" color="lightgrey" size={30} />
                  </View>
                  <View style={{ marginLeft: 15 }}>
                    <HMIcon name="send" color="lightgrey" size={30} />
                  </View>
                  <TouchableOpacity onPress={() => (x.saved === false ? setisSaved(true) : setisSaved(false))} style={{ marginLeft: 185 }}>
                    {x.saved === true ? <HMIcon name="bookmark" color="lightgreen" size={30} /> : <HMIcon name="bookmark-outline" color="white" size={30} />}
                    <Text style={{ marginLeft: -5 }}>{x.saved === true ? "Saved" : "Save"}</Text>
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
