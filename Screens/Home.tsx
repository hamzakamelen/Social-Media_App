import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import styles from '../style/style'
import HMIcon from '../Components/Icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
const Home = () => {
  const posts = [
    {
      profile: "https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.6435-9/86794394_787989285021157_3379173860678041600_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH5PO1Hv2hq5xCorItaTnX759OQtX360Rrn05C1ffrRGooupLep2ILAvPm55BpVxbUGo7QMek4ws2ORHmWLkVip&_nc_ohc=a8nMk1wP4HgAX8ig7Dj&_nc_ht=scontent.fkhi8-1.fna&oh=00_AfC5VJ9cqNLYYYx9oKiSxlTfFj_9XrKOtcTvE2vfgiTqwA&oe=6509D165",
      name: "Hamza Kamelen",
      occupation: "MERN Stack Developer",
      image: '../Assets/Post1.jpg',
      Verified: false,
      likes: 200,
      color: "white",
      saved: false
    },
    {
      profile: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Talha Kamelen",
      occupation: "Graphic Designer",
      image: '../Assets/Post2.jpg',
      Verified: true,
      likes: 250,
      color: "red",
      saved: true
    },
    {
      profile: "https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.6435-9/185187228_1101616233658459_4936989039347618189_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHxjXmQKtFBXFEo7O4AlBa-eRFkM9RtWDh5EWQz1G1YOHe5q5CnL2wS4PdQySepYFIrbqf54kCciBDN2XbHqctF&_nc_ohc=vCP9ZEgTqFYAX-7ULQY&_nc_ht=scontent.fkhi8-1.fna&oh=00_AfC-6F3e84sFcrFahpeGKRx5CiD1bJDphpFwlq0asgCnGg&oe=6509C6A9",
      name: "Anas Kamelen",
      occupation: "MEAN Stack Developer",
      image: '../Assets/Post3.jpg',
      Verified: true,
      likes: 100,
      color: "white",
      saved: false
    },
    {
      profile: "https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "M. Kamelen",
      occupation: "Full Stack Developer",
      image: '../Assets/Post4.jpg',
      Verified: false,
      likes: 120,
      color: "red",
      saved: true
    }
  ]

  // const Data:any = useSelector((a)=>a);
  // console.log(Data.Login);
  // console.log(Data.Signup);
  return (
    <SafeAreaView>
      <View style={[styles.bgBlack, styles.h100]}>
        <ScrollView >
          {posts.map((x, i) => {
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
                    <Text style={{ marginLeft: "auto" }}>
                      <HMIcon name="more-vert" color="white" size={25} />
                    </Text>
                  </View>
                  <Text style={{ marginLeft: 60, marginTop: -25 }}>{x.occupation}</Text>
                </View>
                <View style={[styles.p1, { marginTop: -10 }]}>
                  <Image style={{ height: 400, width: '100%' }} source={{ uri: 'https://assets.visme.co/templates/banners/thumbnails/i_We-re-Hiring-LinkedIn-Post_full.jpg' }} />
                </View>
                <View style={[styles.ms1, styles.flexRow, , styles.mb1]}>
                  <View>
                    <Text>
                      <HMIcon name="favorite" color={x.color} size={30} />
                    </Text>
                    <Text>{x.likes} Likes</Text>
                  </View>
                  <View style={{ marginLeft: -20 }}>
                    <HMIcon name="sms" color="white" size={30} />
                  </View>
                  <View style={styles.ms1}>
                    <HMIcon name="send" color="white" size={30} />
                  </View>
                  <View style={{ marginLeft: 200 }}>
                    {x.saved ? <HMIcon name="stars" color="lightgreen" size={30} /> : <HMIcon name="stars" color="white" size={30} />}
                    <Text>Save</Text>
                  </View>
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
