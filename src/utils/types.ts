export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  availabilityStatus: string;
  minimumOrderQuantity: number;
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  images: string[];
  thumbnail: string;
  category: string;
  brand: string;
  tags: string[];
  sku: string;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  reviews: Array<{
    reviewer: string;
    comment: string;
    rating: number;
  }>;
}
export interface ICart extends IProduct {
  quantity: number;
}
