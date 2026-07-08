## Plan: Glowera Portfolio Card + Project Detail Modal

### 1. Assets

Copy uploaded images into `src/assets/`:
- `user-uploads://Artboard_3.png` → `src/assets/glowera-brand-board.png`
- `user-uploads://Artboard_4.png` → `src/assets/glowera-mockups-1.png`
- `user-uploads://Artboard_5.png` → `src/assets/glowera-mockups-2.png`

> Note: Only `Artboard_3.png` is present in the current uploads. `Artboard_4.png` and `Artboard_5.png` are not attached to this message. I'll proceed with just `Artboard_3.png` in the gallery for now and the gallery array can be extended once the other two are uploaded. If you'd like, re-attach them before I implement.

Import the available asset(s) at the top of `Portfolio.tsx`.

### 2. Update first portfolio item (id: 1) in `src/pages/Portfolio.tsx`

| Field | New value |
|---|---|
| title | `Glowera Brand Identity` |
| client | `Glowera` |
| year | `2025` |
| description | `Complete brand identity design for a beauty brand, including logo, color palette, typography system, brand pattern, and mockup application across apparel, packaging, print, and outdoor advertising.` |
| tags | `['Branding', 'Logo Design', 'Print Design', 'Identity']` |
| image | brand board thumbnail |
| gallery | array of all Glowera images in order |

Update the card render so that when `item.image` is a real imported asset it displays as an `<img>` filling the aspect ratio box; other cards keep the current `Eye` icon placeholder.

### 3. New component `src/components/ProjectDetailModal.tsx`

- Built on shadcn `Dialog` (already in project) for accessible overlay + close-on-outside-click + Esc + X button.
- Dark semi-transparent overlay, large centered scrollable panel.
- Header: title, client, year, tag badges, description.
- Below: vertically stacked full-width images from `gallery`, lazy-loaded, with rounded corners and spacing.
- Props: `open`, `onOpenChange`, `project` (title, client, year, description, tags, gallery).

### 4. Wire up in `Portfolio.tsx`

- Add `openProjectId` state.
- For card with `id === 1`, the "View Project" button sets `openProjectId = 1` (instead of any external link behavior).
- Render `<ProjectDetailModal>` once, controlled by `openProjectId === 1`, passing the Glowera item.
- Other 5 cards: unchanged behavior.

### Out of scope
- No changes to filters, layout, other pages, or design tokens.
- No routing changes — modal only.