import React from 'react';
import { StyleSheet, View , Modal, Animated } from 'react-native';

export default function ModalPoup({visible, children}) {
  const [showModal, setShowModal ] = React.useState(visible);
  const scalValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible])
  const toggleModal =() => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scalValue,{
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200)
      Animated.timing(scalValue,{
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return(
    <Modal transparent visible={showModal}>
      <View style={styles.modalBg}>
        <Animated.View style={[styles.modalContainer,{transform:[{scale:scalValue}]}]}>{children}</Animated.View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modalBg: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalContainer: {
      marginTop: 80,
    },
})