import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { getCookie, setCookie } from "cookies-next";
import { LoadingContext } from "@/context/Loading";

const Header = () => {
    const router = useRouter();
    const islogin = getCookie("isLoggedIn");
    const {setIsLoading} = useContext(LoadingContext);

    const logout = () => {
        setCookie("isLoggedIn", false);
        setIsLoading(true);
        router.push('/');
    }

    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6">
                        <h2>Animext</h2>
                    </div>
                    <div className="col-6 text-end">
                        {
                            islogin && (
                                <div className="d-inline-block header__logout" onClick={() => logout()}>
                                    <FontAwesomeIcon icon={faPowerOff}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;