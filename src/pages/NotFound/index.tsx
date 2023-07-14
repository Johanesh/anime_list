import Link from "next/link";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h3>Not Found</h3>
            <Link href="/">
                <button>Get me out!</button>
            </Link>
        </div>
    )
}

export default NotFound;