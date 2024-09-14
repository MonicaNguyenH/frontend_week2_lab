import { useState } from 'react'
import './App.css'

function App() {

  const [isActive, setIsActive] = useState(null);

  const handleTabClick = (index) => {
    setIsActive(isActive === index ? null:index);
  }

  return (
    <>
      <header className="header">
        <h1>My Tunes</h1>
      </header>
      <main>
        <div className="main-container">
          <div className="photo">
            <img className="photo" src="https://www.redcarpet-fashionawards.com/wp-content/uploads/2024/07/Doja-Cat-Wore-Dilara-Findikoglu-To-Wireless-Festival-2024.jpg" alt="Doja Cat" />
          </div>
          <div>
            <h2>Doja Cat's Albums</h2>
            <div className="tab">
              <details className="details">
                <summary 
                  className={`tab-header ${isActive === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>Scarlet (2023)</summary>
                <ol className="list"  open={isActive === 0}>
                  <li className="song">Paint The Town Red</li>
                  <li className="song">Demons</li>
                  <li className="song">FTG</li>
                  <li className="song">Ouchies</li>
                  <li className="song">97</li>
                  <li className="song">Gun</li>
                  <li className="song">Go Off</li>
                  <li className="song">Shutcho</li>
                  <li className="song">Agora Hills</li>
                  <li className="song">Can't Wait</li>
                  <li className="song">Often</li>
                  <li className="song">Love Life</li>
                  <li className="song">Skull and Bones</li>
                </ol>
              </details>

              <details className="details">
                <summary className={`tab-header ${isActive === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>Planet Her (2021)</summary>
                <ol className="list">
                  <li className="song">Woman</li>
                  <li className="song">Naked</li>
                  <li className="song">Payday (feat. Young Thug)</li>
                  <li className="song">Get Into It (Yuh)</li>
                  <li className="song">Need to Know</li>
                  <li className="song">I Don't Do Drugs (feat. Ariana Grande)</li>
                  <li className="song">Love to Dream</li>
                  <li className="song">You Right (with The Weeknd)</li>
                  <li className="song">Been Like This</li>
                  <li className="song">Options (feat. JID)</li>
                  <li className="song">Ain't Shit</li>
                  <li className="song">Kiss Me More (feat. SZA)</li>
                </ol>
              </details>

              <details className="details">
                <summary className={`tab-header ${isActive === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>Hot Pink (2019)</summary>
                <ol className="list">
                  <li className="song">Juicy</li>
                  <li className="song">BB</li>
                  <li className="song">Rules</li>
                  <li className="song">Say So</li>
                  <li className="song">Cyber S</li>
                  <li className="song">Like That</li>
                  <li className="song">Streets</li>          
                </ol>
              </details>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
