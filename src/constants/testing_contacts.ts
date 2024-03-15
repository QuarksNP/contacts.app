import { BasicContactWithNumberType } from "../types";

const alexaPicture = require("../assets/beautiful-smiling-woman-with-long-hair-standing-against-blue.jpg")
const anaPicture = require("../assets/confident-asian-woman.jpg")
const AlexPicture = require("../assets/middle-age-grey-haired-man-wearing-casual-clothes-pointing-fingers-camera-with-happy-funny-face-good-energy-vibes.jpg")
const TifannyPicture = require("../assets/nice-work-you-did-great-satisfied-happy-charming-assertive-supportive-redhead-woman-purple-sweater-smiling-winking-approval-showing-okay-gesture-liking-product-violet-wall.jpg")
const AlejandraPicture = require("../assets/woman-portrait-walking-street.jpg")


export const CONTACTS: BasicContactWithNumberType[] = [
    {
        id: "sw2",
        name: "Alexa 👽",
        number: "+18493677774",
        picture: alexaPicture
    },
    {
        id: "sw3",
        name: "Ana 🙄",
        number: "+18493677774",
        picture: anaPicture
    },
    {
        id: "sw4",
        name: "Alex 🤠",
        number: "+18493677774",
        picture: AlexPicture
    },
    {
        id: "sw5",
        name: "Tifanny 😜",
        number: "+18493677774",
        picture: TifannyPicture
    },
    {
        id: "sw6",
        name: "Alejandra 😴",
        number: "+18493677774",
        picture: AlejandraPicture
    },
]