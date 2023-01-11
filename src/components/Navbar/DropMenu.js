import React, { Fragment, useEffect, useRef, useState } from 'react'
import DropDownItem from './DropDownItem';
import './DropMenu.css';


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
      <div className="menu-container" ref={menuRef}>
        <div className="menu-trigger">
            <button onClick={() => {setOpen(!open)}}>Menu</button>
        </div>
        <div className={`drop-menu ${open ? 'active' : 'inactive'}`}>
          <h3>Opções</h3>
          <ul>
            <DropDownItem className="dropdownItem" img={null} text={"Sobre"} link={"/about"} />
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default DropMenu