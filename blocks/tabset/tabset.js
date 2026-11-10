/**
 * tabset — "Frequently Requested Services" (beta.dc.gov replica). Template-slotted shell;
 * rows: heading, one row per tab label, then per panel its card rows and the closing
 * "All citywide services" link row. Tabs are div[role=tab] so no <button> hosts authored
 * text (EW7). Behaviour lifted from canon.js: choosing a tab opens the set (mod-open),
 * marks the tab active and shows its panel.
 */

const TPL = '<section class="c-layout-container mod-regular"><div class="c-layout-container-color-wrapper"><div class="c-layout-container-l-content-width"><h2 class="c-heading c-layout-container-heading" id="frequently-requested-services" data-s="h" data-t></h2><div class="c-layout-container-content"><div class="c-tabset"><div class="c-tabset-tablist" role="tablist"><div class="c-tabset-tab mod-active" aria-controls="tabset-panel-1" role="tab" tabindex="0" aria-selected="true" data-u="tabs" data-s="p" data-t></div><div class="c-tabset-tab" aria-controls="tabset-panel-2" role="tab" tabindex="-1" aria-selected="false" data-u="tabs" data-s="p" data-t></div><div class="c-tabset-tab" aria-controls="tabset-panel-3" role="tab" tabindex="-1" aria-selected="false" data-u="tabs" data-s="p" data-t></div><div class="c-tabset-tab" aria-controls="tabset-panel-4" role="tab" tabindex="-1" aria-selected="false" data-u="tabs" data-s="p" data-t></div><div class="c-tabset-tab" aria-controls="tabset-panel-5" role="tab" tabindex="-1" aria-selected="false" data-u="tabs" data-s="p" data-t></div><div class="c-tabset-tab" aria-controls="tabset-panel-6" role="tab" tabindex="-1" aria-selected="false" data-u="tabs" data-s="p" data-t></div></div><div class="c-tabset-panels"><article class="c-tabset-panel" id="tabset-panel-1" aria-labelledby="tabset--tab-1" role="tabpanel"><div><div><div class="c-layout-adaptive-grid expand-context mod-fill mod-feature-first"><article class="c-card-frame set-small-text set-bg-mid" data-u="cards"><div class="c-card-frame-l grid-cell-stretch"><div class="c-icon" style="--i-icon-m-width: 100px; --i-icon-m-color: var(--color-m-red);" aria-hidden="true"><svg class="icon icon-311" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#311"></use></svg></div><div class="c-spacer" aria-hidden="true" style="--i-spacer-m-width: 1em; --i-spacer-m-height: 1em;"></div><h3 data-s="h" data-t></h3><p data-s="p" data-t></p><div class="c-spacer" aria-hidden="true" style="--i-spacer-m-width: 1em; --i-spacer-m-height: 1em;"></div><div class="c-layout-flex" style="--i-layout-flex-m-align-items: center; --i-layout-flex-m-justify-content: start;"><a href="https://311.dc.gov/" class="c-link-pill mod-arrow" data-s="a" data-t></a><a href="https://311.dc.gov/citizen/s/login/" class="c-link-small-pill" style="color: var(--color-m-navy); background-color: white;" data-s="a"><div class="c-icon c-link-small-pill-icon" style="--i-icon-m-width: 24px; --i-icon-m-color: var(--color-m-navy);" aria-hidden="true"><svg class="icon icon-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#lock"></use></svg></div><span class="c-link-small-pill-label" data-t></span></a></div></div></article><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="elderly-and-persons-with-physical-disabilities-waiver-program" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="adult-protective-services-2" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="alzheimer039s-disease-and-related-dementias-2" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="benefits-assistance-2" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div></div><div class="c-layout-flex mod-column mod-center" data-u="more"><div class="c-spacer" aria-hidden="true" style="--i-spacer-m-width: 1em; --i-spacer-m-height: 1em;"></div><a href="/services" class="c-link-arrow mod-arrow" data-s="a" data-t></a></div></div></div></article><article class="c-tabset-panel" id="tabset-panel-2" aria-labelledby="tabset--tab-2" role="tabpanel" hidden=""><div><div><div class="c-layout-adaptive-grid expand-context mod-fill"><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="birth-certificate" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="my-school-dc" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="out-of-state-driver-licenses" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="residential-parking-permits-2" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="vehicle-registration" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div></div><div class="c-layout-flex mod-column mod-center" data-u="more"><div class="c-spacer" aria-hidden="true" style="--i-spacer-m-width: 1em; --i-spacer-m-height: 1em;"></div><a href="/services" class="c-link-arrow mod-arrow" data-s="a" data-t></a></div></div></div></article><article class="c-tabset-panel" id="tabset-panel-3" aria-labelledby="tabset--tab-3" role="tabpanel" hidden=""><div><div><div class="c-layout-adaptive-grid expand-context mod-fill"><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="dc-careers" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="department-of-employment-services-does" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="fedsupport" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="occupational-skills-training" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="talent-capital-ai" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="unemployment-compensation" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div></div><div class="c-layout-flex mod-column mod-center" data-u="more"><div class="c-spacer" aria-hidden="true" style="--i-spacer-m-width: 1em; --i-spacer-m-height: 1em;"></div><a href="/services" class="c-link-arrow mod-arrow" data-s="a" data-t></a></div></div></div></article><article class="c-tabset-panel" id="tabset-panel-4" aria-labelledby="tabset--tab-4" role="tabpanel" hidden=""><div><div><div class="c-layout-adaptive-grid expand-context mod-fill"><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="building-permit" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="business-license" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="business-resource-center" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="caregiver-programs" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="case-management" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="commercial-vehicles" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div></div><div class="c-layout-flex mod-column mod-center" data-u="more"><div class="c-spacer" aria-hidden="true" style="--i-spacer-m-width: 1em; --i-spacer-m-height: 1em;"></div><a href="/services" class="c-link-arrow mod-arrow" data-s="a" data-t></a></div></div></div></article><article class="c-tabset-panel" id="tabset-panel-5" aria-labelledby="tabset--tab-5" role="tabpanel" hidden=""><div><div><div class="c-layout-adaptive-grid expand-context mod-fill"><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="elderly-and-persons-with-physical-disabilities-waiver-program" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="adult-protective-services-2" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="alzheimer039s-disease-and-related-dementias-2" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="benefits-assistance-2" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="nutrition-for-seniors" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="safe-at-home-program-2" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div></div><div class="c-layout-flex mod-column mod-center" data-u="more"><div class="c-spacer" aria-hidden="true" style="--i-spacer-m-width: 1em; --i-spacer-m-height: 1em;"></div><a href="/services" class="c-link-arrow mod-arrow" data-s="a" data-t></a></div></div></div></article><article class="c-tabset-panel" id="tabset-panel-6" aria-labelledby="tabset--tab-6" role="tabpanel" hidden=""><div><div><div class="c-layout-adaptive-grid expand-context mod-fill"><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="certificate-of-clean-hands" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="mytaxdcgov" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="new-business-registration" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="otr-recorder-of-deeds" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="search-file-pay-taxes-online-2" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div><div class="c-card-service-link stretch-shape hover-dark set-bg-mid" data-u="cards"><div class="c-card-service-link-l grid-cell-stretch"><div class="c-card-service-link-text-l"><h3 class="c-heading mod-link c-card-service-link-heading" id="tax-forms-amp-instructions" data-s="h" data-t></h3><div class="c-card-service-link-content"><p data-s="p" data-t></p></div></div><div class="c-card-service-link-arrow" aria-hidden="true"><svg class="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" color="currentColor" aria-hidden="true"><use href="/icons/dc-icons-sprite.svg#arrow-right"></use></svg></div></div></div></div><div class="c-layout-flex mod-column mod-center" data-u="more"><div class="c-spacer" aria-hidden="true" style="--i-spacer-m-width: 1em; --i-spacer-m-height: 1em;"></div><a href="/services" class="c-link-arrow mod-arrow" data-s="a" data-t></a></div></div></div></article></div></div></div></div></div></section>';

/* Template-slot engine (shared shape across the index blocks; inlined because blocks
 * may not import each other). TPL is the prototype section with every authored element
 * replaced by an empty slot ([data-s] = i|h|p|a|l); repeat units carry [data-u]. Authored
 * nodes are MOVED into the slots; the slot's classes and attributes are grafted onto them. */
const KEEP = new Set(['href', 'src', 'srcset', 'alt', 'data-s', 'data-t', 'data-u']);

function frag(html) {
  const t = document.createElement('template');
  t.innerHTML = html;
  return t.content;
}

function copyAttrs(t, host) {
  [...t.attributes].forEach(({ name, value }) => {
    if (KEEP.has(name)) return;
    if (name === 'class') host.classList.add(...value.split(/\s+/).filter(Boolean));
    else host.setAttribute(name, value);
  });
}

const isTextHost = (n) => n.hasAttribute('data-t') || !!n.querySelector('[data-t]');

function graft(t, host, pool) {
  if (t !== host) copyAttrs(t, host);
  const kids = [...t.children];
  if (!kids.length) {
    if (t === host) host.replaceChildren(...pool);
    return;
  }
  const out = [];
  kids.forEach((k) => {
    if (!isTextHost(k)) {
      out.push(k);
      return;
    }
    if (k.tagName === 'I' && k.hasAttribute('data-t')) {
      out.push(...pool.splice(0));
      return;
    }
    const m = pool.find((n) => n.nodeType === 1 && n.tagName === k.tagName);
    if (m) {
      pool.splice(pool.indexOf(m), 1);
      graft(k, m, [...m.childNodes]);
      out.push(m);
    } else {
      graft(k, k, pool.splice(0));
      out.push(k);
    }
  });
  out.push(...pool);
  host.replaceChildren(...out);
}

function kind(el) {
  if (!el) return '';
  const tag = el.tagName;
  if (tag === 'IMG' || tag === 'PICTURE') return 'i';
  if (el.querySelector('img') && !el.textContent.trim()) return 'i';
  if (/^H[1-6]$/.test(tag)) return 'h';
  if (tag === 'UL' || tag === 'OL') return 'l';
  if (tag === 'A') return 'a';
  const only = el.children.length === 1 ? el.firstElementChild : null;
  if (only && only.tagName === 'A' && only.textContent.trim() === el.textContent.trim()) return 'a';
  return 'p';
}

function place(slot, el) {
  const tag = slot.tagName;
  if (tag === 'IMG') {
    const img = el.tagName === 'IMG' ? el : el.querySelector('img');
    if (img) copyAttrs(slot, img);
    if (el !== img) {
      el.classList.add('tp');
      el.querySelectorAll('picture').forEach((p) => p.classList.add('tp'));
    }
    slot.replaceWith(el);
    return;
  }
  if (el.tagName === tag) {
    graft(slot, el, [...el.childNodes]);
    slot.replaceWith(el);
    return;
  }
  const only = el.children.length === 1 ? el.firstElementChild : null;
  if (only && only.tagName === tag && only.textContent.trim() === el.textContent.trim()) {
    graft(slot, only, [...only.childNodes]);
    el.classList.add('tp');
    slot.replaceWith(el);
    return;
  }
  el.classList.add('tp');
  graft(slot, slot, [el]);
  slot.removeAttribute('data-s');
}

/** authored elements of one block row, cell by cell */
function items(row) {
  return row ? [...row.children].flatMap((cell) => [...cell.children]) : [];
}

function slotsOf(unit) {
  return unit.hasAttribute('data-s') ? [unit] : [...unit.querySelectorAll('[data-s]')];
}

/** kind-aligned fill: unmatched slots are dropped, unmatched authored nodes are kept */
function fill(slots, els, host) {
  let e = 0;
  let last = null;
  slots.forEach((s) => {
    const el = els[e];
    if (el && kind(el) === s.dataset.s) {
      place(s, el);
      last = el;
      e += 1;
    } else s.remove();
  });
  const rest = els.slice(e);
  if (!rest.length) return;
  if (last) last.after(...rest);
  else if (host) host.append(...rest);
}

const shapeOf = (unit) => slotsOf(unit).map((s) => s.dataset.s).join();

function segments(root) {
  const segs = [];
  root.querySelectorAll('[data-u], [data-s]').forEach((n) => {
    const last = segs[segs.length - 1];
    if (n.hasAttribute('data-u')) {
      if (last && last.g === n.dataset.u && n.parentElement === last.units[0].parentElement) {
        last.units.push(n);
      } else segs.push({ g: n.dataset.u, units: [n] });
    } else if (n.closest('[data-u]')) {
      // slot of a unit: filled with its unit
    } else if (last && !last.g) last.slots.push(n);
    else segs.push({ slots: [n] });
  });
  return segs;
}

function fillGroup(seg, rows) {
  const pristine = seg.units.map((u) => u.cloneNode(true));
  const shapes = pristine.map(shapeOf);
  const used = new Set();
  const marker = document.createComment('u');
  seg.units[0].before(marker);
  seg.units.forEach((u) => u.remove());
  const placed = rows.map((row, j) => {
    const els = items(row);
    const sh = els.map(kind).join();
    const order = [j, ...shapes.keys()].filter((x) => x < shapes.length);
    let idx = order.find((x) => !used.has(x) && shapes[x] === sh);
    if (idx === undefined) idx = order.find((x) => shapes[x] === sh);
    if (idx === undefined) idx = Math.min(j, shapes.length - 1);
    let unit;
    if (!used.has(idx)) {
      unit = seg.units[idx];
      used.add(idx);
    } else {
      unit = pristine[idx].cloneNode(true);
      [unit, ...unit.querySelectorAll('[id]')].forEach((n) => n.removeAttribute('id'));
    }
    const box = document.createDocumentFragment();
    box.append(unit);
    fill(slotsOf(unit), els, unit);
    return [...box.childNodes];
  });
  marker.replaceWith(...placed.flat());
}

const rowShape = (row) => items(row).map(kind).join();

function segShapes(seg) {
  return seg.g ? seg.units.map(shapeOf) : [seg.slots.map((s) => s.dataset.s).join()];
}

function run(block, html) {
  const root = frag(html);
  const rows = [...block.children];
  const segs = segments(root);
  let r = 0;
  segs.forEach((seg, i) => {
    const need = segs.length - i - 1;
    if (!seg.g) {
      fill(seg.slots, items(rows[r]), seg.slots[0] && seg.slots[0].parentElement);
      r += 1;
      return;
    }
    const mineShapes = segShapes(seg);
    const nextShapes = segs[i + 1] ? segShapes(segs[i + 1]) : [];
    const first = mineShapes[0].split(',')[0];
    const fits = (row) => {
      const sh = rowShape(row);
      if (mineShapes.includes(sh)) return true;
      return sh.split(',')[0] === first && !nextShapes.includes(sh);
    };
    const mine = [];
    while (r < rows.length && rows.length - r > need && fits(rows[r])) {
      mine.push(rows[r]);
      r += 1;
    }
    fillGroup(seg, mine);
  });
  // leftovers pass: authored rows the template had no segment for stay visible
  const spare = rows.slice(r).flatMap(items);
  root.querySelectorAll('[data-s]').forEach((s) => s.remove());
  root.querySelectorAll('i[data-t]').forEach((s) => s.remove());
  root.querySelectorAll('[data-t], [data-u]').forEach((n) => {
    n.removeAttribute('data-t');
    n.removeAttribute('data-u');
  });
  block.replaceChildren(root);
  if (spare.length) block.append(...spare);
}

function behave(block) {
  block.querySelectorAll('.c-tabset').forEach((set) => {
    const tabs = [...set.querySelectorAll('.c-tabset-tab')];
    const panels = [...set.querySelectorAll('.c-tabset-panel')];
    const choose = (i) => {
      set.classList.add('mod-open');
      tabs.forEach((x, j) => {
        x.classList.toggle('mod-active', i === j);
        x.setAttribute('aria-selected', String(i === j));
        x.setAttribute('tabindex', i === j ? '0' : '-1');
      });
      panels.forEach((p, j) => { p.hidden = i !== j; });
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => choose(i));
      t.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          choose(i);
        }
      });
    });
  });
}

export default function decorate(block) {
  if (block.dataset.filled) return;
  block.dataset.filled = 'true';
  run(block, TPL);
  behave(block);
}
