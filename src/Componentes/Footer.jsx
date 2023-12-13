import './Footer.css';

export const FooterComponent = () => {

    return (
        <div className="footer">
            <div className="footer1">
                <div className="links">
                    <a href="">SOBRE NÓS</a>
                    <a href="">TERMOS E CONDIÇOES</a>
                    <a href="">POLÍTICA DE PRIVACIDADE</a>
                </div>
                <div className="footer-info">
                    <h4>FERRAMENTASCLÁSSICAS@GMAIL.COM</h4>
                    <h4>BELO HORIZONTE - MG</h4>
                    <h4>300000-00</h4>
                </div>
            </div>
            <div className="logo-social">
                <div className="footer-logo">
                    <img src=".\src\assets\logobranco.png" alt="" />
                
                </div>
                <div className="footer-social">
                    <div className='img-social'>
                        <img src=".\src\assets\WhatsApp.png" alt="" />
                        <img src=".\src\assets\Instagram.png" alt="" />
                    </div>
                    <h4>@FERRAMENTASCLÁSSICAS</h4>
                </div>
            </div>
        </div>
    );

}
export default FooterComponent;