import { writeFile } from "node:fs/promises";
import { join } from "node:path";

const LLMS = `# getfrp.com — China FRP Products & Manufacturers

> GetFRP is an independent English-language marketplace and structured database for overseas engineers and buyers sourcing FRP and composite products from China.

## Primary resources
- [FRP products](https://getfrp.com/products): product families with materials, processes, specifications, standards and buying checks.
- [China FRP manufacturers](https://getfrp.com/suppliers): searchable supplier directory. Every listed company has its own canonical profile URL.
- [Source from China](https://getfrp.com/source-from-china): RFQ, sampling, QA, payment, export and logistics playbook.
- [RFQ](https://getfrp.com/rfq): one controlled request for supplier matching and evidence review.
- [Technical references](https://getfrp.com/technical): FRP properties, density and engineering guidance.
- [Standards sourcing guide](https://getfrp.com/sourcing/gb-vs-astm-frp): how to compare GB, ASTM, ISO and EN test methods in an RFQ.
- [Crawlable supplier index](https://getfrp.com/suppliers/directory/1): paginated access to every public supplier profile.

## Product coverage
- FRP grating
- Pultruded FRP structural profiles
- Fiberglass sheet and panels
- GFRP and BFRP rebar
- FRP pipe, tanks and process equipment
- SMC and BMC molded parts
- Resin and gelcoat
- Glass, carbon and basalt reinforcement

## Supplier profile model
Each supplier profile identifies the company, China location, products, manufacturing processes, published certifications, scale indicators and official website where available. Public company statements are attributed; a GetFRP verification badge does not certify every offered product or performance claim.

## Language and site identity
primary: English
canonical site: https://getfrp.com
## Contact
- [Submit an RFQ or contact the sourcing desk](https://getfrp.com/rfq)
`;

const LLMS_FULL = `${LLMS}

## Buyer questions GetFRP is designed to answer
- Which Chinese manufacturers make a specified FRP product using the required process?
- What drawing, material, test and certificate evidence belongs in an FRP RFQ?
- How should molded and pultruded grating be compared for span, resin and fire requirements?
- Which supplier claims need plant, product-scope and validity checks before approval?
- Which GB test method is comparable to an ASTM, ISO or EN method, and where do procedures differ?

## Common sourcing controls
- Freeze the drawing revision, material system, quantity, destination and Incoterm.
- Match certificates and test reports to the legal entity, production site, product, grade and validity period.
- Define measurable dimensional, visual, mechanical and packaging acceptance criteria.
- Compare landed scope rather than an unsupported factory-gate unit price.
- Recheck samples and evidence before production and use the same criteria for pre-shipment inspection.
`;

async function main() {
  const publicDir = join(process.cwd(), "public");
  await writeFile(join(publicDir, "llms.txt"), LLMS, "utf8");
  await writeFile(join(publicDir, "llms-full.txt"), LLMS_FULL, "utf8");
  console.log("[build-llms-txt] wrote English-only GetFRP llms files");
}

main().catch((error) => {
  console.error("[build-llms-txt] failed:", error);
  process.exit(1);
});
