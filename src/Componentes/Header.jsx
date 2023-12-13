import './header.css';
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {

    return(
        <div className="header-container">
            
            <div className="header-logo">
                <Link to={'/home'}>
                    <img src=".\src\assets\logo.png" alt="" className='img-header'/>
                </Link>
            </div>
            
            <div className="header-menu">
                <img src=".\src\assets\menuIcon.png" alt="" />
            </div>
        </div>
    );

}
export default HeaderComponent;