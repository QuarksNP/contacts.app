import { StyleSheet, Text, View } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import { Search } from "../../../components/search";
import { ListOfFavorites } from "../../../components/list-of-favorites";
import { CONTACTS } from "../../../constants/testing_contacts";
import { FloatButton } from "../../../components/float-button";
import { ListOfContacts } from "../../../components/list-of-contacts";

export default function Home() {
    return (
        <View style={styles.container}>
            <Search placeholder="Search your contacts" iconName="user" />

            <View style={styles.list_of_favorites_container}>
                <View style={styles.fav_des_container}>
                    <AntDesign name="hearto" size={25} />
                    <Text>Favorites</Text>
                </View>

                <ListOfFavorites favorites={CONTACTS} route="../(contact)/[id]"/>
            </View>

            <View style={styles.list_of_contacts_container}>
                <ListOfContacts contacts={CONTACTS} route="../(contact)/[id]"/>
            </View>

            <FloatButton backgroundColor="#265073">
                <AntDesign name="plus" size={30} color="white" />
            </FloatButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
        flex: 1,
        gap: 20,
        padding: 20,
    },

    list_of_favorites_container: {
        display: "flex",
        gap: 20,
        backgroundColor: "#F9E8C9",
        padding: 20,
        borderRadius: 10,
    },

    fav_des_container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginLeft: 20
    },

    list_of_contacts_container: {
        flex: 1,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F7DED0",
        padding: 20,
        borderRadius: 10,
    }
})