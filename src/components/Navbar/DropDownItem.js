import { NavLink } from 'react-router-dom';
import styles from './DropMenu.module.css';

const DropDownItem = ({img, text, link}) => {
  return (
    <li>
      {/* <img src={img}/> */}
      <NavLink className={({isActive}) => (isActive ? styles.active : '')} to={link}>{text}</NavLink>
    </li>
  )
}

export default DropDownItem