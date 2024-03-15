import { Link } from "expo-router"

import { type PropsWithChildren } from "react"

interface ToDetailsProps {
    path: string,
    param: {
        id: string
    }
}

export const ToDetails = ({ children, path, param }: PropsWithChildren<ToDetailsProps>) => {
    return (
        <Link asChild href={{ pathname: path, params: param }}>
            {children}
        </Link>
    )
}