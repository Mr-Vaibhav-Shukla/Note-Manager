import s from "./style.module.css"
import { Logo } from "../logo/index"
import logoSrc from "assets/images/logo.png"
import {Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUser } from "store/auth/auth-selector"
import { AuthApi } from "api/auth-api"
import { useDispatch } from "react-redux"
import { setUser } from "store/auth/auth-slice"

export function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const signOut = async () => {
        await AuthApi.signout()
        dispatch(setUser(null))
        navigate("/")
    }
    const renderProfile = () => {
        return (
            <>
                <img src={`https://api.dicebear.com/5.x/bottts/svg?seed=${user.email}`} alt="user" style={{width: 40}} className="rounded-circle"/>
                <div>Hello, {user.email}</div>
                <Link onClick={signOut}>SignOut</Link>
            </>
        )
    }
    return (
        <>
            <div className={`row ${s.container}`}>
                <div className="col-xs-12 col-sm-4">
                    <Logo
                    onClick={() => navigate("/")}
                    title="Notematic"
                    subtitle={"Manage Your Notes"}
                    image =  {logoSrc}
                    />
                </div>
                <div className="col-xs-12 col-sm-8 text-end">
                    {renderProfile()}
                </div>

            </div>
        </>
    )
}