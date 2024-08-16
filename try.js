
// Navbar header: background transparent
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar1');
    if (window.scrollY > 300) { 
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

// btn Sidebar
  function showSidebar() {
    const sidebar = document.querySelector('.Sidebar');
    sidebar.classList.add('visible');
  }
  
  function hideSidebar() {
    const sidebar = document.querySelector('.Sidebar');
    sidebar.classList.remove('visible');
  }
  