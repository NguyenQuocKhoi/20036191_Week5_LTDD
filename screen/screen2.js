
import { StyleSheet, Text, View, Image, Pressable,TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from "react";

function Screen2({navigation}){
    var[image, setImage] = useState(require('../assets/img/vs_blue.png'))
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={image} style={styles.img}></Image>
                <Text style={styles.text}>Điện Thoại Vsmart Joy 3{"\n"}
                    Hàng chính hãng</Text>
            </View>

            <View style={styles.content}> 
                <Text style={{ fontFamily: 'roboto', fontWeight: '400', fontSize: '18px', lineHeight: '21.09px', marginRight: '100px', marginBottom:'10px' }}>Chọn một màu bên dưới:</Text>
                <Pressable style={{ width: '85px', height: '80px', backgroundColor: '#C5F1FB', margin: '5px' }}
                
                onPress={()=>{
                    setImage(require('../assets/img/vs_silver.png'))
                }}></Pressable>
                <Pressable style={{ width: '85px', height: '80px', backgroundColor: '#F30D0D', margin: '5px' }}
                   onPress={()=>{
                    setImage(require('../assets/img/vs_red.png'))
                }}></Pressable>
                <Pressable style={{ width: '85px', height: '80px', backgroundColor: '#000000', margin: '5px' }}
                   onPress={()=>{
                    setImage(require('../assets/img/vs_black.png'))
                }}></Pressable>
                <Pressable style={{ width: '85px', height: '80px', backgroundColor: '#234896', margin: '5px' }}
                   onPress={()=>{
                    setImage(require('../assets/img/vs_blue.png'))
                }}></Pressable>

                 <TouchableOpacity onPress={()=>{
                    navigation.navigate('Screen1', image);
                 }}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>XONG</Text>
                </View>
                </TouchableOpacity>   
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    img: {
        width: '112px',
        height: '132px',
    },

    text: {
        fontFamily: 'roboto',
        fontWeight: '400',
        fontSize: '15px',
        lineHeight: '17.58px',
        marginTop: '10px',
        marginLeft: '10px',
    },
    header: {
        flex: 3,
        flexDirection: 'row',
        height: '149px',
        width: '360px',


    },
    content: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#C4C4C4',
        height: '491px',
        width: '360px'
    },

    btn: {
        width: '326px',
        height: '44px',
        borderRadius: '10px',
        borderWidth: '1px',
        backgroundColor: 'rgba(25, 82, 226, 0.58)',
        borderColor: '#CA1536',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '10px'
    },
    btnText: {
        fontFamily: 'roboto',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '17.58px',
        marginTop: '10px',
        marginLeft: '10px',
        color: '#F9F2F2',
        textAlign: 'center',

    }
});
export default Screen2;