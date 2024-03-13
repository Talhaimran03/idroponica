import './Titolo.css';
import immagine from './img/immagineIdroponica.jpg';

export default function Titolo() {
    return <>

        <header className="centratutto container margine">
            <h1>🌱 Idroponica 🌱</h1>
        </header>

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