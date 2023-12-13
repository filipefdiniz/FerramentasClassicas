import './catalogo.css';

export const CatalogoSection = () => {

    return (
        <div className="catalogo">
                <div className="catalogo-title">
                    <p className='ctg-title'>CATÁLOGO DE PRODUTOS</p>
                </div>
                
                <div className="catalogo-filter">
                    <select name="filter" id="filter">
                        <option value="categorias">Categorias</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <div className="input-busca">
                        <input className='input-filter' type="text" placeholder='Busque um produto' />
                        <button className='btn-busca'>BUSCAR</button>
                    </div> 
                </div>
                <hr className='linha-catalogo'/>
            </div>       
    );

}
export default CatalogoSection;