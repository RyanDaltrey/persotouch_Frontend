import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

    const CardProduits = ({produits}) =>{

        // const navigate = useNavigate();
   

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={produits.img_cat} />
      <Card.Body>
        <Card.Title>{produits.nom_pro}</Card.Title>
        <Card.Text>
          {produits.prix}€
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
 }
export default CardProduits;