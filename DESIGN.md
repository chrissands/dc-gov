---
name: DC.gov (beta)
description: Official website of the Government of the District of Columbia
colors:
  primary-blue: "#03438d"
  accent-blue: "#0774e4"
  heading-navy: "#053068"
  background-gray: "#e8ebf1"
  surface: "#ffffff"
  text: "#1e1e2f"
  text-muted: "#3a3a3a"
  text-subtle: "#767676"
  dc-red: "#d22517"
  light-blue: "#b0d6fe"
typography:
  display:
    fontFamily: "neue-haas-grotesk-display, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: "40px"
    fontWeight: 700
  h2:
    fontFamily: "neue-haas-grotesk-display, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: "32px"
    fontWeight: 700
  h3:
    fontFamily: "neue-haas-grotesk-display, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 700
  body:
    fontFamily: "neue-haas-grotesk-text, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
rounded:
  card: "20px"
  pill: "100px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
components:
  button-pill-primary:
    backgroundColor: "{colors.primary-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
---

<!-- stardust:provenance writtenBy=stardust:extract sources=_computed-styles.json,assets/css -->

## Overview

The design is a civic, modern-municipal system. White cards with 20px corners sit on a cool light-gray canvas (#e8ebf1), set in Neue Haas Grotesk with deep DC blues. Blue title bands open the inner pages, and pill buttons and pill links carry the actions. The DC flag logo is the signature mark.

## Colors

The primary blue #03438d is used for title bands, pills and links. The accent blue #0774e4 marks the survey card and highlights. Navy #053068 is used for headings and the footer. The canvas is gray #e8ebf1, the cards are white, the text is #1e1e2f, and the flag red is #d22517.

## Typography

Neue Haas Grotesk Display is used for headings at 700/600 weight, with sizes 40/32/24/18 for h1–h4. Neue Haas Grotesk Text is used for body at 18px/400 and UI at 16px/500. The faces are commercial and self-hosted by the source. The migration keeps the family names first in the stack and falls back to Helvetica Neue/Arial.

## Layout

The layout is fluid, with module caps of 1920px on home and neighborhoods and 1464px on the sidebar pages (cap-probe, `extensions.breakpoints`). Inner pages use breadcrumbs, a hero band, and a main column with a right sidebar of Contact/Follow cards.

## Shapes

Cards use 20px corners. Buttons and links use 100px pill shapes.

## Components

The site header has an alert bar, the logo, Translate/alerts/Search toggles, and "I want to" / "I am a" menus plus the Services/Neighborhoods/Government nav. Other components: service-link cards, stat cards (service status), event cards, action slabs (news/events), accordions (org charts), the feedback band ("We want to hear from you." plus a survey card), the emblem section ("Powered by DC.gov") and the navy footer.
