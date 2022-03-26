import React from "react"
import Layout from "../components/Layout"

// Components
import Header from "../components/Header"
import Article from "../components/Article"
import About from "../components/About"
import Footer from "../components/Footer"
import Offer from "../components/Offer"
import Searchbar from "../components/Searchbar"






const IndexPage = () => (
  <Layout>
    <Header></Header>
    <Searchbar></Searchbar>
    <Article></Article>
    <Offer></Offer>
    <About></About>
    <Footer></Footer>
    
  </Layout>
)



export default IndexPage
