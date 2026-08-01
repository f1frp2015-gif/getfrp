-- GetFRP supplier/product core catalog.
-- Additive only: legacy materials, patents and articles remain archived.

CREATE TABLE IF NOT EXISTS "products" (
  "id" varchar(100) PRIMARY KEY NOT NULL,
  "slug" varchar(120) NOT NULL UNIQUE,
  "name" varchar(200) NOT NULL,
  "name_en" varchar(200) NOT NULL,
  "short_name" varchar(120),
  "category" varchar(80) NOT NULL,
  "summary" text NOT NULL,
  "description" text,
  "overview" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "materials" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "manufacturing_processes" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "applications" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "standards" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "specifications" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "buying_checks" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "faqs" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "search_terms" jsonb DEFAULT '[]'::jsonb NOT NULL,
  "image_url" text,
  "image_alt" text,
  "status" varchar(20) DEFAULT 'draft' NOT NULL,
  "source" varchar(32) DEFAULT 'getfrp' NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "products_category_idx" ON "products" ("category");
CREATE INDEX IF NOT EXISTS "products_status_idx" ON "products" ("status");
CREATE INDEX IF NOT EXISTS "products_name_en_idx" ON "products" ("name_en");

CREATE TABLE IF NOT EXISTS "supplier_products" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "supplier_listing_id" varchar(50) NOT NULL REFERENCES "supplier_listings"("id") ON DELETE CASCADE,
  "product_id" varchar(100) NOT NULL REFERENCES "products"("id") ON DELETE CASCADE,
  "relationship_type" varchar(32) DEFAULT 'manufacturer' NOT NULL,
  "supplier_product_name" varchar(200),
  "supplier_sku" varchar(120),
  "is_primary" boolean DEFAULT false NOT NULL,
  "is_verified" boolean DEFAULT false NOT NULL,
  "custom_available" boolean DEFAULT false NOT NULL,
  "moq" integer,
  "moq_unit" varchar(24),
  "lead_time_days" integer,
  "specification_overrides" jsonb DEFAULT '{}'::jsonb NOT NULL,
  "evidence" jsonb,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS "supplier_products_supplier_product_uniq"
  ON "supplier_products" ("supplier_listing_id", "product_id");
CREATE INDEX IF NOT EXISTS "supplier_products_supplier_idx"
  ON "supplier_products" ("supplier_listing_id");
CREATE INDEX IF NOT EXISTS "supplier_products_product_idx"
  ON "supplier_products" ("product_id");
CREATE INDEX IF NOT EXISTS "supplier_products_verified_idx"
  ON "supplier_products" ("is_verified");
