import { SafeAreaView, FlatList, View, Text, Image, StyleSheet, Pressable } from "react-native"

import { BasicContactWithNumberType } from "../types"

import { ToDetails } from "./to-details"

import { MaterialIcons } from '@expo/vector-icons';

interface ContactItemProps extends BasicContactWithNumberType {
    route: any

}

interface ListOfContactsProps {
    contacts: BasicContactWithNumberType[],
    route: any
}


const ContactItem = ({ name, picture, number, id, route }: ContactItemProps) => {
    return (
        <ToDetails path={route} param={{ id }}>
            <Pressable style={styles.contact_container}>
                <Image style={styles.profile} source={picture} />

                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.phone}>{number}</Text>
                </View>

                <MaterialIcons style={styles.next} name="navigate-next" size={30} color="black" />
            </Pressable>
        </ToDetails>
    )
}


export const ListOfContacts = ({ contacts, route }: ListOfContactsProps) => {
    return (
        <SafeAreaView>
            <FlatList
                contentContainerStyle={styles.container}
                data={contacts}
                keyExtractor={favorite => favorite.id}
                renderItem={({ item }) => <ContactItem {... { ...item, route }} />}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    profile: {
        width: 75,
        height: 75,
        borderRadius: 75,
    },

    contact_container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F8D7C4",
        position: "relative",
        borderRadius: 10,
        gap: 10,
        padding: 20,
    },

    container: {
        display: "flex",
        gap: 20
    },

    name: {
        fontSize: 20,
        fontWeight: "bold"
    },

    phone: {
        fontSize: 20,
        color: "#2997FF"
    },

    next: {
        position: "absolute",
        right: 0
    }
})