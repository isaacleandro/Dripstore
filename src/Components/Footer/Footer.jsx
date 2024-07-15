import './Footer.css'
import LogoDigital from '../../assets/LogoDigital.png'
import { AiFillApple } from 'react-icons/ai'
import { AiFillAndroid } from 'react-icons/ai'
function Footer() {

  return (
    <>

      <div className='footer'>
        <img id='logo' src={LogoDigital} alt="" />
        <p>Lorem ipsum dolor sit amet/ consectetur <br /> adipiscing elit, sed do eiusmond tempor <br /> incididunt ut labore et dolore.</p>
        <AiFillAndroid />  <AiFillApple />
      </div>

      <div>

      </div>

    </>
  )
}

export default Footer
