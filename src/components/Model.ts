export interface StripeSubscription {
    current_period_end: number;
    default_payment_method: any;
    status: string;
    id: string;
    cancel_at_period_end: Boolean;
}

export interface User {
    email: any
    accessType: any
    subscription: any
    access: any
    github: any
}