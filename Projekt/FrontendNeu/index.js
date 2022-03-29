import React from "react"
import Layout from "../components/Layout"

// Components
import Header from "../components/Header"
//import Artikel from "../components/Artikel"
import About from "../components/About"
import Footer from "../components/Footer"
import Offer from "../components/Offer"
import Searchbar from "../components/Searchbar"
import Article from "../components/AlleArtikel"
import Artikel from "../components/Einzelartikel"




const IndexPage = () => (
  <Layout>
    <Header></Header>
    <Searchbar></Searchbar>
    {/* <Artikel></Artikel> */}
    <Offer></Offer>
    <About></About>
    <Artikel></Artikel>
    <Footer></Footer>
    <Article></Article>
    
  </Layout>
)



export default IndexPage
