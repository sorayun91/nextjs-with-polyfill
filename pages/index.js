import Head from "next/head";
import { goodsApi } from "./api";
import Layout from "../components/MyLayout";
// import MainSlider from "../components/MainSlider";
import GoodsThumb from "../components/GoodsThumb";
// import "../style/common.scss";

const Index = props => (
    <>
        <Head>
            <title>Main</title>
        </Head>

        <Layout>
            {/* <MainSlider /> */}
            <div className="content">
                <ul className="wrap_item">
                    {props.json.contents &&
                        props.json.contents.map(item => (
                            <li key={item.idx}>
                                <GoodsThumb data={item} />
                            </li>
                        ))}
                    {console.log(props.json)}
                </ul>
            </div>
        </Layout>
    </>
);

Index.getInitialProps = async function() {
    const res = await goodsApi.main(0);
    const data = await res.data;
    return {
        json: data,
    };
};

export default Index;
