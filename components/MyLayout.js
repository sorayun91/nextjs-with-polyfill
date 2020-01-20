import Header from "./Header";
import Footer from "./Footer";
import SideElements from "./SideElements";

export default function Layout(props) {
    return (
        <>
            <Header />
            <div className="main">{props.children}</div>
            <SideElements />
            <Footer />
        </>
    );
}
