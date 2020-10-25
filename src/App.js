import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card className="mainCard">
        <Card.Title className="cardHandWrite">Dear Dian</Card.Title>
        <Card.Body className="cardContent">
          Hallo, wah ga terasa yah 18 tahun lalu di tanggal dan bulan ini,
          lahir anak perempuan dengan tangisan, mungkin karna dia tau dunia ini 
          keras, dia takut. Tapi liat dia sekarang, udah menjalani hidup 18 tahun, 
          semakin hari menjadi semakin kuat, terkadang dia juga ingin menyerah, untungnya 
          keinginan itu sirna :), terimakasih sudah kuat.
          <br />
          <br />
          Yap, dia adalah kamu, Selamat ulang tahun dian, doanya kamu doa sendiri aja yah
          sesuai keinginan, dan harapan kamu, aku bantu aamiin-in, kalo kamu
          merasa tidak ada kado spesial tahun ini, tau ga kenapa ?, gada kado 
          yang lebih spesial dari lahirnya kamu 18 tahun lalu, nah tiap tahun 
          tuh sebenernya merayakan spesialnya kado ituuu
          <br />
          <br />
          udah kepanjangan nih suratnyaa, terakhiran deh
          <br />
          <br />
          Jangan lupa modol hari ini :D

        </Card.Body>
        <Card.Title className="cardHandWrite">-HnF-</Card.Title>
      </Card>
    </div>
  );
}

export default App;
