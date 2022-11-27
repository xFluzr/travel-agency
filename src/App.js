import './App.css';
import React,{useState,useEffect} from 'react';
import ContactMeForm from './components/ContactMe/ContactMeForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ListOfPlaces from './components/ListOfPlaces/ListOfPlaces';
import Navbar from './components/Navbar/Navbar';
import UserOpinions from './components/UserOpinions/UserOpinions';
import ClipLoader from "react-spinners/ClipLoader"

const App=()=> {
  const [loading,setLoading]=useState(false);
  const override={
    position:"absolute",
    left:"45%",
    top:"45%"
  }

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[]);

  return (
    <>
    {loading?
      <ClipLoader
      cssOverride={override}
      color="#ff2c25"
      size={100}
      loading={loading}
      speedMultiplier={0.7}
    />:<>
      <Navbar/>
      <Header/>
      <ListOfPlaces/>
      <UserOpinions/>
      <ContactMeForm/>
      <Footer/>
      </>}
    </>
    
  );
}

export default App;
