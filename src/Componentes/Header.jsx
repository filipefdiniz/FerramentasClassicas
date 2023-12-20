import './header.css';
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {

    

    function scrollToSection(sectionId, offset = 0) {
        var section = document.querySelector(sectionId);
        
        if (section) {
          var offsetTop = section.offsetTop - offset;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }

    return (
        <div className="header-container" id='inicio'>

            <div className="header-logo">
                <Link to={'/'}>
                    <h3 onClick={() => scrollToSection('#inicio', 0)} className='logo-ferramentas'>FERRAMENTAS CLÁSSICAS</h3>
                </Link>
            </div>
            <div className="header-menu-desk">
                <ul className='list-menu'>
                    <li><Link className="link-wpp" to={"https://wa.me/31975789595/?text=Olá, gostaria de mais informações sobre as ferramentas!"}><div className="contato-wpp"><img src=".\src\assets\whatsBlack.png" alt="" /> (31) 99134-2871</div></Link></li>
                    <li><a onClick={() => scrollToSection('#produtos', 150)}>PRODUTOS</a></li>
                    <li><a onClick={() => scrollToSection('#contato', 150)}>CONTATO</a></li>
                </ul>
            </div>
            <div className="header-menu">
                <div className="contato-wpp"><img src=".\src\assets\whatsBlack.png" alt="" /> (31) 99134-2871</div>
                <img src=".\src\assets\menuIcon.png" alt="" />
            </div>
        </div>
    );

}
export default HeaderComponent;