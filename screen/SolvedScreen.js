import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SolvedScreen() {
    return (
        <View style={styles.setting}>
          <View style={styles.settingBox}>
              <Text style={styles.settingText}>帳號</Text>
              <Text style={styles.detailText}>a123456</Text>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  setting:{
    width: 345,
    height: 455,
    backgroundColor: '#FFEBC3',
    borderRadius: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  settingBox:{
    width: 300,
    height: 60,
    backgroundColor: '#FFFAEE',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  settingText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#D2A98D',
    marginLeft: 15,
  },
  detailText:{
    fontSize: 18,
    fontWeight:"bold",
    color: '#D2A98D',
    marginLeft: 40,
  },
});