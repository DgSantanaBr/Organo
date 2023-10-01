import './Button.css'

const Botao = (props) =>{
    return(
        <button className='botao'>
            {props.texto}
        </button>
    )
}

export default Botao