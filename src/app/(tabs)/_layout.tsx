import { Tabs } from "expo-router";

import { AntDesign } from '@expo/vector-icons';

export default function RootLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="(contact)/index" options={{ title: 'Contacts', tabBarIcon: () => <AntDesign name="contacts" size={30} color='black' /> }} />
            <Tabs.Screen name="(contact)/[id]/index" options={{ href: null, title: "Details" }} />
        </Tabs>
    )
}