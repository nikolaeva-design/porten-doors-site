export const SITE_URL = "https://portendoors.example" as const;

/**
 * High-res WebP for in-site use / modern `<Image>` (lighter than JPEG).
 * Not all social crawlers handle WebP; use `OPEN_GRAPH_PREVIEW_JPEG_PATH` for previews.
 */
export const DEFAULT_OG_IMAGE_PATH = "/growth-system-agency.webp" as const;

/**
 * JPEG used first in OG/Twitter metadata — widest crawler compatibility (`public/`).
 */
export const OPEN_GRAPH_PREVIEW_JPEG_PATH = "/home-growth-system-editorial.jpeg" as const;

/** Alt text reused for OG / Twitter preview images. */
export const OPEN_GRAPH_IMAGE_ALT =
  "Porten Doors — professional door replacement and installation in Greater Vancouver" as const;

export function absoluteSiteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
