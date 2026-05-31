export const API_URL = process.env.REACT_APP_API || "/api";

const placeholderSvg = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect width="800" height="600" fill="#f1f5f9"/>
  <rect x="90" y="90" width="620" height="420" rx="32" fill="#e2e8f0"/>
  <circle cx="290" cy="250" r="58" fill="#94a3b8"/>
  <path d="M150 460l165-160 115 110 80-76 140 126H150z" fill="#64748b"/>
  <text x="400" y="545" text-anchor="middle" font-family="Arial" font-size="34" font-weight="700" fill="#334155">Product image</text>
</svg>
`);

export const PRODUCT_PLACEHOLDER = `data:image/svg+xml;charset=UTF-8,${placeholderSvg}`;

export function productPhotoUrl(productId) {
  return productId ? `${API_URL}/product/photo/${productId}` : PRODUCT_PLACEHOLDER;
}
