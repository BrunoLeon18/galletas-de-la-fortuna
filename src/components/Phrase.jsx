


const Phrase = ( { data } ) => {

    return(
        <article className="card">
            <h1>Galletas de la Fortuna</h1>
            <div className="card-phrase">
                <p>{data.phrase}</p>
            </div>
            
        </article>
    )
}

export default Phrase