// lib/types.ts

export interface Product {
    id: Key | null | undefined
    rating: ReactI18NextChildren | Iterable<ReactI18NextChildren>
    discount: any
    stockStatus: string
    imageUrl: string | undefined
    _id: string
    name: string
    price: number
    description: string
    image: {
      asset: {
        url: string
      }
    }
    category: 'tshirt' | 'short' | 'jeans' | 'hoodie' | 'shirt'
    discountPercent?: number
    new: boolean
    colors: string[]
    sizes: string[]
  }
  