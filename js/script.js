  const menuWrapper = document.querySelector('.menu-wrapper');
  const openMenuIcon = document.querySelector('.open-menu');
  const closeMenuIcon = document.querySelector('.close-menu');

  openMenuIcon.addEventListener('click', () => {
    menuWrapper.classList.add('active');
    openMenuIcon.style.display = 'none';
    closeMenuIcon.style.display = 'inline-block';
  });

  closeMenuIcon.addEventListener('click', () => {
    menuWrapper.classList.remove('active');
    openMenuIcon.style.display = 'inline-block';
    closeMenuIcon.style.display = 'none';
  });

  