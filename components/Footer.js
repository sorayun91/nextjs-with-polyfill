export default function Footer() {
    return (
        <div className="footer">
            <div className="inner_footer">
                <div className="footer_cc">
                    <h2 className="tit_cc">고객행복센터</h2>
                    <div className="cc_view cc_call">
                        <h3>
                            <span className="tit">1644-1107</span>
                        </h3>
                        <dl className="list">
                            <dt>365고객센터</dt>
                            <dd>오전 7시 - 오후 7시</dd>
                        </dl>
                    </div>
                    <div className="cc_view cc_kakao">
                        <h3>
                            <a className="tit" href="#none">
                                카카오톡 문의
                            </a>
                        </h3>
                        <dl className="list">
                            <dt>365고객센터</dt>
                            <dd>오전 7시 - 오후 7시</dd>
                        </dl>
                    </div>
                    <div className="cc_view cc_qna">
                        <h3>
                            <a className="tit">1:1 문의</a>
                        </h3>
                        <dl className="list">
                            <dt>24시간 접수 가능</dt>
                            <dd>
                                고객센터 운영시간에 순차적으로
                                답변해드리겠습니다.
                            </dd>
                        </dl>
                    </div>
                </div>

                <div className="company">
                    <ul className="list">
                        <li>
                            <a className="link">회사소개</a>
                        </li>
                        <li>
                            <a className="link">소개영상</a>
                        </li>
                        <li>
                            <a className="link">인재채용</a>
                        </li>
                        <li>
                            <a className="link">이용약관</a>
                        </li>
                        <li>
                            <a className="link emph">개인정보처리방침</a>
                        </li>
                        <li>
                            <a className="link">이용안내</a>
                        </li>
                    </ul>
                    <p>
                        법인명 : ㈜제이슨그룹
                        <span className="bar">I</span>사업자등록번호 :
                        261-81-23567
                        <br />
                        통신판매업 : 제 2020-서울강남-00000 호
                        <span className="bar">I</span>개인정보보호책임자 :
                        ㅇㅇㅇ
                        <br />
                        주소 : 서울시 용산구 한강대로 252 (남영동, 우리빌딩)
                        <span className="bar">I</span>대표이사 : ㅇㅇㅇ
                        <br />
                        입점문의 :
                        <a target="_blank" className="link">
                            입점문의하기
                        </a>
                        <span className="bar">I</span>제휴문의 :
                        <a
                            href="mailto:business@jasongroup.com"
                            className="link"
                        >
                            business@jasongroup.com
                        </a>
                        <br />
                        채용문의 :
                        <a
                            href="mailto:recruit@jasongroup.com"
                            className="link"
                        >
                            recruit@jasongroup.com
                        </a>
                        <br />
                        팩스: 070 - 0000 - 0000 <span className="bar">I</span>
                        이메일 :
                        <a href="mailto:help@jasongroup.com" className="link">
                            help@jasongroup.com
                        </a>
                        <br />
                        <em className="copy">© JASON. ALL RIGHTS RESERVED</em>
                    </p>
                </div>
            </div>
            <div className="footer_link">
                <ul className="list_sns">
                    <li>
                        <a className="link_sns" target="_blank">
                            <img
                                src="https://res.kurly.com/pc/ico/1810/ico_instagram.png"
                                alt="인스타그램 바로가기"
                            />
                        </a>
                    </li>
                    <li>
                        <a className="link_sns" target="_blank">
                            <img
                                src="https://res.kurly.com/pc/ico/1810/ico_fb.png"
                                alt="페이스북 바로가기"
                            />
                        </a>
                    </li>
                    <li>
                        <a className="link_sns" target="_blank">
                            <img
                                src="https://res.kurly.com/pc/ico/1810/ico_blog.png"
                                alt="네이버블로그 바로가기"
                            />
                        </a>
                    </li>
                    <li>
                        <a className="link_sns" target="_blank">
                            <img
                                src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png"
                                alt="유튜브 바로가기"
                            />
                        </a>
                    </li>
                    <li>
                        <a className="link_sns lst" target="_blank">
                            <img
                                src="https://res.kurly.com/pc/ico/1810/ico_youtube.png"
                                alt="유튜브 바로가기"
                            />
                            >
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
