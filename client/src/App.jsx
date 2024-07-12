import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function loadRazorPay() {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    document.body.appendChild(script);
    // script.onload = handleSubmit;
  }

  loadRazorPay()

  return (
    <>
      <div className="visme_d" data-title="Contact Us Contact Form" data-url="rx7oqp3o-contact-us-contact-form?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="82362"></div>
    </>
  )
}

export default App
