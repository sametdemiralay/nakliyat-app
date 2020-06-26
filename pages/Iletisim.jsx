import Layout from "../components/Layout";
import { Row, Col, Form, Button } from "react-bootstrap";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import {
 AiTwotoneEnvironment,
 AiOutlineMail,
 AiFillPhone,
} from "react-icons/ai";

function Iletisim() {
 const mapStyles = {
  height: "90vh",
  width: "100%",
 };

 const defaultCenter = {
  lat: 41.0851,
  lng: 28.8734,
 };

 return (
  <Layout title={"İletişim"} headText={"İletişim"}>
   <Row className="mb-3">
    <Col md={8} className="mb-3">
     <LoadScript googleMapsApiKey="AIzaSyCFqfkDMhBF2nOFoVfol5nDp3x8NAGm8Qg">
      <GoogleMap
       mapContainerStyle={mapStyles}
       zoom={11}
       center={defaultCenter}
      />
     </LoadScript>
    </Col>
    <Col md={4}>
     <h5 className="text-primary">İLETİŞİM BİLGİLERİ</h5>
     <Row>
      <Col sm={2}>
       <AiTwotoneEnvironment />
      </Col>
      <Col sm={10}>
       Güvercintepe Mahallesi, Beytepe Sk. No:32, 34494 Başakşehir/İstanbul -
       Türkiye
      </Col>
     </Row>
     <hr />
     <Row>
      <Col sm={2}>
       <AiFillPhone />
      </Col>
      <Col sm={10}>
       0 212 687 54 01
       <br />
       0531 797 83 43
      </Col>
     </Row>
     <hr />
     <Row className="mb-4">
      <Col sm={2}>
       <AiOutlineMail />
      </Col>
      <Col sm={10}>info@acarrnakliyat.com</Col>
     </Row>

     <h5 className="text-primary">Bize Mesaj Gönderin</h5>
     <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
       <Form.Control type="text" placeholder="Adınız Soyadınız" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
       <Form.Control type="email" placeholder="Mail Adresiniz" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
       <Form.Control type="tel" placeholder="Telefon Numaranız" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
       <Form.Control as="textarea" rows="3" placeholder="Masajınız" />
      </Form.Group>
      <Button type="submit" variant="dark">
       Gönder
      </Button>
     </Form>
    </Col>
   </Row>
  </Layout>
 );
}

export default Iletisim;
