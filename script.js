// Function to hide the sidebar when the page loads
  window.onload = function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    sidebar.style.width = '0';
    sidebar.style.left = '-200px';
    content.style.marginLeft = '0';
  };

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const menuBtn = document.querySelector('.menu-btn');

    const sidebarWidth = getComputedStyle(sidebar).width;

    if (sidebarWidth === '200px') {
      sidebar.style.width = '0';
      sidebar.style.left = '-200px';
      content.style.marginLeft = '0';
    } else {
      sidebar.style.width = '200px';
      sidebar.style.left = '0';
      content.style.marginLeft = '200px';
    }

    // Add the following to close the sidebar when a link is clicked
    const links = document.querySelectorAll('#sidebar a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        sidebar.style.width = '0';
        sidebar.style.left = '-200px';
        content.style.marginLeft = '0';
      });
    });
  }