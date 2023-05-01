import "./home.css"
import { NavBar } from '../../components/navbar/NavBar'
import { Header } from '../../components/header/Header'
import { Featured } from '../../components/featured/Featured'
import { PropertyList } from "../../components/propertyList/PropertyList"
import { FeaturedProperties } from "../../components/featuredProperties/FeaturedProperties"
import { MailList } from "../../components/mailList/MailList"
import { Footer } from "../../components/footer/Footer"

export const Home = () => {
  return (
    <div>
      <NavBar />
    <Header />
    <div className="homeContainer">
      <Featured />
      <h1 className="homeTitle">Browse By Properties</h1>
      <PropertyList/>
      <h1 className="homeTitle">Home Guests Love</h1>
      <FeaturedProperties/>
      <MailList />
      <Footer />
    </div>
    </div>  
   
  )
}
