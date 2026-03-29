import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.header}>
      <h3>Sheriyans</h3>
      <button className='btn'>Log In</button>
    </div>
  )
}

export default Header
