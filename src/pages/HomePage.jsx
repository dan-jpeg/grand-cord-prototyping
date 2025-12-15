import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import heroImage from '../assets/hero.png';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full"
                >
                    <img
                        src={heroImage}
                        alt="Hero"
                        className="w-full h-auto object-cover grayscale"
                    />
                </motion.div>
            </section>

            {/* Spacer */}
            <div className="h-24" />
            <div className="flex flex-row">
                <p className="text-right pl-[5rem] leading-3 font-helvetica w-[700px] text-[8pt] italic">This is a group which has no name because we are not finished being born.
                    What we have in common is a way through time, and that path is our meeting place.
                    In the body of every spider, there's unmade silk. </p>
                <p className="uppercase font-bold  text-[9pt] pl-[10rem]">grand-cord</p>
            </div>
            {/* Catalog Section */}
            <section className="py-24">
                <div className="mb-12 flex items-start justify-between  border-black pb-4">
                    <div className="flex-row pl-[5rem] flex gap-x-6">
                        <h2 className="text-[9pt] font-bold text-">CATALOG</h2>
                        <p className="text-[7pt] mt-[1px] ">2021-2026</p>
                    </div>
                    <span className="text-sm">{products.length}</span>
                </div>

                <div className="grid grid-cols-1 gap-x-1.5 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </section>
        </div>
    );
}