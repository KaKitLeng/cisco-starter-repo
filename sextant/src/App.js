import './App.css';
import Banner from './components/banner';
import Card from './components/card';

function App() {
  return (
    <>
      <Banner />
      <div className="wrapper">
        <Card 
        img = 'https://i.picsum.photos/id/744/200/300.jpg?hmac=QB_puLFiEKiOkiVJXMeY6ie3KJ4AgggamJiRa4kobOo'
        title = 'testing'
        text = 'I just wanna test my card components'/>
        <Card 
        img = 'https://i.picsum.photos/id/744/200/300.jpg?hmac=QB_puLFiEKiOkiVJXMeY6ie3KJ4AgggamJiRa4kobOo'
        title = 'testing'
        text = 'I just wanna test my card components'/>
        <Card 
        img = 'https://i.picsum.photos/id/744/200/300.jpg?hmac=QB_puLFiEKiOkiVJXMeY6ie3KJ4AgggamJiRa4kobOo'
        title = 'testing'
        text = 'I just wanna test my card components'/>
      </div>
    </>
  );
}

export default App;
