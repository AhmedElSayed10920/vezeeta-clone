export interface Service {

    id: number;
    title: string;
    description: string;
    rating: number;
    reviewCount: number;
    bookedCount: number;
    originalPrice: number;
    discountPrice: number;
    discount: number;
    image: string;
    hasOffer?: boolean;
    isNew?: boolean;
    offersLink?:string;
}
