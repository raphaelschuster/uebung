import React from "react"
import Layout from "../components/layout"
// Components
import Header from "../components/Header"
import Artikel from "../components/Artikel"
import About from "../components/about"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import Searchpage from "../components/Searchpage"


const IndexPage = () => (
  <Layout>
    <Header></Header>
    <Searchpage></Searchpage>
    <Artikel></Artikel>
    <About></About>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
