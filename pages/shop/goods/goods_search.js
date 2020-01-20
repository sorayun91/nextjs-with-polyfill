import { useRouter } from "next/router";
import Layout from "../../../components/MyLayout";

export default function GoodsSearch() {
    const router = useRouter();
    return (
        <>
            <Layout>
                {console.log(router)}
                <div className="content">
                    <p>상품검색페이지</p>
                    <p>
                        <b>{router.query.keyword}</b>를 검색했습니다
                    </p>
                </div>
            </Layout>
        </>
    );
}
