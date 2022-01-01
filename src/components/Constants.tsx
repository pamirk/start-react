// Layout
export const φ = (1 + Math.sqrt(5)) / 2;
export const ɸ = 1 / φ;

// Stripe
export const isProduction = true; // process.env.NODE_ENV === "production";
export const stripeApiKey = isProduction
  ? "pk_live_2ruvnlX2Eqa1yYxXjufnGiKA"
  : "pk_test_IgNcZsyRG4FkepgyUGEBXAn4";

const annualSubscriptionPlan = isProduction
  ? "plan_FgOtX1Qna7k5ey"
  : "plan_FYTe8fJy9k3N8V";
const monthlySubscriptionPlan = isProduction
  ? "plan_FgOqUllMEWmLSM"
  : "plan_FYTdHLuS01nWNM";
const lifetimeSubscriptionPlan = isProduction
  ? "sku_FgOucRHEltY7Mp"
  : "sku_FgP3RoV0THqM0u";

export const PLANS = [monthlySubscriptionPlan, annualSubscriptionPlan];

export interface Subscription {
  id: string;
  label: string;
  price: number;
  type: "monthly" | "annual" | "lifetime";
  mostPopular?: boolean;
}

export const subscriptions: Subscription[] = [
  {
    id: monthlySubscriptionPlan,
    label: "Monthly",
    price: 2300,
    type: "monthly"
  },
  {
    id: annualSubscriptionPlan,
    label: "Annual",
    price: 900,
    type: "annual",
    mostPopular: true
  },
  {
    id: lifetimeSubscriptionPlan,
    label: "Lifetime",
    price: 60000,
    type: "lifetime"
  }
];

// Router
export enum Routes {
  HOME = "/",
  AUTH = "/auth",
  SIGN_IN = "/sign-in",
  REANIMATED2 = "/reanimated-2",
  YOUTUBE_FRIENDS = "/youtube-friends",
  ACCOUNT = "/account",
  GITHUB = "/account/github",
  EMAIL_SENT = "/email-sent",
  LESSON = "/lessons/:id",
  SUPPORT = "/support"
}

export const goToLesson = (id: string) => `/lessons/${id}`;
