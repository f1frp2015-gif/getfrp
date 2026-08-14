-- Indexable supplier-owned product pages and immutable moderation history.
-- Apply after 0002_supplier_product_core.sql.

CREATE TABLE IF NOT EXISTS supplier_product_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  supplier_listing_id varchar(50) NOT NULL REFERENCES supplier_listings(id) ON DELETE CASCADE,
  category_id varchar(100) NOT NULL REFERENCES products(id),
  slug varchar(160) NOT NULL,
  name varchar(240) NOT NULL,
  description text NOT NULL,
  images jsonb NOT NULL DEFAULT '[]'::jsonb,
  material varchar(160) NOT NULL,
  manufacturing_processes jsonb NOT NULL DEFAULT '[]'::jsonb,
  applications jsonb NOT NULL DEFAULT '[]'::jsonb,
  standards jsonb NOT NULL DEFAULT '[]'::jsonb,
  parameters jsonb NOT NULL DEFAULT '{}'::jsonb,
  certifications jsonb NOT NULL DEFAULT '[]'::jsonb,
  moq integer,
  moq_unit varchar(24),
  export_markets jsonb NOT NULL DEFAULT '[]'::jsonb,
  video_url text,
  price_range varchar(160),
  status varchar(16) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  rejection_reason text,
  is_demo boolean NOT NULL DEFAULT false,
  submitted_at timestamp NOT NULL DEFAULT now(),
  approved_at timestamp,
  reviewed_by uuid REFERENCES users(id),
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now(),
  CONSTRAINT supplier_product_pages_supplier_slug_uniq UNIQUE (supplier_listing_id, slug)
);

CREATE INDEX IF NOT EXISTS supplier_product_pages_status_idx
  ON supplier_product_pages(status, updated_at);
CREATE INDEX IF NOT EXISTS supplier_product_pages_category_idx
  ON supplier_product_pages(category_id, status);
CREATE INDEX IF NOT EXISTS supplier_product_pages_supplier_idx
  ON supplier_product_pages(supplier_listing_id, status);

CREATE TABLE IF NOT EXISTS supplier_product_review_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_page_id uuid NOT NULL REFERENCES supplier_product_pages(id) ON DELETE CASCADE,
  reviewer_id uuid REFERENCES users(id),
  action varchar(24) NOT NULL CHECK (action IN ('submitted', 'resubmitted', 'approved', 'rejected', 'deleted')),
  reason text,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS supplier_product_review_logs_product_idx
  ON supplier_product_review_logs(product_page_id, created_at);
