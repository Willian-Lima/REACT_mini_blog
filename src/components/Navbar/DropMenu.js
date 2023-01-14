import React, { Fragment, useEffect, useRef, useState } from 'react'
import DropDownItem from './DropDownItem';
import styles from './DropMenu.module.css';


const DropMenu = () => {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handler);

    return() => {
      document.addEventListener("mousedown", handler);
    }
  });
  return (
    <Fragment>
      <div ref={menuRef}>
        <div className={styles.menu_trigger}>
            <button onClick={() => {setOpen(!open)}}>Menu</button>
        </div>
        <div className={open ? styles.active + " " + styles.drop_menu  : styles.drop_menu   + " " + styles.inactive}>
          <h3>Opções</h3>
          <ul>
            <DropDownItem className={styles.dropdownItem} img={null} text={"Home"} link={"/"} />
            <DropDownItem className={styles.dropdownItem} img={null} text={"Sobre"} link={"/about"} />
            <DropDownItem className={styles.dropdownItem} img={null} text={"Login"} link={"/login"} />
            <DropDownItem className={styles.dropdownItem} img={null} text={"Registrar"} link={"/register"} />
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default DropMenu