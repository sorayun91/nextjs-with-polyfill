import React, { useState } from "react";
import Router from "next/router";

export default function SearchInput() {
    const [searchText, setSearchText] = useState("햇올리브유 기획전");

    return (
        <div className="search_input">
            <input
                type="text"
                value={searchText}
                required="required"
                label="검색어"
                onChange={({ target: { value } }) => setSearchText(value)}
                onKeyPress={e => {
                    e.charCode == 13 &&
                        Router.push({
                            pathname: "/shop/goods/goods_search",
                            query: { keyword: searchText },
                        });
                }}
            />
            <button
                className="bt_search"
                onClick={() =>
                    Router.push({
                        pathname: "/shop/goods/goods_search",
                        query: { keyword: searchText },
                    })
                }
            ></button>
        </div>
    );
}
