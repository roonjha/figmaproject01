import type React from "react"
import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/sanity/lib/type"

interface ProductCardProps {
  product: Product
  addToCart: (product: Product) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded shadow flex flex-col h-full">
      <Link href={`/product/${product._id}`} className="flex flex-col h-full group">
        <div className="relative w-full h-48 mb-2">
          <Image
            src={product.imageUrl || "/placeholder-image.jpg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="group-hover:opacity-80 transition-opacity"
          />
        </div>
        <h3 className="text-xl font-semibold mb-0 group-hover:text-blue-600 transition-colors">{product.name}</h3>

        <div className="flex justify-between items-center mt-2 flex-grow">
          <div className="flex flex-col justify-between">
            <p className="text-gray-600 mb-0">Price: ${product.price}</p>
            {product.discount && <p className="text-red-500 text-sm mb-0">-{product.discount}</p>}
          </div>
          <p className="text-yellow-500 mb-0">⭐ {product.rating}</p>
        </div>
      </Link>

      <button
        onClick={() => addToCart(product)}
        className="mt-2 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard

