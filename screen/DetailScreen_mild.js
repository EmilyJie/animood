import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import LottieView from 'lottie-react-native'

export default function DetailScreenMild() {
    return(
        <View style={styles.detailBg}>
            <Text style={styles.detailDate}>2022/01/01</Text>
            <LottieView source={require('../json/depression_mild.json')} autoPlay loop style={{width: 180}}/>
            <Text style={styles.score}>輕度</Text>
            <View style={styles.suggest}>
                <Text style={styles.suggestTitle}>建議內容：</Text>
                <Text style={styles.suggestText}>最近是不是有些事情悶在心裡呢...你似乎有輕度情緒困擾，建議多找身邊的人聊聊，或做些讓自己放鬆心情的事，獲得情緒上的支持與舒緩。</Text>
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