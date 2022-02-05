import React from "react"
import Layout from "../components/layout"
// Components
import Header from "../components/Header"
import Artikel from "../components/Artikel"
import About from "../components/about"
import Footer from "../components/Footer"
import Searchpage from "../components/Searchpage"
import Anbieten from "../components/Anbieten"


const IndexPage = () => (
  <Layout>
    <Header></Header>
    <Searchpage></Searchpage>
    <Artikel></Artikel>
    <Anbieten></Anbieten>
    <About></About>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
