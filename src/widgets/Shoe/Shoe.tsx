import { ProductCard } from '@shared/ui/card/ProductCard';
import { useProducts } from '@shared/hooks/useProducts';
import { Flex } from '@shared/ui/flex/Flex';
import './Shoe.css';

type ShoeProps = {
    category?: string;
    limit?: number;
};

export const Shoe = ({category = 'mens-shoes', limit = 5}: ShoeProps) => {
    const { products, isLoading, error } = useProducts({ limit, category });

    return (
        <section className='Shoe'>
            <Flex flexDirection='column' alignItems='center' className='Shoe__texts'>
                <h1 className='Shoe__header'>
                    <span className='Shoe_text1'>For</span>
                    &nbsp;
                    <span className='Shoe_text2'>Shoe Lovers</span>
                </h1>
                <div className='Shoe__text3'>
                    <p className='Shoe__about'>
                        Step into the latest trends with our newest shoe collections.
                    </p>
                    <span className="Shoe__line" />
                </div>
            </Flex>

            <Flex flexWrap='wrap' justifyContent='flex-start' className='Shoe__products--new'>
                {isLoading && <p className='Shoe__status'>Loading</p>}
                {error && <p className='Shoe__status'>{error}</p>}

                {!isLoading && !error && products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Flex>
        </section>
    );
};
