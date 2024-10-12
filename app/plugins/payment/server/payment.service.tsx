import { User } from '@prisma/client'
import {
  Payment,
  Product,
  StripeWebhookResponse,
  Subscription,
} from './payment.type'
// import { StripeProvider } from './providers/stripe/stripe.provider'

import { Organization } from '@prisma/client'

class Service {
  // private provider: Provider = new StripeProvider()

  isActive(): boolean {
    // if (this.provider) {
    //   return this.provider?.isActive()
    // }

    return false
  }

  getCustomerId(user: User | Organization): string {
    // return user.stripeCustomerId
    return '';
  }

  async findManyProducts(): Promise<Product[]> {
    // return this.provider.findManyProducts()
    return [];
  }

  async findManySubscriptions(
    customer: User | Organization,
  ): Promise<Subscription[]> {
    // return this.provider.findManySubscriptions(this.getCustomerId(customer))
    return [];
  }

  async findManyPayments(user: User): Promise<Payment[]> {
    // return this.provider.findManyPayments(this.getCustomerId(user))
    return [];
  }

  async createPaymentLink(options: {
    user: User

    organization: Organization

    productId: string
    metadata?: Record<string, string>
    urlRedirection?: string
  }): Promise<string> {
    // const optionsPayment = {
    //   ...options,

    //   customerId: this.getCustomerId(options.organization ?? options.user),
    // }

    // return this.provider.createPaymentLink(optionsPayment)
    return '';
  }

  async onPayment(body: Buffer, sig: string): Promise<StripeWebhookResponse> {
    // return this.provider.onPayment(body, sig)
    return {} as StripeWebhookResponse;
  }

  async createCustomer(
    customer: User,

    organization?: Organization,
  ): Promise<string> {
    // return this.provider.createCustomer({
    //   name: organization?.name ?? customer.name ?? customer.email,

    //   email: customer.email,
    // })
    return '';
  }
}

class Singleton {
  static service = new Service()
}

export const PaymentService = Singleton.service
