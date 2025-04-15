export interface Offer {
  id: number;
  title: string;
  description: string;
  discountPercentage: number;
  startDate: string;
  endDate: string;
  offerImage: string;
  clinicName: string;
  originalPrice: number;
  finalPrice: number;

}
