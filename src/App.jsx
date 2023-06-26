import newPhrases from './data/phrases.json'
import { useState } from 'react'
import Phrase from './components/Phrase'
import Author from './components/Author'
import './App.css'


function App() {

  const wallpaper = ['fondo1.jpg', 'fondo2.jpg', 'fondo3.jpg', 'fondo4.jpg'];

  const [index, setIndex] = useState(0)

  const changePhrase = () => {
    setIndex( Math.floor( Math.random() * newPhrases.length ) )
  }

  const color = wallpaper[ Math.floor( Math.random() * wallpaper.length ) ]

document.body.style = `background-image: url( ${ color } );`

  return (
    <>
     <Phrase
     data={ newPhrases[index] }
     colors={ color }
     />
     
     <button onClick={ changePhrase } className="btn-card">Ver otro</button>
     
     <Author
     authorName={ newPhrases[index] }
     />
    </>
  )
}

export default App
