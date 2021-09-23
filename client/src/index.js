import React from 'react';
import ReactDOM from 'react-dom';



// COMPONENTS
import Header from './components/header';
import SelfIntro from './components/self-intro';
import ArticlesListPreview from './components/article-list';
import Footer from './components/footer';
import Suscribe from './components/suscribe';
import SocialMedias from './components/social-medias';




const App = () => {
  return (
    <div>
      <Header/>
      <ArticlesListPreview />
      <SelfIntro />
      <div className="social-media">
        <SocialMedias />
      </div>
      <Suscribe />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));

