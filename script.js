function showContent(tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content-item');
    tabContents.forEach(content => {
        content.classList.remove('show');
    });

    // Deactivate all navigation items
    const navItems = document.querySelectorAll('.navbar a');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('show');

    // Activate the selected navigation item
    const selectedNavItem = document.querySelector(`.navbar a[href="#${tabId}"]`);
    selectedNavItem.classList.add('active');
}
