import { Dispatch } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../Store/Store"
import { toggleAsideMenu } from "../Store/Slices/AsideMenuSlice"

const useAside = () => {
    const dispatch = useDispatch<Dispatch>()
    const asideState = useSelector((state: RootState) => (state.asideMenu.isAsideOpen))

    const setAsideState = () => dispatch(toggleAsideMenu())

    return {asideState, setAsideState}
}

export default useAside;