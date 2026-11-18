import { type Product } from '@shared/ui/card/ProductCard';

const API_URL = import.meta.env.VITE_API_URL ?? 'https://dummyjson.com';

type DummyProduct = {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
};

type ProductsResponse = {
    products: DummyProduct[];
    total: number;
};

type FetchProductsParams = {
    limit?: number;
    category?: string;
};

export async function fetchProducts({ limit = 12, category }: FetchProductsParams = {}): Promise<Product[]> {
    const path = category
        ? `/products/category/${category}`
        : '/products';

    const res = await fetch(`${API_URL}${path}?limit=${limit}`);

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const data: ProductsResponse = await res.json();

    return data.products.map((p): Product => ({
        id: String(p.id),
        title: p.title,
        description: p.description,
        imageURL: p.thumbnail,
        priceCents: p.price * 100,
        isNew: true,
    }));
}
