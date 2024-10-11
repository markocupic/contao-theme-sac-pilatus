"use strict";

window.SacFrontendLoginModal = class {
    /**
     * Use the data-sac-login-toggle="modal" attribute to toggle the login modal
     * <button data-sac-login-toggle="modal">Login</button>
     */
    static initialize() {

        const buttons = document.querySelectorAll('*[data-sac-login-toggle="modal"]');

        for (const button of buttons) {
            button.addEventListener('click', e => {
                e.stopPropagation();
                e.preventDefault();
                // Use the currentTarget property on the event, because
                // e.target will probably submit the icon element.
                const loginBtn = e.currentTarget;
                this.openModal(loginBtn);
            });
        }

        // Open login modal window on page reload after authentication error
        const elLoginModal = document.getElementById('loginModal');
        if (elLoginModal) {
            if (loginModal.querySelector('.sac-oidc-error')) {
                //SacFrontendLogin.openModal();
                const bsModal = new bootstrap.Modal(elLoginModal, {});
                bsModal.show();
            }
        }
    }

    /**
     * @param loginBtn
     * The login button clicked by the user can contain forwarding information
     * in the data-sac-login-target attribute.
     */
    static openModal(loginBtn = null) {
        if (typeof bootstrap === 'object') {
            const elLoginModal = document.getElementById('loginModal');
            const inputHidden = elLoginModal.querySelector('input[name="_target_path"]');

            // Use data-sac-login-target attribute
            // <button data-sac-login-target="same-site">Login</button>
            // to redirect the user to the same site
            // after he has logged in
            if (loginBtn && loginBtn.dataset.sacLoginTarget === 'same-site') {
                if (inputHidden) {
                    if (!inputHidden.hasAttribute('data-orig-target-path')) {
                        inputHidden.setAttribute('data-orig-target-path', inputHidden.value);
                    }

                    inputHidden.value = btoa(window.location.href);
                }
            } else {
                if (inputHidden) {
                    if (inputHidden.dataset.origTargetPath) {
                        inputHidden.value = inputHidden.dataset.origTargetPath;
                    }
                }
            }

            const bsModal = new bootstrap.Modal(elLoginModal, {});
            bsModal.show();
        }
    }
}

document.addEventListener("BootstrapModalReady", (event) => {
    SacFrontendLoginModal.initialize();
});
