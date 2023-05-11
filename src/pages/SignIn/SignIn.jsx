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

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthApi.signin(email, password);
      dispatch(setUser(user));
      await toast("success", "Logged in successfully");
      navigate("/");
    } catch (error) {
      await toast("error", error.message);
    }
  };

  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signin <br />
        to access your team notes
      </h2>
      <form className={s.formGroup} onSubmit={submit}>
        <Input placeholder={"Email"} onTextChange={setEmail} />
        <Input
          placeholder={"Password"}
          onTextChange={setPassword}
          type="password"
        />
        <ButtonPrimary type={"submit"} className={s.button}>
          Sign in!
        </ButtonPrimary>
        <span>
          Don't have an account yet ? <Link to="/signup">Signup</Link>
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
