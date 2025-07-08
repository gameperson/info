/* Style for collapsible headers */
.collapsible-header {
    background-color: var(--color-background-dark);
    color: var(--color-text-primary);
    cursor: pointer;
    padding: var(--padding-base);
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 1.2em;
    transition: background-color 0.3s ease;
    border-radius: var(--border-radius-base);
    margin-bottom: var(--margin-small);
}

.collapsible-header:hover {
    background-color: var(--color-background-darker);
}

/* Add a background color to the button if it is clicked on (add the "active" class) */
.collapsible-header.active {
    background-color: var(--color-link-primary); /* Example active color */
}

/* Style the collapsible content. Note: Hidden by default */
.collapsible-content {
    padding: 0 var(--padding-base);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    background-color: var(--color-background-medium);
    border-radius: var(--border-radius-base);
    margin-bottom: var(--margin-base);
}

/* Dropdown Button */
.dropdown-toggle {
    background-color: var(--color-background-dark);
    color: var(--color-text-primary);
    padding: var(--padding-base);
    font-size: 1.2em;
    border: none;
    cursor: pointer;
    width: 100%;
    text-align: left;
    border-radius: var(--border-radius-base);
    margin-top: var(--margin-small);
    transition: background-color 0.3s ease;
}

.dropdown-toggle:hover {
    background-color: var(--color-background-darker);
}

/* Dropdown Content (Hidden by default) */
.dropdown-content {
    display: none;
    position: relative;
    background-color: var(--color-background-medium);
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    border-radius: var(--border-radius-base);
    padding: var(--padding-base);
    margin-bottom: var(--margin-base);
}

/* Links inside the dropdown */
.dropdown-content ul {
    list-style: none; /* Remove default list style */
    padding: 0;
    margin: 0;
}

.dropdown-content li {
    padding: var(--padding-small) 0;
    text-decoration: none;
    display: block;
}

.dropdown-content li:hover {
    background-color: var(--color-background-light); /* Example hover color for list items */
}
