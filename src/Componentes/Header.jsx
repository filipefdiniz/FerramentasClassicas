import './header.css';

export const HeaderComponent = () => {

    return(
        <div className="header-container">
            <div className="header-logo">
                <img src=".\src\assets\logo.png" alt="" className='img-header'/>
            </div>
            <div className="header-menu">
                <img src=".\src\assets\menuIcon.png" alt="" />
            </div>
        </div>
    );

}
export default HeaderComponent;