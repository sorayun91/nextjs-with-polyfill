import Link from "next/link";
import SearchInput from "./SearchInput";

export default function Header() {
    return (
        <header>
            <div className="wrap_header">
                <Link href="/">
                    <a className="logo">Home</a>
                </Link>
                <SearchInput />
            </div>
        </header>
    );
}
