import s from "./style.module.css";
import { Input } from "components/Input/Input";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";
import { AuthLayout } from "Layouts/AuthLayout/AuthLayout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthApi } from "api/auth-api";
import { setUser } from "store/auth/auth-slice";
import { toast } from "services/sweet-alert2";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (password === password2) {
        const user = await AuthApi.signup(email, password);
        dispatch(setUser(user));
        await toast("success", "Sign Up Successful. You are now logged in.");
        navigate("/");
      }
      else{
        throw new Error("Confirm Password must be same.")
      }
    } catch (error) {
      await toast("error", error.message);
    }
  };

  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        SignUp <br />
        to access your team notes
      </h2>
      <form className={s.formGroup} onSubmit={submit}>
        <Input placeholder={"Email"} onTextChange={setEmail} />
        <Input
          placeholder={"Password"}
          onTextChange={setPassword}
          type="password"
        />
        <Input
          placeholder={"Confirm Password"}
          onTextChange={setPassword2}
          type="password"
        />
        <ButtonPrimary type={"submit"} className={s.button}>
          SignUp
        </ButtonPrimary>
        <span>
          Already have an account? <Link to="/signin">SignIn</Link>
        </span>
      </form>
    </div>
  );
  return (
    <>
      <AuthLayout>{form}</AuthLayout>
    </>
  );
}
