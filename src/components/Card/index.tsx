 import { Button } from '../Button';
import { Form } from '../Form';

import './card.css'
type componenteCard={
  children?: React.ReactNode;

}
const Card = ({children}:componenteCard) => {
  return (
    <div className="box-class">
     {children}
    </div>
  )
}
export default Card;