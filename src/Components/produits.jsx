
import Card from 'react-bootstrap/Card';

  const CardProduit = ({produit}) =>{  
    
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../Assets/' + produit.img_cat)} />
      <Card.Body>
        <Card.Title>{produit.nom_pro}</Card.Title>
        <Card.Text>
          {produit.prix}€
        </Card.Text>
      </Card.Body>
    </Card>
  );
 }
export default CardProduit;