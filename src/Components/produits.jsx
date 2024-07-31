
import Card from 'react-bootstrap/Card';

    const CardProduit = ({produit}) =>{  
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../Assets/' + produit.img_cat)} />
      <Card.Body>
        <Card.Title>{produits.nom_pro}</Card.Title>
        <Card.Text>
          {produits.prix}€
        </Card.Text>
      </Card.Body>
    </Card>
  );
 }
export default CardProduit;