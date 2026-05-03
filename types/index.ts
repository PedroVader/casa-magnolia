/* ─── Project ─── */

export type ProjectCategory =
  | "bodas"
  | "eventos"
  | "rodajes"
  | "table_setting"
  | "talleres";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  date: string;
  client: string;
  description: string;
  cover_image: string;
  gallery: string[];
  credits: Record<string, string>;
  published: boolean;
  order_index: number;
  created_at: string;
}

/* ─── Workshop ─── */

export interface Workshop {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  location: string;
  price_cents: number;
  capacity: number;
  spots_taken: number;
  cover_image: string;
  stripe_price_id: string;
  status: "open" | "closed" | "cancelled";
}

/* ─── Subscriber (Hotels/Restaurants) ─── */

export type SubscriptionPlan = "esencial" | "estandar" | "premium";

export interface Subscriber {
  id: string;
  email: string;
  business_name: string;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  plan: SubscriptionPlan;
  status: string;
  started_at: string;
  current_period_end: string;
}

/* ─── Contact submission ─── */

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  event_type: string;
  event_date: string | null;
  budget_range: string | null;
  message: string;
  created_at: string;
  responded: boolean;
}

/* ─── Workshop booking ─── */

export interface WorkshopBooking {
  id: string;
  workshop_id: string;
  email: string;
  name: string;
  phone: string;
  seats: number;
  stripe_session_id: string;
  status: string;
  created_at: string;
}
