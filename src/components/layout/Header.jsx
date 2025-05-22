import './Header.css';
import DarkModeSw from '../DarkModeSw';

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <h2 className="titulo">Javier</h2>
            <p className="subtitulo">Desarrollador Backend</p>
        </div>
        <nav className="navbar">
          <a href="#acerca-de" className="hover:underline">Sobre mi</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
        </nav>
        <DarkModeSw/>
    </header>
  );
}

export default Header;
