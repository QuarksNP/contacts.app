import { Image, type ImageSourcePropType, TextInput, View, StyleSheet } from "react-native"

import { AntDesign } from '@expo/vector-icons';

interface SearchProps {
    placeholder: string,
    iconName?: any
}

export const Search = ({ placeholder, iconName }: SearchProps) => {
    return (
        <View style={styles.container}>
            <AntDesign name={iconName} size={20}/>
            <TextInput style={styles.input} placeholder={placeholder}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#F1FADA',
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        gap: 10,
        padding: 10,
        borderRadius: 5,
    },

    input: {
        flex: 1
    }
})