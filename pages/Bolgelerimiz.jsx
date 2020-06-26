import Layout from "../components/Layout";
import { Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
/*
-> react-owl-carousel  indir
-> _app.js e alttakileri ekle:
      import 'owl.carousel/dist/assets/owl.carousel.css';
      import 'owl.carousel/dist/assets/owl.theme.default.css';
-> _document.js alttakini ekle:
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
 */
const options = {
 items: 4,
};
function Bolgelerimiz() {
 return (
  <Layout title={"Bolgelerimiz"} headText={"Bolgelerimiz"}>
   <Button variant="success">BOLGE</Button>

   <OwlCarousel classNameName="owl-theme" loop margin={10} nav>
    <div className="item" className="bg-primary p-4">
     <img
      alt="img1"
      src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png"
     />
    </div>
    <div className="item">
     <img
      alt="img1"
      src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png"
     />
    </div>
    <div className="item">
     <img
      alt="img1"
      src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png"
     />
    </div>
    <div className="item">
     <img
      alt="img1"
      src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png"
     />
    </div>
    <div className="item">
     <img
      alt="img1"
      src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png"
     />
    </div>
    <div className="item">
     <img
      alt="img1"
      src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/car/SVJ_Roadster_gateway%20modelli.png"
     />
    </div>
   </OwlCarousel>
  </Layout>
 );
}

export default Bolgelerimiz;
