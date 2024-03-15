import type { ImageSourcePropType } from "react-native"

export type BasicContactType = {
    id: string,
    name: string,
    picture: ImageSourcePropType
}

export type BasicContactWithNumberType = BasicContactType & {
    number: string
}