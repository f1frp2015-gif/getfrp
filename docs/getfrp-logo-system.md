# GetFRP logo system

The logo keeps two established brand cues: the continuous loop represents connection and an end-to-end supply chain; the three outgoing strands represent composite reinforcement. The compact geometry is designed to remain recognizable in browser tabs, circular avatars, mobile home screens, and the website header.

## Assets

| Use | Preferred asset | Fallback |
| --- | --- | --- |
| Website header and light layouts | `/brand/getfrp-wordmark.svg` | `/getfrp-logo.png` |
| Compact placement on light backgrounds | `/brand/getfrp-mark.svg` | — |
| Compact placement on dark backgrounds | `/brand/getfrp-mark-reversed.svg` | — |
| Social avatar and app tile | `/brand/getfrp-avatar.svg` | `/brand/getfrp-avatar-1024.png` or `-512.png` |
| Browser tab | `/favicon.svg` | `/favicon.png` |
| Apple touch icon | `/apple-icon.png` | — |

The live React header uses the same vector paths through `src/components/logo.tsx`, so it is sharp at every device pixel ratio and inherits the site typography for the wordmark.

## Usage rules

- Preserve at least 12.5% clear space around the compact mark or avatar.
- Use the full wordmark at 120 px wide or larger. Below that, use the compact mark.
- Keep the approved colors: navy `#0A1F44`, teal `#19C3C8`, and white.
- Use the reversed mark on navy, blue, photography, or any dark surface.
- Do not stretch, rotate, add gradients or shadows, recolor individual strands, or crop inside the rounded avatar tile.

PNG files are compatibility exports. SVG is the source of truth for future changes.
