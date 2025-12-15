import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetailPage() {
    const { handle } = useParams();
    const product = products.find(p => p.handle === handle);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="mb-4">Product not found</p>
                    <Link to="/" className="text-xs underline">Back to home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-12">
            <div className="max-w-2xl w-full">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-contain mb-6"
                />
                <p className="text-[10px] font-light text-gray-500 text-center tracking-wide">
                    {product.id}
                </p>
            </div>
        </div>
    );
}