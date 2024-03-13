import './testo.css';

export default function testo({titolo, testo}){
    return (
        <div className="containerTesto">
            <div className="titolo">
                <h1> {titolo} </h1>
            </div>
            <div className="testo">
                <p> {testo} </p>
            </div>
        </div>
    )

}