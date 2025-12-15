import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, index }) {
    const [isHovered, setIsHovered] = useState(false);

    const materialDisplay = [product.material, product.color]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

    return (
        <div className="group">
            <Link
                to={`/products/${product.handle}`}
                className="block relative mb-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative overflow-hidden bg-gray-50">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto object-contain"
                    />

                    {/* Black Bar on Hover */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.001}}
                        className="absolute top-0 left-0 w-full h-3 bg-neutral-200 origin-left"
                    />
                </div>
            </Link>

            <div className="space-y-3 pl-[5rem] pr-[3rem]">
                <div className="flex items-start justify-between text-sm">
                    <span className="font-bold">{product.price} USD</span>
                    <span className="font-bold text-[9pt] mt-12 text-gray-500">
                        {product.title}
          </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">

                        <p className="text-[9pt] font-bold text-gray-600 lowercase mt-0.5">
                            {product.material}

                        </p>
                        <p className="text-[9pt] font-bold text-gray-600 lowercase mt-0.5">
                            {product.color}
                        </p>
                    </div>
                    <p className="text-[9pt] mt-12  text-gray-500">
                        {product.designer}
                    </p>
                </div>
            </div>
        </div>
    );
}