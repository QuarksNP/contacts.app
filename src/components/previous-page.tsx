import { Pressable, StyleSheet } from "react-native"

import { AntDesign } from '@expo/vector-icons';

import { router } from 'expo-router';

export const PreviousRoute = () => {

    return (
        <Pressable style={styles.arrow} onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={25} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    arrow: {
        marginRight: "auto",
        marginLeft: 30
    }
})