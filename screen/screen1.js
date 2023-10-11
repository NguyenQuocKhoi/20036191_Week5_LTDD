import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";;

function Screen1({ route, navigation }) {
   
  var [image, setImgae] = useState();
  useEffect(() => {
    setImgae(route.params);
  }, [route.params]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={route.params||require("../assets/img/vs_blue.png")}
      ></Image>
      <Text style={styles.text1}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={styles.content}>
        <Image
          source={require("../assets/img/star.png")}
          style={styles.img1}
        ></Image>
        <Image
          source={require("../assets/img/star.png")}
          style={styles.img1}
        ></Image>
        <Image
          source={require("../assets/img/star.png")}
          style={styles.img1}
        ></Image>
        <Image
          source={require("../assets/img/star.png")}
          style={styles.img1}
        ></Image>
        <Image
          source={require("../assets/img/star.png")}
          style={styles.img1}
        ></Image>
        <Text style={styles.text2}>(Xem 828 đánh giá)</Text>
      </View>

      <View style={styles.content1}>
        <Text style={styles.text3}>1.790.000 đ</Text>
        <Text style={styles.text4}>1.790.000 đ</Text>
      </View>

      <View style={styles.content2}>
        <Text style={styles.text5}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <View style={styles.cicrle}>?</View>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate("Screen2")}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>4 MÀU-CHỌN MÀU{"     "}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.btn}>
        <Text style={styles.text6}>CHỌN MUA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  img: {
    height: "361px",
    width: "301px",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  text1: {
    fontFamily: "roboto",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "17.58px",
    textAlign: "center",
  },

  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10px",
  },

  img1: {
    width: "23px",
    height: "25px",
    marginLeft: "10px",
  },

  text2: {
    fontFamily: "roboto",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "17.58px",
    textAlign: "center",
    marginTop: "5px",
  },

  content1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-around",
  },

  text3: {
    fontFamily: "roboto",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "21.09px",
    textAlign: "center",
  },

  text4: {
    fontFamily: "roboto",
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "17.58px",
    textAlign: "center",
    textDecorationLine: "line-through",
  },

  content2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-around",
  },

  text5: {
    fontFamily: "roboto",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "14.06px",
    textAlign: "center",
    color: "#FA0000",
  },
  cicrle: {
    height: "20px",
    width: "20px",
    borderWidth: "0.5px",
    borderRadius: "20px",
    textAlign: "center",
  },

  btnContainer: {
    height: "34px",
    width: "332px",
    borderRadius: "10px",
    borderWidth: "1px",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },

  btnText: {
    fontFamily: "roboto",
    fontWeight: "400px",
    fontSize: "15px",
    lineHeight: "17.58px",
    textAlign: "center",
  },

  btn: {
    width: "326px",
    height: "44px",
    borderRadius: "10px",
    borderWidth: "1px",
    backgroundColor: "#EE0A0A",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: "20px",
  },
  text6: {
    fontFamily: "roboto",
    fontWeight: "700px",
    fontSize: "20px",
    lineHeight: "23.44px",
    textAlign: "center",
    color: "#F9F2F2",
  },
});
export default Screen1;
