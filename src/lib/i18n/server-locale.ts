// GetFRP API routes are English-only. Client input and forwarded hosts cannot
// switch this standalone deployment into a Chinese response mode.

export function resolveServerLocale(
  _req: Request,
  _bodyLocale?: string,
): "en" {
  void _req;
  void _bodyLocale;
  return "en";
}
