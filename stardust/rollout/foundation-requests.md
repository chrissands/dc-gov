# Foundation change requests (applied once at C-final)

- final | header behaviour: menus, drawers, alerts, accordions open/close; menu/i-menus/search move between large and small header slots; open-state + small-drawer CSS ported from the live header (133 scoped rules) | chrome-compare --profile replica vs stardust/chrome/header-contract.json: 16 errors (every toggle "nothing opens on the build") before the change | all templates (shared chrome) — APPLIED at C-final 2026-11-06
