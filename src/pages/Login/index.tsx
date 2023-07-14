'use client'

import InputField from "@/components/Input";
import { LoadingContext } from "@/context/Loading";
import { accountData } from "@/general/account";
import { isEmailFormat } from "@/utils/Validator";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Login = () => {
    const router = useRouter();
    const islogin = getCookie("isLoggedIn");
    const {setIsLoading} = useContext(LoadingContext);
    const [data, setData] = useState<LoginData>({
        email: "",
        password: "",
    });
    const [error, setError] = useState<LoginData>({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (islogin) {
            setIsLoading(true);
            router.push('/anime');
        } else {
            setIsLoading(false);
        }
    }, [islogin]);

    const handleLogin = () => {
        const result = accountData.some((item: LoginData) => {
            if (item.email === data.email && item.password === data.password) {
                return true;
            }
        })

        if (result) {
            setCookie("isLoggedIn", true)
            router.push('/anime');
        } else {
            setErrorMessage("Invalid Account!");
            setIsLoading(false);
        }
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let isError = false;
        let key: keyof LoginData;
        let newErrorObj = Object.assign({}, error);
        for (key in data) {
            if (key === "email" && !isEmailFormat(data[key])) {
                newErrorObj[key] = "Wrong email format";
                isError = true;
            }

            if (!data[key]) {
                newErrorObj[key] = "Field is empty";
                isError = true;
            }
        }

        if (isError) {
            setError(newErrorObj);
        } else {
            setIsLoading(true);
            handleLogin();
        }
    };

    const onChangeHandler = (value: string, name: string) => {
        let newDataObj = Object.assign({}, data, {[name]: value});
        let newErrorObj = Object.assign({}, error, {[name]: ""});
        setData(newDataObj);
        setError(newErrorObj);
    };

    return (
        <div className="login">
            <div className="text-center">
                <h2>Welcome</h2>
            </div>
            {
                errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
            }
            <form onSubmit={(e) => submitHandler(e)}>
                <div className="login__field">
                    <label>Email</label>
                    <InputField name="email" value={data.email} onChange={onChangeHandler}/>
                    <div className="login__error">{error.email}</div>
                </div>
                <div className="login__field">
                    <label>Password</label>
                    <InputField type="password" name="password" value={data.password} onChange={onChangeHandler}/>
                    <div className="login__error">{error.password}</div>
                </div>
                <div className="login__button">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;