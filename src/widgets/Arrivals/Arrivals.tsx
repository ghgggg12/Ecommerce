import { ProductCard } from '@shared/ui/card/ProductCard';
import { useProducts } from '@shared/hooks/useProducts';
import './Arrivals.css';

type ArrivalsProps = {
    category?: string;
    limit?: number;
};

export const Arrivals = ({category, limit = 12}: ArrivalsProps) => {
    const { products, isLoading, error } = useProducts({ limit, category });

    return (
        <section className='Arrivals'>
            <div className='Arrivals__texts'>
                <h1 className='Arrivals__header'>
                    <span className='Arrivals_text1'>New</span>
                    &nbsp;
                    <span className='Arrivals_text2'>Arrivals</span>
                </h1>
                <div className='Arrivals__text3'>
                    <p className='Arrivals__about'>
                        Discover the newest styles and products curated for you.
                    </p>
                    <span className="Arrivals__line" />
                </div>
            </div>

            <div className='Arrivals__products--new'>
                {isLoading && <p className='Arrivals__status'>Loading</p>}
                {error && <p className='Arrivals__status'>{error}</p>}

                {!isLoading && !error && products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};
