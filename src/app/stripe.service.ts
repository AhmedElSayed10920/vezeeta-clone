import { Injectable } from '@angular/core';
import { loadStripe, Stripe, StripeCardElement, StripeElements } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private stripePromise = loadStripe('pk_test_51RHOrCR8Cm3oZIqaF4eY5yC3CEI6PgDNS58JP0wPxiPvutRYOf82kGHpMQoErro5AxrtYpg0L9VZ6AQNWtmUOiZ500ptJrzShH');
  private elements: StripeElements | null = null;
  private cardElement: StripeCardElement | null = null;

  async initializeCardElement(elementId: string) {
    const stripe = await this.stripePromise;
    if (stripe) {
      this.elements = stripe.elements();
      this.cardElement = this.elements.create('card');
      this.cardElement.mount(elementId);
    }
  }

  async redirectToCheckout(clientSecret: string): Promise<boolean> {
    const stripe = await this.stripePromise;
    if (!stripe || !this.cardElement) {
      console.error('Stripe not initialized');
      return false;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: this.cardElement }
      });

      if (error) {
        console.error('Payment error:', error.message);
        return false;
      }

      if (paymentIntent?.status === 'succeeded') {
        console.log('Payment succeeded!');
        return true;
      }

      return false;
    } catch (error) {
      console.error('Unexpected error:', error);
      return false;
    }
  }
}
