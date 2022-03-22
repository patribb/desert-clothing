import { Link } from 'react-router-dom';
import ProductCard from '../productCard/ProductCard';
import './categoryPreview.styles.scss';

const CategoryPreview = ({title, products}) => {
  return (
    <div className='category-preview-container'>
      <h2>
          <Link to={title} className='title'>{title.toUpperCase()}</Link>
          <div className="preview">
              {products.filter((_, idx)=> idx < 4).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
      </h2>
    </div>
  )
}

export default CategoryPreview;
