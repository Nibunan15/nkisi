/*
 * Production replacement for the design tool's <image-slot> placeholder.
 * <image-slot id="founder-photo"> renders /images/founder-photo.jpg (or the `src` attribute).
 * If the file is missing, the slot shows its placeholder text inside the original framed box.
 */
class ImageSlot extends HTMLElement {
  static get observedAttributes() { return ['src', 'id', 'fit', 'placeholder']; }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }
  render() {
    const src = this.getAttribute('src') || (this.id ? '/images/' + this.id + '.jpg' : '');
    const fit = this.getAttribute('fit') || 'cover';
    const label = this.getAttribute('placeholder') || '';
    if (!this.style.display) this.style.display = 'block';
    this.style.position = this.style.position || 'relative';
    this.style.overflow = 'hidden';
    this.textContent = '';
    const fallback = () => {
      this.textContent = '';
      const p = document.createElement('span');
      p.textContent = label;
      Object.assign(p.style, { position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', textAlign: 'center', font: '600 13px/1.4 var(--font-sans)', color: 'var(--fg-3)' });
      this.appendChild(p);
    };
    if (!src) return fallback();
    const img = document.createElement('img');
    img.src = src;
    img.alt = this.getAttribute('alt') || '';
    img.decoding = 'async';
    Object.assign(img.style, { width: '100%', height: '100%', objectFit: fit, display: 'block' });
    img.onerror = fallback;
    this.appendChild(img);
  }
}
if (!customElements.get('image-slot')) customElements.define('image-slot', ImageSlot);
