//import { useState } from 'react';
import './App.css';
import Banner from './components/banner';
import Card from './components/card';
import AddressDisplay from './components/ipAddress';
import PylonConnector from './components/pylonConnector';

function App() {
//   const [ip6, setIp6] = useState('')
//   fetch('https://api64.ipify.org?format=json')
//     .then(results => results.json())
//     .then(data => setIp6(data.ip));

//     const [ip4, setIp4] = useState('')
//     fetch('https://api.ipify.org?format=json')
//       .then(results => results.json())
//       .then(data => setIp4(data.ip));
    
  return (
    <>
      <Banner />
      <div className="wrapper">
        <Card
        // img = 'https://i.picsum.photos/id/744/200/300.jpg?hmac=QB_puLFiEKiOkiVJXMeY6ie3KJ4AgggamJiRa4kobOo'
        //text = 'Public IPv4'
        name = 'Public IPv4'>
            <AddressDisplay url = 'https://api.ipify.org?format=json' />
        </Card>
        <Card 
        //img = 'https://i.picsum.photos/id/744/200/300.jpg?hmac=QB_puLFiEKiOkiVJXMeY6ie3KJ4AgggamJiRa4kobOo'
        //title = 'testing'
        name = 'Public IPv6'>
            <AddressDisplay url = 'https://api64.ipify.org?format=json' />
        </Card>
        <Card name = 'Pylon Packet Latency'>
          <PylonConnector />
        </Card>
      </div>
    </>

  );
}

export default App;
