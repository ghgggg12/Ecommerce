
import Button from '@mui/material/Button';
import { Link } from 'react-router';
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

const usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="product__card">
            <Link to={`/product/${product.id}`} className="product__links product__card">
                <div className="product__img--buttons">
                    <Button component={Link} to={`/product/${product.id}`} className="product__button--check product__button" aria-label="View product">
                        <Icons.CheckProductIcon />
                    </Button>

                    <Link to='/'>
                        <Button type="button" className="product__button--like product__button" aria-label="Add to favorites">
                            <Icons.LikeProductIcon />
                        </Button>
                    </Link>

                    {product.isNew && (
                        <p className="product__badge">New</p>
                    )}
                    {product.imageURL ? (
                        <img className="product__img" src={product.imageURL} alt={product.title} width="300" height="208"/>
                    ) : (
                        <p className="product__img--alt">
                            No foto
                        </p>
                    )}
                </div>

                <div className="product__texts">
                    <div className="product__text--main">
                        <h3 className="product__title">
                            {product.title}
                        </h3>

                        <p className="product__description">
                            {product.description ?? 'No description'}
                        </p>
                    </div>

                    <p className="product__price">
                        {usd.format(product.priceCents / 100)}
                    </p>
                </div>
            </Link>
            <Button type="button" className="product__button--basket product__buttons" variant="contained" value={product.id} >
                <Icons.BasketIcon />
                <span>Add to Basket</span>
            </Button>
        </div>
    );
}
