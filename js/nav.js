
let activeTab;
let renderCharts;

function switchTab(tabName){
  activeTab = tabName;
  const headerTab = document.querySelector('#header-tab-name');
  headerTab.innerHTML = tabName;
  const tabs = document.querySelectorAll('.nav-links .tab a');
  tabs.forEach(tab => {
    tab.classList.remove('active');
    tab.classList.add('text-black-50');
  });
  const tab = document.querySelector(`.nav-links .tab-${tabName} a`);
  tab.classList.add('active');
  tab.classList.remove('text-black-50');
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(tab => {
    tab.classList.add('d-none');
  });
  const tabContent = document.getElementById(`tab-content-${tabName}`);
  tabContent.classList.remove('d-none');
  renderCharts();
}

const aLogo = document.getElementById('a-logo');
aLogo.addEventListener('click', (e) => {
  e.preventDefault();
  switchTab('overview');
});

const aOverview = document.getElementById('a-overview');
aOverview.addEventListener('click', (e) => {
  e.preventDefault();
  switchTab('overview');
});

const aViews = document.getElementById('a-views');
aViews.addEventListener('click', (e) => {
  e.preventDefault();
  switchTab('views');
});

const aClicks = document.getElementById('a-clicks');
aClicks.addEventListener('click', (e) => {
  e.preventDefault();
  switchTab('clicks');
});
