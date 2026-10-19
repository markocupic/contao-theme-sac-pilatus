import {Controller} from "@hotwired/stimulus";

/**
 * Schalter Hell/Dunkel im Header.
 *
 * Der Startzustand wird vom Inline-Skript in fe_page_sac_pilatus.html.twig
 * gesetzt (gespeicherte Wahl, sonst Systemeinstellung). Ein Klick überschreibt
 * die Systemeinstellung und wird im localStorage gespeichert.
 */
export default class extends Controller {
  static STORAGE_KEY = 'sacp-theme';

  connect() {
    this._onThemeChange = () => this._update();
    document.addEventListener('sacp:themechange', this._onThemeChange);
    this._update();
  }

  disconnect() {
    document.removeEventListener('sacp:themechange', this._onThemeChange);
  }

  toggle(event) {
    event.preventDefault();
    const theme = this._isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', theme);

    try {
      localStorage.setItem(this.constructor.STORAGE_KEY, theme);
    } catch (e) {
      // localStorage nicht verfügbar (z.B. privater Modus): Wahl gilt nur für diese Seite
    }

    this._update();
  }

  _isDark() {
    return document.documentElement.getAttribute('data-bs-theme') === 'dark';
  }

  _update() {
    const label = this._isDark() ? 'Helles Design einschalten' : 'Dunkles Design einschalten';
    this.element.setAttribute('aria-pressed', this._isDark() ? 'true' : 'false');
    this.element.setAttribute('aria-label', label);
    this.element.setAttribute('title', label);
  }
}
