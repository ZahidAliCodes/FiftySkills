const countries = [
    { name: "Pakistan", code: "+92", flag: "https://flagcdn.com/w20/pk.png" },
    { name: "Sweden", code: "+46", flag: "https://flagcdn.com/w20/se.png" },
    { name: "United States", code: "+1", flag: "https://flagcdn.com/w20/us.png" },
    { name: "India", code: "+91", flag: "https://flagcdn.com/w20/in.png" },
    { name: "United Kingdom", code: "+44", flag: "https://flagcdn.com/w20/gb.png" },
    { name: "Germany", code: "+49", flag: "https://flagcdn.com/w20/de.png" },
    { name: "Canada", code: "+1", flag: "https://flagcdn.com/w20/ca.png" },
    { name: "Australia", code: "+61", flag: "https://flagcdn.com/w20/au.png" },
    { name: "France", code: "+33", flag: "https://flagcdn.com/w20/fr.png" },
    { name: "Italy", code: "+39", flag: "https://flagcdn.com/w20/it.png" },
    { name: "Spain", code: "+34", flag: "https://flagcdn.com/w20/es.png" },
    { name: "Netherlands", code: "+31", flag: "https://flagcdn.com/w20/nl.png" },
    { name: "Brazil", code: "+55", flag: "https://flagcdn.com/w20/br.png" },
    { name: "Bangladesh", code: "+880", flag: "https://flagcdn.com/w20/bd.png" },
    { name: "UAE", code: "+971", flag: "https://flagcdn.com/w20/ae.png" },
    { name: "China", code: "+86", flag: "https://flagcdn.com/w20/cn.png" },
    { name: "Japan", code: "+81", flag: "https://flagcdn.com/w20/jp.png" },
    { name: "Russia", code: "+7", flag: "https://flagcdn.com/w20/ru.png" },
    { name: "Turkey", code: "+90", flag: "https://flagcdn.com/w20/tr.png" },
    { name: "Nepal", code: "+977", flag: "https://flagcdn.com/w20/np.png" },
    { name: "Malaysia", code: "+60", flag: "https://flagcdn.com/w20/my.png" },
    { name: "Saudi Arabia", code: "+966", flag: "https://flagcdn.com/w20/sa.png" },
    { name: "South Africa", code: "+27", flag: "https://flagcdn.com/w20/za.png" },
    { name: "Indonesia", code: "+62", flag: "https://flagcdn.com/w20/id.png" },
    { name: "Singapore", code: "+65", flag: "https://flagcdn.com/w20/sg.png" },
    { name: "Thailand", code: "+66", flag: "https://flagcdn.com/w20/th.png" },
    { name: "Mexico", code: "+52", flag: "https://flagcdn.com/w20/mx.png" },
    { name: "Poland", code: "+48", flag: "https://flagcdn.com/w20/pl.png" },
    { name: "Norway", code: "+47", flag: "https://flagcdn.com/w20/no.png" },
    { name: "Denmark", code: "+45", flag: "https://flagcdn.com/w20/dk.png" }
  ];

  const dropdown = document.getElementById('country-code-dropdown');
  const list = document.getElementById('country-list');
  const phoneInput = document.getElementById('phone');
  const itemsContainer = document.getElementById('country-items');
  const searchInput = document.getElementById('country-search');

  dropdown.addEventListener('click', () => {
    list.classList.toggle('open');
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target) && !list.contains(e.target)) {
      list.classList.remove('open');
      dropdown.classList.remove('open');
    }
  });

  const renderCountries = (filter = "") => {
    const html = countries
      .filter(c => c.name.toLowerCase().includes(filter.toLowerCase()))
      .map(c => `
        <div class="country-item" onclick="selectCountry('${c.code}', '${c.flag}')">
          <div class="country-flag" style="background-image: url('${c.flag}');"></div>
          ${c.name} (${c.code})
        </div>
      `).join('');
    itemsContainer.innerHTML = html;
  };

  function selectCountry(code, flagUrl) {
    phoneInput.value = code + " ";
    dropdown.innerHTML = `<div class=\"country-flag\" style=\"background-image: url('${flagUrl}');\"></div> <i class=\"fa-solid fa-angle-down\"></i>`;
    list.classList.remove('open');
    dropdown.classList.remove('open');
  }

  searchInput.addEventListener('input', () => {
    renderCountries(searchInput.value);
  });

  // Initial render
  renderCountries();