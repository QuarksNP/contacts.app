import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native"

import type { BasicContactType } from "../types"

import { Link } from "expo-router"

import { ToDetails } from "./to-details"

interface FavoriteItemProps extends BasicContactType {
    route: any
}

interface ListOfFavoritesProps {
    favorites: BasicContactType[],
    route: any
}

const FavoriteItem = ({ route, name, picture, id }: FavoriteItemProps) => {
    return (
        <ToDetails path={route} param={{ id }}>
            <Pressable style={styles.favorite_container}>
                <Image style={styles.profile} source={picture} />
                <Text>{name}</Text>
            </Pressable>
        </ToDetails>
    )
}

export const ListOfFavorites = ({ favorites, route }: ListOfFavoritesProps) => {
    return (
        <SafeAreaView>
            <FlatList
                horizontal
                contentContainerStyle={styles.container}
                data={favorites}
                keyExtractor={favorite => favorite.id}
                renderItem={({ item }) =>
                    <FavoriteItem {... { ...item, route }} />}
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

    favorite_container: {
        display: "flex",
        alignItems: "center",
        gap: 10,
    },

    container: {
        display: "flex",
        gap: 20
    }
})