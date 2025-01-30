import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Exo1 from './components/exo1/Exo1'
import Exo2 from './components/exo2/Exo2'
import Exo5 from './components/exo5/Exo5'
import Exo3 from './components/exo3/Exo3'

function App() {
  const [counter, setCounter] = useState(0)
  const [textContent, setTextContent] = useState("")
  const [currentInputValue, setCurrentInputValue] = useState("")
  const [focus, setFocus] = useState(false)

  return (
    <>
      <h1>EXO 1</h1>
      <p>
        <b>Réaliser un nombre qui s'incrémente de 1 à chaque click du button</b>
        <br />
        <i>le composant est un btn qui chnage la valeur de counter par counter + 1</i>
      </p>
      <Exo1 counter={counter} setCounter={setCounter}/>
      <hr />
      <h1>EXO 2</h1>
      <p>
        <b>Créer une balise p avec du texte, la valeur par défaut du texte est remplacée par ce que tu tapes dans un input. Ça se produit quand tu appuies sur la touche "Entrée" de ton clavier.</b>
        <br />
        <i>le composant contient un input vérifiant si la key entré est Enter. à ce moment là, il change la valeur du state textContent</i>
      </p>
      <Exo2 textContent={textContent} setTextContent={setTextContent} />
      <hr />
      <h1>EXO 3</h1>
      <p>
        <b>Créer un bouton qui copie la valeur de l'input, une alert apparaît avec comme contenu le texte copié.</b>
        <br />
        <i>la valeur du state est mis à jour à chaque changement de l'input et le bouton affiche ce même state</i>
      </p>
      <Exo3 currentInputValue={currentInputValue} setCurrentInputValue={setCurrentInputValue}/>
      <hr />
      <h1>EXO 5 (car le 4 est berk)</h1>
      <p>
        <b>Au focus de l'input, son bg-color devient vert et à l'inverse, au dé focus, il redevient normal</b>
        <br />
        <i>l'input possède un evenement au moment du focus qui passe le state à true ce dernier est utilisé dans un affichage conditionel au niveau du className</i>
      </p>
      <Exo5 focus={focus} setFocus={setFocus}/>



    </>
  )
}

export default App
