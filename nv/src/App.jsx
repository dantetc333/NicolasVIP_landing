import AboutUsComponent from "./components/AboutUsComponent"
import BenefitComponent from "./components/BenefitComponent"
import { ContentComponent } from "./components/ContentComponent"
import FooterComponent from "./components/FooterComponent"
import NavbarComponent from "./components/NavbarComponent"
import PresentationComponent from "./components/PresentationComponent"
import PromotionComponent from "./components/PromotionComponent"

function App() {
  return (
    <>
      <ContentComponent>
        <NavbarComponent />
        <PresentationComponent />
        <PromotionComponent />
        <AboutUsComponent />
      </ContentComponent>

      <BenefitComponent />
      <FooterComponent />
    </>
  )
}

export default App
