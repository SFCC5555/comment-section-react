import '../styles/CharacterCard.css'

function CharacterCard(props) {
    return (<section className='characterCard'>
                <img src={require(`../Images/fotoPerfil${props.name}.png`)} alt={`foto de ${props.name}`} />
                <section className="dataSection">
                    <div className="name"><strong>{props.name} {props.lastname}</strong> en {props.country}</div>
                    <div className="position">{props.position} en <strong>{props.company}</strong></div>
                    <p>"{props.quote}"</p>
                </section>
            </section>)
}

export {CharacterCard};