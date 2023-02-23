import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import React from "react";
import Topbar from "@/components/React/global-components/topbar";
import EstateSearchList from "@/components/Estate/estate-search-list";
import { apiURL } from "@/constants";


function SearchResults ({searchData, searchDataURL}) {
    return <div>
        <Topbar />
        <Navbar />
        <EstateSearchList searchData={searchData} searchDataURL={searchDataURL}/>
        <Footer />
    </div>
}

export async function getServerSideProps(context) {

    const  query  = context.query;
    const queryData = Object.entries(query);

    console.error('queryData');
    console.error(queryData);
    let queryURL = '';
    queryData.forEach(function(param){
        if(param[0] === 'prices' && param[1].length > 0) {
            let pricesRange = param[1].split('-');
            console.error('pricesRange');
            console.error(pricesRange);
            queryURL += 'filter[price_from]=' +pricesRange[0]+'&'+'filter[price_to]=' +pricesRange[1]+'&';
        } else {
            queryURL += 'filter['+param[0]+']' + '='+param[1]+'&';
        }
    });

    const data = await fetch(apiURL+"api/estates/filter/estates?" + queryURL);
    const searchData = await data.json();
    const searchDataURL = apiURL+"api/estates/filter/estates?" + queryURL;

    console.error(searchDataURL);
    return { props: { searchData, searchDataURL } };
}

export default SearchResults
