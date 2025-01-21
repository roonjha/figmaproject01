import { Product } from '@/sanity/lib/type';
import Image from 'next/image';  // Import next/image

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      {/* Image section using next/image */}
      <div className="image-container">
        <Image
          src={product.image?.asset?.url || '/default-image.jpg'}  // Default fallback image if not available
          alt={product.name}  // Alt text for accessibility
          width={300}  // Set the width you need
          height={300}  // Set the height you need
          objectFit="cover"  // This ensures the image fills the container while maintaining its aspect ratio
          className="product-image"  // Optional, for custom styling
        />
      </div>

      {/* Product details */}
      <div className="product-details">
        <h2>{product.name}</h2>
        <p className="product-description">{product.description}</p>

        {/* Price */}
        <p className="product-price">
          <strong>Price:</strong> ${product.price}
        </p>

        {/* Discount Percent */}
        {product.discountPercent && (
          <p className="product-discount">
            <strong>Discount:</strong> {product.discountPercent}%
          </p>
        )}

        {/* Category */}
        <p><strong>Category:</strong> {product.category}</p>

        {/* Sizes */}
        {product.sizes?.length > 0 && (
          <p><strong>Sizes:</strong> {product.sizes.join(', ')}</p>
        )}

        {/* Colors */}
        {product.colors?.length > 0 && (
          <p><strong>Colors:</strong> {product.colors.join(', ')}</p>
        )}

        {/* New Product Badge */}
        {product.new && <span className="badge">New</span>}
      </div>
    </div>
  );
};

export default ProductCard;
