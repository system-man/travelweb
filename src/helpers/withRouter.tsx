import React from "react"
import { useNavigate, NavigateFunction } from "react-router-dom"

export interface RouteComponentProps {
    navigate: NavigateFunction
}

export const WithRouter = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate()
        return <Component navigate={navigate} {...props} />   
    };
    return Wrapper;
}
