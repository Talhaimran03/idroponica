import './Titolo.css';
import immagine from './img/immagineIdroponica.jpg';

export default function Titolo() {
    return <>
        <div className="container margine">
            <header className="centratutto ">
            <h1>🌱 Idroponica 🌱</h1>
        </header>

        </div>
        
        <div className="centratutto container">
            <img
                src={immagine}
                alt='immagine bella'
                className='immagineIdro'
            />
        </div>
        <a className="margine" href='https://it.wikipedia.org/wiki/Idroponica'>Pagina wikipedia sull'idroponica</a>

    </>
}