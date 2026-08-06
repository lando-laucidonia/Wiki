const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

const filterInput = document.querySelector('[data-province-search]');
const stateSelect = document.querySelector('[data-state-filter]');
const provinceCards = [...document.querySelectorAll('[data-province-card]')];
function filterProvinces() {
  if (!provinceCards.length) return;
  const query = (filterInput?.value || '').toLocaleLowerCase('pt-BR');
  const state = stateSelect?.value || '';
  let visible = 0;
  provinceCards.forEach(card => {
    const matchesQuery = card.textContent.toLocaleLowerCase('pt-BR').includes(query);
    const matchesState = !state || card.dataset.state === state;
    const show = matchesQuery && matchesState;
    card.hidden = !show;
    if (show) visible++;
  });
  const count = document.querySelector('[data-province-count]');
  if (count) count.textContent = `${visible} unidade${visible === 1 ? '' : 's'} encontrada${visible === 1 ? '' : 's'}`;
}
filterInput?.addEventListener('input', filterProvinces);
stateSelect?.addEventListener('change', filterProvinces);
filterProvinces();

const searchForm = document.querySelector('[data-search-form]');
if (searchForm) {
  const input = searchForm.querySelector('input');
  const output = document.querySelector('[data-search-results]');
  let index = [];
  fetch(searchForm.dataset.index).then(r => r.json()).then(data => { index = data; runSearch(); });
  function runSearch() {
    const q = input.value.trim().toLocaleLowerCase('pt-BR');
    if (!q) {
      output.innerHTML = '<div class="empty-state">Digite um nome, período, cidade, província, instituição ou tema para consultar o arquivo.</div>';
      return;
    }
    const terms = q.split(/\s+/).filter(Boolean);
    const results = index.filter(item => {
      const haystack = `${item.title} ${item.section} ${item.description} ${item.content}`.toLocaleLowerCase('pt-BR');
      return terms.every(term => haystack.includes(term));
    }).slice(0, 30);
    output.innerHTML = results.length ? results.map(item => `
      <article class="search-result">
        <span class="eyebrow">${escapeHtml(item.section || 'Enciclopédia')}</span>
        <h2><a href="${item.url}">${escapeHtml(item.title)}</a></h2>
        <p>${escapeHtml(item.description || 'Consulte o artigo completo.')}</p>
      </article>`).join('') : '<div class="empty-state">Nenhum resultado foi encontrado para esta pesquisa.</div>';
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  }
  searchForm.addEventListener('submit', e => { e.preventDefault(); runSearch(); });
  input.addEventListener('input', runSearch);
}
