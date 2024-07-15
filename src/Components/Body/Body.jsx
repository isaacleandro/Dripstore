import './Body.css'
import tenis from '../../assets/tenis.png'

function Body() {

  return (
    <>
      <section className="corpo">
        <div className='form'>
          <div >
            <div className='Titles'>
              <h3>Acesse sua conta</h3>
              <p>Novo cliente? entao registre-se<a href=""></a></p>
            </div>
          </div>

          <div className='Inputs'>
            <label htmlFor="">Login*</label>
            <input type="text" name='' id='' placeholder='Insira seu Login ou Email' />
          </div>

          <div className='Inputs'>
            <label htmlFor="">Senha*</label>
            <input type="text" name='' id='' placeholder='Digite sua senha' />
            <a id='esqueci' href="">Esqueci minha senha</a>
          </div>

          <div>
            <button id='acessar'>acessar</button>
          </div>

          <div className="icons">
            <p>Ou faça login como</p> 
            <img src=""alt="" />
          </div>
        </div>

        <div>
          <img className='shoes' src={tenis} alt="" />
        </div>

        

      </section>
    </>
  )
}

export default Body
