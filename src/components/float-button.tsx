import { type PropsWithChildren } from "react"
import { Pressable, StyleSheet } from "react-native"

interface FloatButtonProps {
    backgroundColor?: string,
}

export const FloatButton = ({ children, backgroundColor }: PropsWithChildren<FloatButtonProps>) => {
    return (
        <Pressable style={floatButtonStyles(backgroundColor).container}>
            {children}
        </Pressable>
    )
}

const floatButtonStyles = (backgroundColor?: string) => StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 50,
        bottom: 0,
        right: 0,
        position: "absolute",
        backgroundColor: backgroundColor ? backgroundColor : "black"
    }
})