document.addEventListener('DOMContentLoaded', () => {
    if (typeof bsModalIsReadyInterval === 'undefined') {
        bsModalIsReadyInterval = setInterval(() => {
            if (() => {
                return !(typeof bootstrap.Modal === 'undefined' || !bootstrap.Modal);
            }) {
                document.dispatchEvent(new CustomEvent('BootstrapModalReady'));
                clearInterval(bsModalIsReadyInterval);
            }
        }, 100);
    }
});
