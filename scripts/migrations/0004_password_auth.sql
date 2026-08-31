-- Direct email-and-password authentication for GetFRP.
-- Additive and idempotent; legacy phone, WeChat and OTP users remain valid.

ALTER TABLE "users"
  ADD COLUMN IF NOT EXISTS "password_hash" text;
