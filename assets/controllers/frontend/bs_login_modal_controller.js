import {Controller} from "@hotwired/stimulus";
import {Modal} from "bootstrap";

export default class extends Controller {
    static MODAL_ID = 'loginModal';
    static OIDC_ERROR_SELECTOR = '.sac-oidc-error';
    static TARGET_PATH_INPUT_SELECTOR = 'input[name="_target_path"]';
    static SAME_SITE_TARGET = 'same-site';

    connect() {
        const modal = this._getModal();
        const hasOidcError = modal.querySelector(this.constructor.OIDC_ERROR_SELECTOR);

        if (hasOidcError) {
            this._show();
        }
    }

    open(event) {
        event.preventDefault();
        event.stopPropagation();
        this._updateTargetPath();
        this._show();
    }

    disconnect() {
        this._getModalInstance()?.hide();
    }

    _getModal() {
        const modal = document.getElementById(this.constructor.MODAL_ID);
        if (!modal) {
            throw new Error("Bootstrap modal markup not found!");
        }
        return modal;
    }

    _getModalInstance() {
        return Modal.getOrCreateInstance(this._getModal(), {});
    }

    _updateTargetPath() {
        const modal = this._getModal();
        const targetPathInput = modal.querySelector(this.constructor.TARGET_PATH_INPUT_SELECTOR);

        if (!targetPathInput) return;

        const isSameSiteTarget = this.element.dataset.sacLoginTarget === this.constructor.SAME_SITE_TARGET;

        if (isSameSiteTarget) {
            targetPathInput.dataset.origTargetPath ??= targetPathInput.value;
            targetPathInput.value = btoa(window.location.href);
        } else if (targetPathInput.dataset.origTargetPath) {
            targetPathInput.value = targetPathInput.dataset.origTargetPath;
        }
    }

    _show() {
        this._getModalInstance().show();
    }
}
