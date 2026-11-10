<!-- stardust:provenance writtenBy=stardust:extract writtenAt=2026-11-06T17:55:00Z sources=stardust/current/pages/*.json,_brand-extraction.json -->
# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

DC residents, businesses and visitors looking for District government services, neighborhood information, news and events. The site also serves people navigating the Mayor's agencies and offices.

## Product Purpose

beta.dc.gov is the in-progress redesign of the official Government of the District of Columbia website. It routes people to services ("Frequently Requested Services", the 311 request entry point), shows service status (trash, DMV, parking, schools), and publishes news, events, agency directories and org charts. The header alert states: "You are previewing the early version of the redesigned DC.gov—still a work in progress."

## Positioning

The official, task-first front door to DC government. It is plain-spoken and civic. Wayfinding ("I want to…", "I am a…", search) comes before persuasion.

## Capabilities and Constraints

- Drupal site with views-driven listings: services (keyword plus agency/topic/season filters), news (release-type filter, pagination) and events ("Load More").
- Site search, a translation toggle, header alerts with a dismiss control, and a timed GovDelivery subscription overlay.
- Third-party embeds: a Juicer social feed and a feedback survey link.

## Brand Commitments

- Register: `product`. It is a task-oriented government service portal.
- Personality: civic, trustworthy, clear, modern-municipal. The DC flag (red stars and bars) is the brand signature.
- Anti-references: commercial marketing gloss and dense legacy-portal clutter.

## Evidence on Hand

- `stardust/current/pages/*.json` + `*.html`: 8 live Playwright captures.
- `stardust/current/assets/screenshots/`: full-page captures.
- `stardust/current/_computed-styles.json`: computed-style census at 1440 and 360.
- `stardust/current/assets/css/`: the live stylesheets.
- `stardust/current/assets/logo*.svg`, `favicon.ico`.

## Product Principles

_provenance: inferred — from the captured copy and IA._
- Tasks first: services, status and requests are surfaced above news.
- One consistent shell: header, alert, feedback band and footer appear on every page.
- Accessible, plain language.

## Accessibility & Inclusion

The site is a public-sector property (Section 508 / WCAG 2.x expectations). It offers a translation toggle and visually-hidden labels on icon controls.
