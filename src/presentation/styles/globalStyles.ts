import { StyleSheet } from 'react-native';
import { globalColors } from './colors';

export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:globalColors.background,
    },
    primaryButton: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: globalColors.background,
        fontSize: 18,
    },
});
