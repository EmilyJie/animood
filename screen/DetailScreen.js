import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import LottieView from 'lottie-react-native'

export default function DetailScreen() {
    return(
        <View style={styles.detailBg}>
            <Text style={styles.detailDate}>2022/01/15</Text>
            <LottieView source={require('../json/depression_none.json')} autoPlay loop style={{width: 180}}/>
            <Text style={styles.score}>良好</Text>
            <View style={styles.suggest}>
                <Text style={styles.suggestTitle}>建議內容：</Text>
                <Text style={styles.suggestText}>恭喜你！目前的身心適應狀況很良好，如果有保持快樂與放鬆的小撇步，歡迎跟我們或是親朋好友分享，繼續將這份美麗的心情感染給身邊的人吧！</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailBg:{
        backgroundColor: '#FFFAEE',
        width: 375,
        height: 620,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 20,
    },
    detailDate:{
        fontSize: 18,
        fontWeight: 'bold',
        color: "#702929",
        marginLeft: -200
    },
    detailText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#702929",
    },
    score:{
        fontSize: 30,
        fontWeight:"bold",
        color: "#521111",
    },
    suggest:{
        backgroundColor: '#FFE8B0',
        width: 300,
        height: 225,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        paddingTop: 5
    },
    suggestTitle:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#521111",
        marginTop: 15,
        marginLeft: 20,
    },
    suggestText:{
        width: 270,
        fontSize: 18,
        color: "#521111",
        marginTop: 15,
        marginLeft: 20,
        lineHeight: 30
    },
});