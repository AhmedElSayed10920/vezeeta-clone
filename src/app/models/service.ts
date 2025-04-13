export interface Service {

    title: string;
    description: string;
    rating: number;
    reviewCount: number;
    bookedCount: number;
    originalPrice: number;
    discountPrice: number;
    discount: number;
    image: string;
    id: number;
    hasOffer?: boolean;
    isNew?: boolean;
}
