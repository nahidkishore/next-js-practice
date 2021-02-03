import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev community</span> Group
      </h1>
      <p className={headerStyles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
        debitis mollitia corrupti alias rem omnis totam unde tempora eum modi
        iure excepturi, est harum aspernatur itaque voluptate! Fugit, sunt
        natus.
      </p>
    </div>
  );
};

export default Header;
