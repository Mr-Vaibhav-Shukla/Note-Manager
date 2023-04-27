import s from "./style.module.css"
import { Logo } from "../logo/index"
import logoSrc from "assets/images/logo.png"
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary"
import {useNavigate } from "react-router-dom"

export function Header() {
    const navigate = useNavigate()
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
                    <ButtonPrimary onClick={()=> navigate("/note/new")}>Add Note +</ButtonPrimary>
                </div>

            </div>
        </>
    )
}