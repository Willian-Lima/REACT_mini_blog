import React, { Fragment, useEffect, useRef, useState } from 'react';
import DropDownItem from './DropDownItem';
import styles from './DropMenu.module.css';

import { useAuthentication } from '../../hooks/useAuthentication';

import { useAuthValue } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const DropMenu = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

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
  
  console.log(user)

  return (
    <Fragment>
      <div ref={menuRef}>
        <div className={styles.menu_trigger}>
            <button onClick={() => {setOpen(!open)}}>Menu</button>
        </div>
        <div className={open ? styles.active + " " + styles.drop_menu  : styles.drop_menu   + " " + styles.inactive}>
          {user && (
            <div className={styles.perfil}>
              <div className={styles.img}>
                <img src={user.photoURL} />
              </div>
              <Link to={"/profile"}>{user.displayName}</Link>
            </div>
          )}
          <ul>
            <DropDownItem className={styles.dropdownItem} img={null} text={"Home"} link={"/"} />
            <DropDownItem className={styles.dropdownItem} img={null} text={"Sobre"} link={"/about"} />
            {!user && (
            <Fragment>
              <DropDownItem className={styles.dropdownItem} img={null} text={"Login"} link={"/login"} />
              <DropDownItem className={styles.dropdownItem} img={null} text={"Registrar"} link={"/register"} />
            </Fragment>
            )}
            {user && (
            <Fragment>
              <DropDownItem className={styles.dropdownItem} img={null} text={"Postar"} link={"/posts/create"} />
              <DropDownItem className={styles.dropdownItem} img={null} text={"Dashboard"} link={"/posts/dasboard"} />

              <button onClick={logout}>Sair</button>

              
            </Fragment>
            )}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default DropMenu