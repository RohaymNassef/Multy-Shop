import React from 'react';
import Header from "../../components/header/Header.jsx";
import Service from "../../components/service/Service.jsx";
import Featureproducts from "../../components/FeatureProducts/Featureproducts.jsx";
import Categories from "../../components/categories/Categories.jsx";
import Vendor from "../../components/vendor/Vendor.jsx";

const Home = ({addToCart , addToWatchList ,}) => {
  return (
    <div>
      <Header/>
      <Service/>
      <Categories/>
      <Featureproducts addToCart={addToCart} addToWatchList={addToWatchList}/>
      <Vendor/>
    </div>
  );
}

export default Home;
