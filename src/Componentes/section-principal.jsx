import './section-principal.css';
import { ProductComponent } from './Produto';
export const PrincipalSection = () => {

    const products = [
        {
            image: "https://img.freepik.com/fotos-gratis/variedade-de-ferramentas-habilidosas-com-espaco-de-copia_23-2148732451.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698710400&semt=ais",
            title: "Ferramenta"
        },
        {
            image: "https://img.freepik.com/fotos-gratis/variedade-de-ferramentas-habilidosas-com-espaco-de-copia_23-2148732451.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698710400&semt=ais",
            title: "Ferramenta"
        },
        {
            image: "https://img.freepik.com/fotos-gratis/variedade-de-ferramentas-habilidosas-com-espaco-de-copia_23-2148732451.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698710400&semt=ais",
            title: "Ferramenta"
        },
        {
            image: "https://img.freepik.com/fotos-gratis/variedade-de-ferramentas-habilidosas-com-espaco-de-copia_23-2148732451.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698710400&semt=ais",
            title: "Ferramenta"
        }
    ];
    return (
        <div className="main">
            <div className="main-1">
                <h3 className='princ-title'>AS MELHORES FERRAMENTAS EM UM SÓ LUGAR!</h3>
                <div className="main1-img">
                    <img src=".\src\assets\ferramentas.png" alt="" />
                </div>
                <div className="main1-btnCatalogo">
                    <button className='btn-main1'>VER TODOS OS PRODUTOS</button>
                </div>
            </div>
            <div className="main2">
                <img src=".\src\assets\logo.png" alt="" />
            </div>

            <div className="sobre">
                <img src=".\src\assets\logobranco.png" alt="" />

                <h3 className='titulo-sobre'>FERRAMENTAS CLÁSSICAS DE QUALIDADE PARA USO!</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, excepturi cum quasi rerum consequatur eos harum. Repudiandae excepturi ex nemo, delectus, neque numquam nostrum porro maxime pariatur hic laudantium nulla? <br />
                Nihil magnam commodi dolor unde atque vero incidunt voluptates voluptatibus doloribus, ducimus minima molestiae voluptate quae eius, delectus sapiente quisquam vitae eligendi fugiat ipsa beatae. Esse dolores totam voluptate molestias?</p>

                <p>Nostrum, magni dicta asperiores earum quidem eligendi repellendus ea, quam officiis illo obcaecati possimus dolorum reiciendis quibusdam placeat quisquam itaque sequi perferendis? Itaque perspiciatis excepturi aliquam, beatae adipisci expedita. Aut?<br />
                Sapiente natus ipsum qui architecto deleniti officia voluptates pariatur, cum laboriosam. Ea alias quia omnis atque sequi velit itaque sint nihil aut eius explicabo reiciendis numquam, soluta mollitia quos repellat.</p>
            </div>

            <div className="catalogo-inicial">
                <h3 className='catalogo-title'>CONHEÇA NOSSAS FERRAMENTAS</h3>
                <div className="produtos">
                {products.map((product, index) =>{
                    return <ProductComponent ket={index} image={product.image} title={product.title}/>
                })}
                </div>
                <div className="button">
                <button className="ver-catalogo">VER CATÁLOGO <img src=".\src\assets\arrow.png"></img></button>
                </div>
            </div>


        </div>
    );
}

export default PrincipalSection;