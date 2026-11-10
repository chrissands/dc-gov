# Dynamic features — detected (2026-11-06T17:56:35.633Z)

Pages probed: /, /services, /neighborhoods, /organizational-charts-agencies-and-offices-under-mayors-authority · settle 5000 ms · width 1440 · reach from 8/8 crawled pages

Evidence only. Every row must receive a disposition in `stardust/dynamic-features.md` (`dynamics-plan.mjs` drafts it).

| id | class | feature | pages | reach | evidence | hint |
|---|---|---|---|---|---|---|
| a-cms-app-settings-object-drupalsettings | A API / personalisation / settings | CMS / app settings object drupalSettings | 4/4 |  | ajaxTrustedUrl<br>webform | settings |
| a-cms-app-settings-object-datalayer | A API / personalisation / settings | CMS / app settings object dataLayer | 4/4 |  |  | settings |
| a-unknown-third-party-host-www-juicer-io | A API / personalisation / settings | unknown third-party host www.juicer.io | 1/4 |  | www.juicer.io | inspect |
| f-form-webform-submission-send-your-feedback-add-form-7-orig | F form | form "webform-submission-send-your-feedback-add-form--7" → origin / (3 fields) | 1/4 |  | textarea:about_this_page,email:email,text:url<br>form_build_id,form_id | forms |
| f-form-email-e-checkbox-consent-no-action-js-wired-2-fields | F form | form "email:e+checkbox:consent" → no action (JS-wired) (2 fields) | 1/4 |  | email:e,checkbox:consent | client-compute? |
| f-form-webform-submission-send-your-feedback-node-391-add-fo | F form | form "webform-submission-send-your-feedback-node-391-add-form--20" → origin /services (3 fields) | 1/4 |  | textarea:about_this_page,email:email,text:url<br>form_build_id,form_id | forms |
| f-form-webform-submission-send-your-feedback-node-661-add-fo | F form | form "webform-submission-send-your-feedback-node-661-add-form" → origin /organizational-charts-agencies-and-offices-under-mayors-authority (3 fields) | 1/4 |  | textarea:about_this_page,email:email,text:url<br>form_build_id,form_id | forms |
| m-modal-trigger-prefix-overlay-action-later-button-content | M modal / interactive | modal trigger prefix-overlay-action-later → button:content | 1/4 |  | Remind Me Later | modal |
| s-site-search-form-search | S search | site search form → /search | 4/4 | 3/8 | search:key | search |
| s-site-search-form-services | S search | site search form → /services | 1/4 | 3/8 | text:search_api_fulltext,search:combodrop-text-filter--agency,checkbox:field_agency_dropdown[dc_gov],checkbox:field_agency_dropdown[ddot_dc_gov],checkbox:field_agency_dropdown[mayormb_dc_gov],checkbox:field_agency_dropdown[preview_odr_dc_gov],checkbox:field_agency_dropdown[osse_dc_gov],search:combodrop-text-filter--topics,search:combodrop-text-filter--seasons,checkbox:field_seasons[35],checkbox:field_seasons[33],checkbox:field_seasons[34] | search |
| t-unknown-third-party-host-static-cloudflareinsights-com | T tag / consent | unknown third-party host static.cloudflareinsights.com | 4/4 |  | static.cloudflareinsights.com | inspect |
| t-unknown-third-party-host-cdn-gtranslate-net | T tag / consent | unknown third-party host cdn.gtranslate.net | 4/4 |  | cdn.gtranslate.net | inspect |
| t-tag-manager-google-tag-manager | T tag / consent | tag manager: Google Tag Manager | 4/4 |  | www.googletagmanager.com | tags |
| t-marketing-ad-retargeting-pixel | T tag / consent | marketing: ad / retargeting pixel | 4/4 |  | stats.g.doubleclick.net | tags |
| t-analytics-google-analytics-ads | T tag / consent | analytics: Google Analytics / Ads | 4/4 |  | analytics.google.com | tags |
| t-unknown-third-party-host-content-govdelivery-com | T tag / consent | unknown third-party host content.govdelivery.com | 1/4 |  | content.govdelivery.com | inspect |
| v-iframe-without-src-runtime-injected-embed | V media | iframe without src (runtime-injected embed) | 4/4 |  | 1×1 | embed-runtime |
| x-sign-in-account-links | X auth / commerce | sign-in / account links | 4/4 |  | https://mybusiness.dc.gov/login<br>https://311.dc.gov/citizen/s/login/<br>https://public.govdelivery.com/accounts/DCWASH/subscriber/new? | decided-out |
