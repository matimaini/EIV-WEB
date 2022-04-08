import './App.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./animate.css"
import PageComponent from './components/shared/page/PageComponent';

function App() {
  const loadCaptchaScript = async () => {
    const script = document.createElement('script');
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  useEffect(() => {
    loadCaptchaScript()
  }, [])

  return (
    <div className="App">
      <PageComponent />
    </div>
  );
}

export default App;



