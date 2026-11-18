import { useEffect, useState } from 'react';
import { type Product } from '@shared/ui/card/ProductCard';
import { fetchProducts } from '@shared/api/products';

type UseProductsParams = {
    limit?: number;
    category?: string;
};

export function useProducts({ limit = 12, category }: UseProductsParams = {}) {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        fetchProducts({ limit, category })
            .then((data) => !cancelled && setProducts(data))
            .catch(() => !cancelled && setError('Ошибка загрузки товаров'))
            .finally(() => !cancelled && setIsLoading(false));

        return () => {
            cancelled = true;
        };
    }, [limit, category]);

    return { products, isLoading, error };
}
