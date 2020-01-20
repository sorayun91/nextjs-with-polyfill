export default function SideElements() {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };
    return (
        <a className="bt_scroll_top" onClick={scrollTop}>
            맨 위로가기
        </a>
    );
}
