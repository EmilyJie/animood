import { useCallback } from 'react';
import { Alert, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ExternalLink = ({ url, children }) => {
    const handlePress = useCallback(async() => {
        const supported = await Linking.canOpenURL(url);

        if(supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`)
        }
    }, [url])

    return <TouchableOpacity onPress={handlePress}>{children}</TouchableOpacity>
};

export default ExternalLink;