import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './components/main/mainpage/mainpage';
import Header from './components/header/header';
import WhyWe from './components/main/whywe/whywe';
import TimeToBuy from './components/main/timetobuy/timetobuy';
import Sales from './components/main/timetobuy/sales/sales';
import Reviews from './components/main/buyer/reviews/reviews';
import Buyer from './components/main/buyer/buyer';
import Addrewiev from './components/main/buyer/addrewiev/addrewiev';
import Faq from './components/main/faq/faq';
import Faqcontains from './components/main/faq/faqcontains/faqcontains';
import Coop from './components/main/coop/coop';
import Feedback from './components/main/feedback/feedback';
import Footer from './components/footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <main>
      <MainPage/>
      <WhyWe/>
      <TimeToBuy/>
      <Sales />
      <Buyer/>
      <Reviews/>
      <Addrewiev/>
      <Faq/>
      <Faqcontains/>
      <Coop/>
      <Feedback/>
    </main>
    <Footer/>
  </React.StrictMode>
);
