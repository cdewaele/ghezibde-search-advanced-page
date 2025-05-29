"use strict";

// Check if the current environment is development
// This flag should be explicitly set in the admin panel (Custom JS) of the dev environment only
function isDev() {
    return (
        window.GHEZIBDE_DEBUG === true
    );
}

// Log debug messages only when in development mode
function debug(...args) {
    if (isDev()) {
        console.log("[GHEZIBDE DEBUG]", ...args);
    }
}

(function () {
    // Run the logic once the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function () {

        // Exit if not on the "search-advanced" page
        if (!window.location.href.includes("search-advanced")) return;

        debug("search-advanced page loaded");

        // Select the modifier <select> elements for GIVN and SURN
        const modifiersGivnElement = document.querySelector("select[id='modifiers-INDI:NAME:GIVN']");
        const modifiersSurnElement = document.querySelector("select[id='modifiers-INDI:NAME:SURN']");

        // Select the corresponding input fields for GIVN and SURN
        const inputGivn = document.querySelector("input[id='fields[INDI:NAME:GIVN]']");
        const inputSurn = document.querySelector("input[id='fields[INDI:NAME:SURN]']");

        // Select the search button
        const searchButton = document.querySelector('input[type="submit"].btn.btn-primary');

        // Function to set a select element's value to "CONTAINS"
        const setDefaultToContains = (selectElement) => {
            const containsOption = selectElement?.querySelector('option[value="CONTAINS"]');
            if (containsOption) {
                selectElement.value = "CONTAINS";
                debug(`Set CONTAINS on: ${selectElement.id}`);
            }
        };

        // Apply default modifier to GIVN field if input is empty
        if (inputGivn?.value.trim() === "" && modifiersGivnElement) {
            setDefaultToContains(modifiersGivnElement);
        }

        // Apply default modifier to SURN field if input is empty
        if (inputSurn?.value.trim() === "" && modifiersSurnElement) {
            setDefaultToContains(modifiersSurnElement);
        }

        // Log a debug message when the search button is clicked
        if (searchButton) {
            searchButton.addEventListener("click", () => debug("Search button clicked"));
        }
    });
})();
