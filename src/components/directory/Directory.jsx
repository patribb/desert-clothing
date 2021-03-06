import DirectoryItem from "../directory-item/DirectoryItem";
import './directory.styles.scss';

const Directory = () => {

  const categories = [
    {
      id: 1,
      title: "corbatas",
      imageUrl: "http://cdn.shopify.com/s/files/1/0506/2456/1309/collections/Corbatas.jpg?v=1630343696",
      route: 'shop/corbatas'
    },
    {
      id: 2,
      title: "chaquetas",
      imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/abrigo-nieve-columbia-rebajas-hombre-amazon-1610446422.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*",
      route: 'shop/chaquetas'
    },
    {
      id: 3,
      title: "camisas",
      imageUrl: "https://i.pinimg.com/originals/30/16/d7/3016d773ca8fb22a188c5b50ef36af2e.jpg",
      route: 'shop/camisas'
    },
    {
      id: 4,
      title: "jerseys",
      imageUrl: "https://www.lidl.es/media/product/0/0/3/5/9/6/7/jersey-para-hombre-zoom--3.jpg",
      route: 'shop/jerseys'
    },
    {
      id: 5,
      title: "pantalones",
      imageUrl: "https://reflejosdemoda.com/wp-content/uploads/2015/02/street_style_moda_hombre_primavera_verano_2015_771055576_900x6011.jpg",
      route: 'shop/pantalones'
    }
  ]
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory;
