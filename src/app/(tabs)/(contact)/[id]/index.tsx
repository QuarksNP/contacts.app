import { useLocalSearchParams } from "expo-router"

import { AntDesign } from '@expo/vector-icons';

import { Image, StyleSheet, Text, View } from "react-native"

import { CONTACTS } from "../../../../constants/testing_contacts"
import { PreviousRoute } from "../../../../components/previous-page";

export default function ContactDetails() {

    const { id } = useLocalSearchParams()

    const filteredContacts = CONTACTS.filter(contact => contact.id === id)
    
    const contact = filteredContacts[0]

    return (
        <View style={styles.container}>
            <PreviousRoute />
            <View style={styles.basic_info_container}>
                <Image style={styles.profile_picture} source={contact.picture}/>
                <Text style={styles.name}>{contact.name}</Text>
                <Text style={styles.phone}>{contact.number}</Text>
            </View>

            <View style={styles.actions_container}>
                <AntDesign style={styles.action} name="edit" size={30}  />
                <AntDesign style={styles.action}  name="delete" size={30}  />
                <AntDesign style={styles.action}  name="hearto" size={30} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 60
    },

    basic_info_container: {
        display: "flex",
        alignItems: "center",
        gap: 10
    },

    profile_picture: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    
    name: {
        fontSize: 30,
        fontWeight: "bold"
    },

    phone: {
        fontSize: 20,
        color: "#2997FF"
    },

    actions_container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: 20,
        justifyContent: "space-between"
    },

    action: {
        backgroundColor: "#F1FADA",
        padding: 30,
        borderRadius: 20
    }
})