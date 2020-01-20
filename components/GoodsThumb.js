import Link from "next/link";

export default function GoodsThumb(props) {
    return (
        <>
            <Link href={`/shop/goods/goods_view/${props.data.idx}`}>
                <div className="item">
                    <div className="thumb">
                        <a className="img">
                            <img
                                src={props.data.image_sub}
                                alt={props.data.subject}
                                onError={e =>
                                    (e.target.src =
                                        "https://res.kurly.com/mobile/img/1808/img_none_x2.png")
                                }
                            />
                        </a>
                        <Link
                            href="/shop/goods/goods_view/[id]"
                            as={`/show/goods/goods_view/${props.data.idx}`}
                        >
                            <div className="group_btn">
                                <button type="button" className="btn btn_cart"></button>
                            </div>
                        </Link>
                    </div>
                    <a className="info">
                        <span className="name">{props.data.subject}</span>
                        <span className="cost">
                            <span className="dc">{props.data.oprice}원</span>
                            <span className="emph"> → </span>
                            <span className="price">{props.data.sprice}원</span>
                        </span>
                        <span className="desc">{props.data.context}</span>
                    </a>
                </div>
            </Link>
        </>
    );
}
