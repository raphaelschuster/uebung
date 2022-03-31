import React from "react"
import Layout from "../components/Layout"

// Components
import Header from "../components/Header"
import Footer from "../components/Footer"
import Offer from "../components/Offer"
import Searchbar from "../components/Searchbar"
//import AllArticles from "../components/AllArticles"
//import Artikel from "../components/Einzelartikel"
//import Bid from "../components/Bid"



const IndexPage = () => (
  <Layout>
    <Header></Header>
    <Searchbar></Searchbar>
    <Offer></Offer>
     <Footer></Footer>
  </Layout>
)



export default IndexPage
