import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <header>
      <a href="index.html" id="logo">
        <img src="/website_images/LD_logo.svg" alt="Legodudes" />
      </a>
      <button id="shoppingcart" onClick={handleClick}>
        <span id="cartcount">{cartCount}</span>{" "}
        {/* Viser antall varer i handlekurven */}
        <img src="/website_images/legocart.svg" alt="Handlevogn" />
      </button>

      {/* Navigasjonskomponenten */}
        <nav>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              {/* Konstruert category-path via Link-komponent for å støtte React Router*/}
              <Link to={`/category/${category.slug}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default App
