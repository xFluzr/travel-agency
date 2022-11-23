import './App.css';
import ContactMeForm from './components/ContactMe/ContactMeForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ListOfPlaces from './components/ListOfPlaces/ListOfPlaces';
import Navbar from './components/Navbar/Navbar';
import UserOpinions from './components/UserOpinions/UserOpinions';

const App=()=> {
  return (
    <>
      <Navbar/>
      <Header/>
      <ListOfPlaces/>
      <UserOpinions/>
      <ContactMeForm/>
      <Footer/>
    </>
  );
}

export default App;
