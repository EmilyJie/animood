import { StyleSheet, Image } from 'react-native';

export const handleAvatar = (userAvatar) => {
    if(userAvatar == "head1"){
        return(
          <Image style={styles.profilePhoto} source={require('../assets/img_head1.png')} />
        )
    } else if(userAvatar == "head2"){
        return(
            <Image style={styles.profilePhoto} source={require('../assets/img_head2.png')} />
        )
    } else if(userAvatar == "head3"){
        return(
            <Image style={styles.profilePhoto} source={require('../assets/img_head3.png')} />
        )
    } else if(userAvatar == "head4"){
        return(
            <Image style={styles.profilePhoto} source={require('../assets/img_head4.png')} />
        )
    }
}

const styles = StyleSheet.create({
    profilePhoto:{
      width: 100,
      height: 100,
    },
})