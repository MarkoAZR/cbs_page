# Design System Strategy: Nocturnal Intelligence

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Obsidian Lab."** 

Moving away from the sterile, bleached-white aesthetic of traditional research tools, this system embraces a sophisticated, low-light environment designed for deep focus and high-stakes data analysis. It mimics the interface of a high-end electron microscope or a proprietary satellite console. 

To break the "template" look, we utilize **Intentional Asymmetry**. Do not align every module to a rigid center; allow data visualizations to bleed off-canvas or sit offset against secondary information. We replace the "box-and-border" mentality with **Atmospheric Depth**, using overlapping translucent layers and neon accents to guide the eye through complex information hierarchies.

## 2. Color & Atmospheric Theory
The palette is a study in "Dark Nature"—blending deep forest pigments with the hyper-functional glow of a digital interface.

*   **Primary Core (`#aaffdc`, `#00fdc1`):** Use these sparingly. These are not just "colors"; they are "light sources." Reserve them for critical data points, active states, and primary CTAs.
*   **The Foundation:** The `background` (`#0c0e10`) is a true obsidian. Use `surface-container-low` (`#111416`) to create large structural zones.
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. To separate a sidebar from a main feed, transition from `surface-container` (`#171a1c`) to `surface` (`#0c0e10`). The eye should perceive a change in "depth," not a drawn line.
*   **The Glass & Gradient Rule:** For floating headers or navigation rails, use `surface-container-high` (`#1d2022`) with a 70% opacity and a `24px` backdrop-blur. Apply a subtle linear gradient to main action buttons, transitioning from `primary` (`#aaffdc`) to `primary_container` (`#00fdc1`) at a 135-degree angle to provide a sense of "liquid light."

## 3. Typography: Technical Precision
We use **Inter** exclusively to maintain a "Digital Lab" feel. The hierarchy is designed to make dense data legible while allowing editorial moments to feel authoritative.

*   **Display & Headlines:** Use `display-md` (`2.75rem`) for high-level dashboard summaries. Keep letter-spacing at `-0.02em` to feel tight and engineered.
*   **The Lab Label:** Use `label-md` (`0.75rem`) in all caps with `+0.05em` tracking for metadata, timestamps, and sensor readings. This mimics the etched labels on laboratory equipment.
*   **Body Text:** `body-lg` (`1rem`) should utilize `on_surface_variant` (`#aaabad`) for long-form reading to reduce eye strain against the dark background. Reserve `on_surface` (`#eeeef0`) for emphasized text.

## 4. Elevation & Depth
In "The Obsidian Lab," depth is signaled by luminosity and tonal shifts rather than shadows.

*   **The Layering Principle:** 
    *   **Level 0 (Floor):** `surface_dim` (`#0c0e10`) - The canvas.
    *   **Level 1 (Sub-section):** `surface_container_low` (`#111416`) - Embedded charts/tables.
    *   **Level 2 (Active Card):** `surface_container_highest` (`#232629`) - High-priority data modules.
*   **Ambient Shadows:** If a modal must float, use a shadow with a `64px` blur, `0px` offset, and `8%` opacity, using the `primary` color as the shadow tint. This creates a "neon glow" rather than a dark drop shadow.
*   **The Ghost Border:** For input fields or secondary buttons, use `outline_variant` (`#46484a`) at `20%` opacity. It should be felt, not seen.

## 5. Component Logic

### Buttons & Interaction
*   **Primary Action:** A solid `primary` (`#aaffdc`) fill with `on_primary` (`#00654b`) text. Use `lg` (0.5rem) rounding.
*   **Secondary Action:** `secondary_container` (`#2a4c4c`) background with `on_secondary_container` (`#b3d7d7`) text. No border.
*   **Tertiary/Ghost:** Ghost styling with `tertiary` (`#bcff5f`) text. Only appears on hover via a subtle `surface_bright` background shift.

### Cards & Data Modules
*   **Forbid Divider Lines:** Use `2rem` (32px) of vertical whitespace to separate card sections. 
*   **Status Indicators:** Use `tertiary` (`#bcff5f`) for "Active/Safe" and `error` (`#ff716c`) for "Critical" states. These should be treated as "Glow Points"—small 8px circles with a soft outer glow.

### Laboratory Inputs
*   **Text Fields:** Use `surface_container_highest` as the fill. The bottom edge should have a 2px "indicator line" using the `outline` token, which transforms into a `primary` neon glow when focused.
*   **Selection Chips:** Use `secondary_fixed_dim` for unselected states. Upon selection, the chip should "power on" with a `primary` background and `on_primary` text.

### Custom Components: The "Data Pulse"
*   **The Chronology Rail:** A vertical timeline component using a `0.5px` `outline_variant` line (the only exception to the border rule) with `tertiary` nodes to indicate data capture points.

## 6. Do’s and Don'ts

### Do
*   **DO** use "Negative Space" as a structural tool. Let the dark background breathe.
*   **DO** use the `tertiary` neon green (`#bcff5f`) for success states—it pops perfectly against the slate grays.
*   **DO** ensure all "Glass" elements have a `backdrop-blur` to maintain legibility over moving data visualizations.

### Don't
*   **DON'T** use pure white (`#ffffff`) for text. It causes "halation" (a visual vibrating effect) on dark backgrounds. Always use `on_surface` (`#eeeef0`).
*   **DON'T** use standard 1px borders to separate table rows. Use alternating row fills of `surface_container_low` and `surface_container`.
*   **DON'T** use heavy drop shadows. They look muddy in dark mode; use tonal lifting instead.