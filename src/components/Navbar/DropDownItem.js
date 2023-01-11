import { NavLink } from 'react-router-dom';

const DropDownItem = ({img, text, link}) => {
  return (
    <li>
      <img src={img}/>
      <NavLink to={link}>{text}</NavLink>
    </li>
  )
}

export default DropDownItem