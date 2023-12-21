import './section-principal.css';
import { ProductComponent } from './Produto';
import { FooterComponent } from './Footer';
import { Link } from 'react-router-dom';
import products from './produtos';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const PrincipalSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };


    return (
        <div className="main">
            <div className="main-banner">
                <img className='banner' src=".\src\assets\banner1.png" alt="" />
            </div>
            <div className="main-produtos" id="produtos">
                <div className="title-produtos">
                    <h3>NOSSAS FERRAMENTAS</h3>
                    <hr />
                </div>
                <div className="produtos-cards">
                    {products.map((product) => {
                        return <ProductComponent title={product.title} image={product.image} />
                    })}
                </div>
                <div className="produtos-mobile">
                    {[0, 3, 6, 9, 12, 15].map((startIdx, sliderIndex) => (
                        <Slider key={sliderIndex} {...settings}>
                            {products.slice(startIdx, startIdx + 3).map((product, index) => (
                                <ProductComponent key={index} title={product.title} image={product.image} />
                            ))}
                        </Slider>
                    ))}
                </div>
            </div>
            <div className="contato" id="contato">
                <div className="title-produtos">
                    <h3>CONTATO</h3>
                    <hr />
                </div>
                <div className="contato-info">
                    <Link className="link" to={"https://wa.me/31991342871/?text=Olá, gostaria de mais informações sobre as ferramentas!"}><button className="btn-wpp">Envie uma mensagem <img src=".\src\assets\whatswhite.png" alt="" /></button></Link>
                    <a className="link" href='mailto:Rondinellymaia@yahoo.com.br'><button className="btn-email"><img src=".\src\assets\envelope.png" alt="" />Rondinellymaia@yahoo.com.br</button></a>
                    <Link className="link" to={"https://www.instagram.com/ferramentasclassicas/"}><button className="btn-insta"><img src=".\src\assets\insta.png" alt="" />@ferramentasclassicas</button></Link>
                </div>
            </div>




        </div>
    );
}

export default PrincipalSection;