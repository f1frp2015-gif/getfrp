// Single source of truth for user-facing contact info.
//
// Policy: one contact channel, labelled as the technical service
// Public GetFRP contact channel.
// No sales-vs-tech split, no individual names, no phone, no WeChat.
// Buyers who want to talk to a human are routed through /rfq first;
// this email is the catch-all for everything else.

export const CONTACT = {
  email: "support@getfrp.com",
} as const;

export const PRIMARY_CONTACT_EMAIL = CONTACT.email;
