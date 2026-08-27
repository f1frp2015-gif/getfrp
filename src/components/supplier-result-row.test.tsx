import assert from "node:assert/strict";
import { test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";

import { SupplierLogo } from "./supplier-result-row";

test("renders every supplier logo completely inside a fixed contain frame", () => {
  const html = renderToStaticMarkup(
    <SupplierLogo src="/supplier-assets/example-logo.png" name="Example Supplier" />,
  );

  assert.match(html, /data-supplier-logo="frame"/);
  assert.match(html, /data-supplier-logo="image"/);
  assert.match(html, /class="h-full w-full object-contain"/);
  assert.doesNotMatch(html, /object-cover/);
});

test("gives official light wordmarks a dark contrast frame", () => {
  const html = renderToStaticMarkup(
    <SupplierLogo
      src="/supplier-assets/newtech-group-logo-light.png"
      name="Newtech Group"
    />,
  );

  assert.match(html, /data-supplier-logo-contrast="dark"/);
  assert.match(html, /bg-slate-950/);
});
