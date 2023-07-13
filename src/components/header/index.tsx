import InputField from "../Input";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2">
                        <h2>Animext</h2>
                    </div>
                    <div className="col-lg-10 text-end">
                        <div className="header__search">
                            <InputField placeholder="Search anime here..." />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;