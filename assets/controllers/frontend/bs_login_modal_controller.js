import {Controller} from "@hotwired/stimulus";
import {Modal} from "bootstrap";

export default class extends Controller {

    connect() {
        // Auto-open modal on OIDC error
        const modal = document.getElementById('loginModal');

        this.element.addEventListener('click', this.open.bind(this));

        if (modal.querySelector(".sac-oidc-error")) {
            this.show();
        }
    }

    open(event) {
        event.preventDefault();
        event.stopPropagation();
        this.updateTargetPath();
        this.show();
    }

    updateTargetPath() {
        const modal = document.getElementById('loginModal');

        const input = modal.querySelector('input[name="_target_path"]');

        if (!input) return;

        if (this.element.dataset.sacLoginTarget === "same-site") {
            if (!input.dataset.origTargetPath) {
                input.dataset.origTargetPath = input.value;
            }
            input.value = btoa(window.location.href);
        } else {
            if (input.dataset.origTargetPath) {
                input.value = input.dataset.origTargetPath;
            }
        }
    }

    show() {
        const modal = Modal.getOrCreateInstance(document.getElementById('loginModal'), {});
        modal.show();
    }
}
