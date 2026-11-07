import Button from '@mui/material/Button';
import { Icons } from '@shared/assets/svg/index';
import './ProductCard.css';

export type Product = {
    imageURL?: string;
    title: string;
    description?: string;
    priceCents: number;
    id: string;
    isNew: boolean;
};

export type ProductCardProps = {
    product: Product;
};

const usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});


export function ProductCard({ product }: ProductCardProps) {
    const handleButtonClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

  return (
    <a href={`/product/${product.id}`} className='product__card'>
        <div className='product__img--buttons'>
            {product.isNew && <p className="product__badge">New</p>}
            {product.imageURL ? (
                <img className='product__img' src={product.imageURL} alt="" width="300" height="208" />
            ) : (
                <p className='product__img--alt'>No foto</p>
            )}
            <Button onClick={handleButtonClick} className='product__button--like product__button'><Icons.LikeProductIcon/></Button>
            <Button href={`/product/${product.id}`} className='product__button--check product__button'><Icons.CheckProductIcon/></Button>
        </div>
        <div className='product__texts'>
            <div className='product__text--main'>
                <h3 className='product__title'>{product.title}</h3>
                <p className='product__description'>{product.description ?? 'No description'}</p>
            </div>
            <p className='product__price'>{usd.format(product.priceCents / 100)}</p>
        </div>
        <Button href={`/product/${product.id}`} onClick={handleButtonClick} className='product__button--basket' variant="contained" type="button" value={product.id}>
            <Icons.BasketIcon />
            <span>Add to Basket</span>
        </Button>
    </a>
  );
}