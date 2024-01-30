import React from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../style/style'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = ({ navigation }: any) => {
  const postData = [
    "https://images.unsplash.com/photo-1634300207026-87f0d9bd723d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFByb2dyYW1tZXIlMjBSb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1692738611288-4d55c2078851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://media.istockphoto.com/id/921019710/photo/male-and-female-architects-wearing-augmented-reality-headsets-work-with-3d-city-model-high.webp?b=1&s=170667a&w=0&k=20&c=8zHsCiaVimkVBIMfKWJJVPO_kEOmKqxQiFmGXDe6WAc=",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QUl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1517456215183-9a2c3a748d0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hcnJpYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1516641239768-dc3572bdca04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hcnJpYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1610024062303-e355e94c7a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://media.istockphoto.com/id/1374994058/photo/web-page-browser-of-social-media-page-vr-interface-on-the-laptop-computer.webp?b=1&s=170667a&w=0&k=20&c=OflZ2Q4B4wNpE1D7yHC0l_1zwRKzCddQfzl2db1J3sw=",
    "https://images.unsplash.com/photo-1572573309811-48474d1891b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TG92ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fExvdmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", ,
    "https://images.unsplash.com/photo-1692533823876-e659c090a4ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UmFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"

  ]
  return (
    <SafeAreaView>
      <View style={[styles.bgLightBlack, styles.h100]}>
        <View style={[styles.p1]}>
          <View style={[styles.flexRow, styles.mt1]}>
            <Text style={[styles.fs3]}>Hamza Kamelen</Text>
            <Image
              style={[
                {
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                  marginLeft: 75
                },
              ]}
              source={{ uri: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600" }}
            />
          </View>
          <Text style={[{ marginTop: -68 }]}>hamzakamelen_2244</Text>
          <View>
            <Text style={[styles.mt1]}>
              DUET'26 🎓 {'\n'}
              MERN Stack Developer {'\n'}
              Mobile App Developer {'\n'}
            </Text>
          </View>
        </View>
        <View style={[styles.borderTop1, { borderColor: "#343a40" }, styles.borderBottom1, styles.flexRow, styles.justifyContentBetween]}>
          <View style={[styles.ms1,]}><Text style={[styles.textBold, { fontSize: 16 }, styles.p1, styles.textWhite, styles.textCenter]}>80 Posts</Text></View>
          <TouchableOpacity onPress={() => navigation.navigate('Followers')}><Text style={[styles.textBold, { fontSize: 16 }, styles.p1, styles.textWhite, styles.borderLeft1, styles.textCenter]}>80 Followers</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Following')}><Text style={[styles.textBold, { fontSize: 16 }, styles.p1, styles.textWhite, styles.borderLeft1, styles.textCenter]}>80 Following</Text></TouchableOpacity>
        </View>
        <ScrollView>
          <View style={[styles.flexRow, styles.flexWrap, styles.bgBlack]}>
            {postData && Array.isArray(postData) && postData.map((x, i) => (
              <TouchableOpacity key={i}>
                <Image height={140} width={120} source={{ uri: x }} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default Profile