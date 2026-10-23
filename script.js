const STORAGE_KEY = 'relay-v2-demo';

const defaultState = {
  listings: [
    {
      id: 1,
      title: 'Canon EOS 1500D',
      price: 300,
      distance: 2.4,
      location: 'Salem',
      category: 'Photography',
      status: 'Available today',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
      owner: 'Rahul',
      availableFrom: 'Sep 28',
      availableUntil: 'Oct 3',
      description: 'A reliable DSLR for product shots, campus events, and portraits.',
      tags: ['college', 'photography', 'event'],
      useCases: ['Photography', 'College projects', 'Basic video'],
      recommended: ['Tripod', 'Camera bag', 'Memory card'],
      unavailableDates: ['2026-09-30'],
      borrowedDates: ['2026-10-01'],
      deposit: 1000,
      pickup: 'Near PSG College, Salem',
      verification: 'Verified',
      trust: '12 successful transactions',
      condition: 'Good',
      gallery: [
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'
      ]
    },
    {
      id: 2,
      title: 'Tripod',
      price: 80,
      distance: 1.8,
      location: 'Coimbatore',
      category: 'Photography',
      status: 'Available today',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80',
      owner: 'Meera',
      availableFrom: 'Sep 30',
      availableUntil: 'Oct 5',
      description: 'Lightweight tripod for travel, portraits, and video work.',
      tags: ['video', 'travel', 'photography'],
      useCases: ['Photography', 'Travel', 'Video'],
      recommended: ['Camera', 'Bluetooth remote', 'Bag'],
      unavailableDates: ['2026-10-02'],
      borrowedDates: ['2026-10-04'],
      deposit: 500,
      pickup: 'Library pickup point, Coimbatore',
      verification: 'Verified',
      trust: '8 successful transactions',
      condition: 'Good',
      gallery: [
        'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80'
      ]
    },
    {
      id: 3,
      title: 'Projector',
      price: 250,
      distance: 3.2,
      location: 'Coimbatore',
      category: 'Electronics',
      status: 'Available this week',
      image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
      owner: 'Amit',
      availableFrom: 'Oct 2',
      availableUntil: 'Oct 6',
      description: 'Bright projector for presentations, screenings, and small events.',
      tags: ['presentation', 'college', 'event'],
      useCases: ['College projects', 'Presentation', 'Screening'],
      recommended: ['HDMI cable', 'Speaker', 'Clicker'],
      unavailableDates: ['2026-10-03', '2026-10-05'],
      borrowedDates: [],
      deposit: 1200,
      pickup: 'Near PSG College, Coimbatore',
      verification: 'Verified',
      trust: '10 successful transactions',
      condition: 'Excellent',
      gallery: [
        'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'
      ]
    },
    {
      id: 4,
      title: 'Scientific Calculator',
      price: 45,
      distance: 1.2,
      location: 'Salem',
      category: 'Study',
      status: 'Available today',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80',
      owner: 'Nisha',
      availableFrom: 'Sep 28',
      availableUntil: 'Oct 10',
      description: 'CAS calculator for practicals and exam prep.',
      tags: ['study', 'engineering', 'exam'],
      useCases: ['Study', 'Calculations', 'Exams'],
      recommended: ['Notebook', 'Reference book'],
      unavailableDates: [],
      borrowedDates: [],
      deposit: 250,
      pickup: 'Campus library, Salem',
      verification: 'Verified',
      trust: '5 successful transactions',
      condition: 'Good',
      gallery: [
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80'
      ]
    },
    {
      id: 5,
      title: 'Bluetooth Speaker',
      price: 120,
      distance: 2.9,
      location: 'Salem',
      category: 'Events',
      status: 'Available today',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
      owner: 'Vivek',
      availableFrom: 'Oct 1',
      availableUntil: 'Oct 8',
      description: 'Portable speaker with crisp sound for small gatherings.',
      tags: ['event', 'party', 'travel'],
      useCases: ['Events', 'Travel', 'Study groups'],
      recommended: ['Microphone', 'Extension cable'],
      unavailableDates: ['2026-10-01'],
      borrowedDates: [],
      deposit: 700,
      pickup: 'Cafe pickup point, Salem',
      verification: 'Verified',
      trust: '6 successful transactions',
      condition: 'Very good',
      gallery: [
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
      ]
    },
    {
      id: 6,
      title: 'Drawing Tablet',
      price: 180,
      distance: 4.1,
      location: 'Coimbatore',
      category: 'Study',
      status: 'Available this week',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
      owner: 'Lia',
      availableFrom: 'Sep 29',
      availableUntil: 'Oct 12',
      description: 'Sketch-friendly tablet ideal for design and illustration work.',
      tags: ['design', 'study', 'creative'],
      useCases: ['Study', 'Design', 'Creative projects'],
      recommended: ['Stylus', 'Laptop stand'],
      unavailableDates: ['2026-10-06'],
      borrowedDates: [],
      deposit: 850,
      pickup: 'Apartment community, Coimbatore',
      verification: 'Verified',
      trust: '9 successful transactions',
      condition: 'Excellent',
      gallery: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80'
      ]
    },
    {
      id: 7,
      title: 'Camping Tent',
      price: 210,
      distance: 5.9,
      location: 'Salem',
      category: 'Travel',
      status: 'Available this week',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=900&q=80',
      owner: 'Arjun',
      availableFrom: 'Oct 3',
      availableUntil: 'Oct 9',
      description: 'Two-person tent with enough room for a weekend getaway.',
      tags: ['travel', 'camping', 'weekend'],
      useCases: ['Travel', 'Weekend trips', 'Camping'],
      recommended: ['Sleeping bag', 'Camp stove'],
      unavailableDates: ['2026-10-04'],
      borrowedDates: [],
      deposit: 950,
      pickup: 'Community parking lot, Salem',
      verification: 'Verified',
      trust: '7 successful transactions',
      condition: 'Good',
      gallery: [
        'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80'
      ]
    },
    {
      id: 8,
      title: 'Extension Board',
      price: 55,
      distance: 1.5,
      location: 'Salem',
      category: 'Tools',
      status: 'Available today',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80',
      owner: 'Rohan',
      availableFrom: 'Sep 27',
      availableUntil: 'Oct 7',
      description: 'Multi-socket extension board for events and temporary setups.',
      tags: ['tools', 'event', 'project'],
      useCases: ['Events', 'Study setups', 'Workbench'],
      recommended: ['Power strip', 'Cable'],
      unavailableDates: [],
      borrowedDates: [],
      deposit: 300,
      pickup: 'College lab block, Salem',
      verification: 'Verified',
      trust: '4 successful transactions',
      condition: 'Good',
      gallery: [
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
      ]
    },
    {
      id: 9,
      title: 'Microphone',
      price: 140,
      distance: 2.5,
      location: 'Coimbatore',
      category: 'Events',
      status: 'Available today',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80',
      owner: 'Sana',
      availableFrom: 'Sep 30',
      availableUntil: 'Oct 6',
      description: 'Wireless microphone set for interviews, podcasts, and events.',
      tags: ['event', 'speaker', 'podcast'],
      useCases: ['Events', 'Interviews', 'Podcast'],
      recommended: ['Speaker', 'Stand'],
      unavailableDates: ['2026-10-02'],
      borrowedDates: [],
      deposit: 800,
      pickup: 'Cafe pickup point, Coimbatore',
      verification: 'Verified',
      trust: '11 successful transactions',
      condition: 'Excellent',
      gallery: [
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80'
      ]
    },
    {
      id: 10,
      title: 'Blazer',
      price: 90,
      distance: 2.1,
      location: 'Salem',
      category: 'Events',
      status: 'Available today',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      owner: 'Naveen',
      availableFrom: 'Oct 1',
      availableUntil: 'Oct 4',
      description: 'Clean classic blazer for interviews and presentations.',
      tags: ['event', 'interview', 'presentation'],
      useCases: ['Interviews', 'Events', 'Presentations'],
      recommended: ['Tie', 'Shoes'],
      unavailableDates: [],
      borrowedDates: [],
      deposit: 350,
      pickup: 'Community hall, Salem',
      verification: 'Verified',
      trust: '3 successful transactions',
      condition: 'Very good',
      gallery: [
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80'
      ]
    },
    {
      id: 11,
      title: 'Tripod Light',
      price: 100,
      distance: 2.7,
      location: 'Coimbatore',
      category: 'Photography',
      status: 'Available this week',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
      owner: 'Diya',
      availableFrom: 'Oct 2',
      availableUntil: 'Oct 8',
      description: 'Compact LED light perfect for video and content creation.',
      tags: ['photography', 'video', 'content'],
      useCases: ['Photography', 'Video', 'Reels'],
      recommended: ['Tripod', 'Phone mount'],
      unavailableDates: ['2026-10-07'],
      borrowedDates: [],
      deposit: 600,
      pickup: 'Near college library, Coimbatore',
      verification: 'Verified',
      trust: '6 successful transactions',
      condition: 'Good',
      gallery: [
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80'
      ]
    }
  ],
  notifications: [
    { id: 'n1', title: 'Your borrowing request was accepted.', message: 'Your projector request for 12 Oct � 14 Oct has been accepted.', read: false },
    { id: 'n2', title: 'Return due tomorrow', message: 'Your tripod is due back tomorrow. Please arrange pickup with the owner.', read: false },
    { id: 'n3', title: 'Someone responded to your need request', message: 'A matching projector was listed in Coimbatore.', read: true }
  ],
  savedItems: [1, 2, 3],
  savedSearches: [
    { id: 'ss1', label: 'Projector near Coimbatore', query: 'projector' },
    { id: 'ss2', label: 'Camera', query: 'camera' },
    { id: 'ss3', label: 'Tripod', query: 'tripod' }
  ],
  needRequests: [
    { id: 'need1', itemName: 'Projector', category: 'Electronics', requiredDate: '2026-10-12', duration: '2 days', location: 'Coimbatore', budget: '?500', note: 'Need it for a college presentation.', status: 'Live' },
    { id: 'need2', itemName: 'Camera', category: 'Photography', requiredDate: '2026-10-15', duration: '3 days', location: 'Salem', budget: '?700', note: 'For a campus event shoot.', status: 'Live' }
  ],
  borrowRequests: [
    { id: 'br1', listingId: 3, title: 'Projector', status: 'Waiting for owner', startDate: '2026-10-12', endDate: '2026-10-14', summary: 'Request pending' },
    { id: 'br2', listingId: 1, title: 'Canon EOS 1500D', status: 'Accepted', startDate: '2026-09-28', endDate: '2026-09-30', summary: 'Approved for pickup' }
  ],
  transactions: [
    { id: 'txn1', listingId: 3, title: 'Projector', owner: 'Amit', borrower: 'You', status: 'BORROWED', pickup: 'Near PSG College, Coimbatore', startDate: '2026-10-12', endDate: '2026-10-14', pricePerDay: 250, deposit: 500, handoverCode: 'RLY-4821', beforeCondition: 'Good', afterCondition: 'Good', chatArchived: false }
  ],
  messages: [
    { transactionId: 'txn1', sender: 'Owner', text: 'You can pick it up after 4 PM.' },
    { transactionId: 'txn1', sender: 'You', text: 'Okay, I will be there by 4:30.' }
  ],
  activeCategory: 'All',
  activeLocation: 'All',
  sortBy: 'recommended',
  currentSearch: '',
  selectedListingId: 1,
  selectedTransactionId: 'txn1'
};

const appState = loadState();

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return structuredClone(defaultState);
  }

  try {
    return { ...structuredClone(defaultState), ...JSON.parse(stored) };
  } catch (error) {
    return structuredClone(defaultState);
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('visible'), 1800);
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
}

function daysBetween(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 1;
}

function getFilteredListings() {
  const term = appState.currentSearch.trim().toLowerCase();
  const items = appState.listings.filter((listing) => {
    const matchesCategory = appState.activeCategory === 'All' || listing.category === appState.activeCategory;
    const matchesLocation = appState.activeLocation === 'All' || listing.location === appState.activeLocation;
    const haystack = `${listing.title} ${listing.description} ${listing.category} ${listing.tags.join(' ')} ${listing.useCases.join(' ')} ${listing.location}`.toLowerCase();
    const matchesSearch = !term || haystack.includes(term);
    return matchesCategory && matchesLocation && matchesSearch;
  });

  if (appState.sortBy === 'price-low') items.sort((first, second) => first.price - second.price);
  if (appState.sortBy === 'distance') items.sort((first, second) => first.distance - second.distance);
  return items;
}

function renderCategories(targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;
  const categories = ['All', ...new Set(appState.listings.map((listing) => listing.category))];
  container.innerHTML = categories
    .map((category) => `<button class="category-item ${appState.activeCategory === category ? 'active' : ''}" data-category="${category}">${category}</button>`)
    .join('');

  container.querySelectorAll('.category-item').forEach((button) => {
    button.addEventListener('click', () => {
      appState.activeCategory = button.dataset.category;
      renderCategories('home-categories');
      renderCategories('explore-categories');
      renderHome();
      renderExplore();
    });
  });
}

function renderSavedSearches() {
  const container = document.getElementById('saved-searches');
  if (!container) return;
  const list = appState.savedSearches;
  container.innerHTML = list.length
    ? list.map((search) => `
        <button class="saved-pill" type="button" data-search="${search.id}">${search.label}</button>
      `).join('')
    : '<div class="empty-state card-surface"><h3>No saved searches</h3><p>Save a search to get alerts for new matches.</p></div>';

  container.querySelectorAll('[data-search]').forEach((button) => {
    button.addEventListener('click', () => {
      const match = appState.savedSearches.find((item) => item.id === button.dataset.search);
      if (match) {
        appState.currentSearch = match.query;
        const exploreInput = document.getElementById('explore-search');
        const homeInput = document.getElementById('home-search');
        if (exploreInput) exploreInput.value = match.query;
        if (homeInput) homeInput.value = match.query;
        renderExplore();
        renderHome();
        showScreen('explore-screen');
      }
    });
  });
}

function renderHome() {
  const homeContainer = document.getElementById('home-listings');
  if (!homeContainer) return;

  const filteredItems = getFilteredListings();
  const items = filteredItems.slice(0, 6);
  const itemCount = document.getElementById('hero-listing-count');
  if (itemCount) itemCount.textContent = appState.listings.length;
  homeContainer.innerHTML = items.length
    ? items.map((listing) => `
        <article class="listing-card" data-id="${listing.id}" tabindex="0" aria-label="Open ${listing.title}">
          <div class="listing-card__visual">
            <img class="listing-card__image" src="${listing.image}" alt="${listing.title}" />
            <span class="listing-card__category">${listing.category}</span>
          </div>
          <div class="listing-card__body">
            <div class="listing-card__title-row"><div class="listing-card__title">${listing.title}</div><span class="listing-card__owner">by ${listing.owner}</span></div>
            <div class="listing-card__meta">
              <strong>${formatCurrency(listing.price)}<span> / day</span></strong>
              <span class="listing-card__distance">${listing.distance} km away</span>
            </div>
            <div class="listing-card__availability">${listing.status}</div>
          </div>
        </article>
      `).join('')
    : '<div class="empty-state card-surface"><h3>Nothing available yet.</h3><p>Try a broader search or post a need.</p></div>';

  homeContainer.querySelectorAll('.listing-card').forEach((card) => {
    card.addEventListener('click', () => openListing(Number(card.dataset.id)));
  });
}

function renderExplore() {
  const results = document.getElementById('explore-results');
  const count = document.getElementById('results-count');
  if (!results || !count) return;

  const items = getFilteredListings();
  count.textContent = `${items.length} item${items.length === 1 ? '' : 's'}`;

  results.innerHTML = items.length ? items.map((listing) => `
    <article class="result-item" data-id="${listing.id}" tabindex="0" aria-label="Open ${listing.title}">
      <img src="${listing.image}" alt="${listing.title}" />
      <div class="result-item__content">
        <h3 class="result-item__title">${listing.title}</h3>
        <div class="result-item__meta">
          <span>${formatCurrency(listing.price)} / day</span>
          <span>${listing.distance} km away</span>
        </div>
      </div>
      <button class="icon-button save-inline" data-save-id="${listing.id}" type="button" aria-label="Save ${listing.title}">${isSaved(listing.id) ? '?' : '?'}</button>
    </article>
  `).join('') : `
    <div class="empty-state card-surface">
      <h3>Nothing here yet.</h3>
      <p>Try a different search or post a need.</p>
      <button class="secondary-button" data-target="need-screen">Post a need</button>
    </div>
  `;

  results.querySelectorAll('.result-item').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('.save-inline')) return;
      openListing(Number(card.dataset.id));
    });
  });

  results.querySelectorAll('[data-save-id]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const id = Number(button.dataset.saveId);
      toggleSavedItem(id);
      renderExplore();
      renderSavedScreen();
      renderHome();
      renderProfile();
    });
  });

  const needButton = results.querySelector('[data-target="need-screen"]');
  if (needButton) needButton.addEventListener('click', () => showScreen('need-screen'));
}

function renderSavedScreen() {
  const container = document.getElementById('saved-items-list');
  if (!container) return;

  const items = appState.savedItems
    .map((id) => appState.listings.find((listing) => listing.id === id))
    .filter(Boolean);

  container.innerHTML = items.length ? items.map((listing) => `
    <article class="result-item" data-id="${listing.id}">
      <img src="${listing.image}" alt="${listing.title}" />
      <div class="result-item__content">
        <h3 class="result-item__title">${listing.title}</h3>
        <div class="result-item__meta">
          <span>${formatCurrency(listing.price)} / day</span>
          <span>${listing.location}</span>
        </div>
      </div>
      <button class="link-button remove-saved" data-remove-id="${listing.id}" type="button">Remove</button>
    </article>
  `).join('') : '<div class="empty-state card-surface"><h3>Nothing saved yet.</h3><p>Save items you may want to borrow later.</p></div>';

  container.querySelectorAll('[data-id]').forEach((item) => {
    item.addEventListener('click', (event) => {
      if (event.target.closest('.remove-saved')) return;
      openListing(Number(item.dataset.id));
    });
  });

  container.querySelectorAll('.remove-saved').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleSavedItem(Number(button.dataset.removeId));
      renderSavedScreen();
      renderExplore();
      renderHome();
      renderProfile();
    });
  });
}

function renderNotifications() {
  const container = document.getElementById('notifications-list');
  if (!container) return;

  const badge = document.getElementById('notification-badge');
  const unreadCount = appState.notifications.filter((item) => !item.read).length;
  if (badge) {
    badge.textContent = unreadCount;
    badge.hidden = unreadCount < 1;
  }

  container.innerHTML = appState.notifications.length
    ? appState.notifications.map((notification) => `
        <button class="notification-item ${notification.read ? 'read' : 'unread'}" type="button" data-notification-id="${notification.id}">
          <div class="notification-item__dot"></div>
          <div>
            <p class="notification-item__title">${notification.title}</p>
            <p>${notification.message}</p>
          </div>
        </button>
      `).join('')
    : '<div class="empty-state card-surface"><h3>No notifications yet.</h3><p>We will alert you when new items or requests show up.</p></div>';

  container.querySelectorAll('[data-notification-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const notification = appState.notifications.find((item) => item.id === button.dataset.notificationId);
      if (notification) {
        notification.read = true;
        persistState();
        renderNotifications();
      }
    });
  });
}

function renderActivity() {
  const all = document.getElementById('activity-all');
  const borrowing = document.getElementById('activity-borrowing');
  const requests = document.getElementById('activity-requests');
  const needs = document.getElementById('activity-needs');

  const renderCards = (items, type) => items.length ? items.map((item) => {
    if (type === 'need') {
      return `
        <article class="activity-item">
          <div>
            <h3>${item.itemName}</h3>
            <p>${item.location} � ${item.requiredDate}</p>
          </div>
          <span class="status-pill pending">${item.status}</span>
        </article>
      `;
    }
    if (type === 'request') {
      return `
        <article class="activity-item" data-request-id="${item.id}">
          <div>
            <h3>${item.title}</h3>
            <p>${item.startDate} � ${item.endDate}</p>
          </div>
          <span class="status-pill neutral">${item.status}</span>
        </article>
      `;
    }
    return `
      <article class="activity-item" data-transaction-id="${item.id}">
        <div>
          <h3>${item.title}</h3>
          <p>${item.startDate} � ${item.endDate}</p>
        </div>
        <span class="status-pill available">${item.status}</span>
      </article>
    `;
  }).join('') : '<div class="empty-state card-surface"><h3>No activity yet.</h3><p>Borrowing and request updates will appear here.</p></div>';

  if (all) {
    all.innerHTML = renderCards([
      ...appState.transactions.map((transaction) => ({ ...transaction, kind: 'transaction' })),
      ...appState.borrowRequests.map((request) => ({ ...request, kind: 'request' })),
      ...appState.needRequests.map((need) => ({ ...need, kind: 'need' }))
    ], 'all');
  }

  if (borrowing) borrowing.innerHTML = renderCards(appState.transactions, 'transaction');
  if (requests) requests.innerHTML = renderCards(appState.borrowRequests, 'request');
  if (needs) needs.innerHTML = renderCards(appState.needRequests, 'need');

  document.querySelectorAll('[data-transaction-id]').forEach((card) => {
    card.addEventListener('click', () => {
      openTransaction(card.dataset.transactionId);
    });
  });
}

function renderProfile() {
  const list = document.querySelector('#profile-screen .simple-list');
  if (!list) return;
  const savedCount = appState.savedItems.length;
  list.innerHTML = `
    <button class="list-row" type="button" data-target="saved-screen"><span>Saved items</span><span>${savedCount}</span></button>
    <button class="list-row" type="button" data-target="notifications-screen"><span>Notifications</span><span>?</span></button>
    <button class="list-row" type="button" data-target="activity-screen"><span>Borrowing history</span><span>?</span></button>
    <button class="list-row" type="button" data-target="need-screen"><span>Need requests</span><span>?</span></button>
    <button class="list-row" type="button" data-target="list-screen"><span>List something</span><span>?</span></button>
    <button class="list-row" type="button" data-target="home-screen"><span>Settings</span><span>?</span></button>
  `;
}

function renderTransaction() {
  const container = document.getElementById('transaction-details');
  if (!container) return;
  const transaction = appState.transactions.find((item) => item.id === appState.selectedTransactionId) || appState.transactions[0];
  if (!transaction) return;

  const messages = appState.messages.filter((message) => message.transactionId === transaction.id);
  const extensionReady = transaction.status === 'BORROWED';

  container.innerHTML = `
    <div class="transaction-summary">
      <h2>${transaction.title}</h2>
      <p>Transaction #${transaction.id.toUpperCase().replace('TXN', 'RLY-')}</p>
      <span class="status-pill available">${transaction.status}</span>
    </div>

    <div class="detail-card">
      <div class="muted-row"><span>Borrower</span><strong>You</strong></div>
      <div class="muted-row"><span>Owner</span><strong>${transaction.owner}</strong></div>
      <div class="muted-row"><span>Pickup</span><strong>${transaction.pickup}</strong></div>
      <div class="muted-row"><span>Return</span><strong>${transaction.endDate}</strong></div>
    </div>

    <div class="detail-card">
      <div class="muted-row"><span>Cost</span><strong>${formatCurrency(transaction.pricePerDay * daysBetween(transaction.startDate, transaction.endDate))}</strong></div>
      <div class="muted-row"><span>Deposit</span><strong>${formatCurrency(transaction.deposit)}</strong></div>
      <div class="muted-row"><span>Handover code</span><strong>${transaction.handoverCode}</strong></div>
    </div>

    <div class="detail-card">
      <h3>Condition</h3>
      <div class="condition-box">
        <p>Before borrowing</p>
        <strong>${transaction.beforeCondition}</strong>
      </div>
      <div class="condition-box">
        <p>After return</p>
        <strong>${transaction.afterCondition}</strong>
      </div>
    </div>

    <div class="detail-card">
      <h3>Chat</h3>
      <div class="chat-thread">
        ${messages.map((message) => `
          <div class="chat-message ${message.sender === 'You' ? 'mine' : ''}">
            <strong>${message.sender}</strong>
            <p>${message.text}</p>
          </div>
        `).join('')}
      </div>
      <div class="chat-compose">
        <input type="text" id="chat-input" placeholder="Type a message..." />
        <button class="primary-action compact" type="button" id="send-message">Send</button>
      </div>
    </div>

    <div class="stack-button-row">
      <button class="primary-action full" type="button" id="request-extension">Request extension</button>
      <button class="secondary-button full" type="button" data-target="return-screen">Start return</button>
    </div>
  `;

  const sendMessageButton = document.getElementById('send-message');
  if (sendMessageButton) {
    sendMessageButton.addEventListener('click', () => {
      const input = document.getElementById('chat-input');
      const value = input.value.trim();
      if (!value) return;
      appState.messages.push({ transactionId: transaction.id, sender: 'You', text: value });
      persistState();
      renderTransaction();
      showToast('Message sent');
    });
  }

  const extensionButton = document.getElementById('request-extension');
  if (extensionButton && extensionReady) {
    extensionButton.addEventListener('click', () => {
      const newDate = window.prompt('New return date (YYYY-MM-DD)', '2026-10-16');
      if (!newDate) return;
      const duration = daysBetween(transaction.endDate, newDate);
      const extraCost = duration * transaction.pricePerDay;
      appState.notifications.unshift({ id: `n${Date.now()}`, title: 'Extension requested', message: `Owner asked to extend to ${newDate}. Additional cost ${formatCurrency(extraCost)}.`, read: false });
      showToast('Extension request sent');
      persistState();
      renderNotifications();
    });
  }
}

function renderDetailScreen() {
  const listing = appState.listings.find((item) => item.id === appState.selectedListingId) || appState.listings[0];
  if (!listing) return;

  const detailContent = document.getElementById('detail-content');
  const gallery = document.getElementById('detail-gallery');
  const requestButton = document.getElementById('detail-request-button');
  const saveButton = document.getElementById('detail-save-button');

  gallery.innerHTML = listing.gallery.map((src, index) => `<img src="${src}" alt="${listing.title} ${index + 1}" />`).join('');

  saveButton.textContent = isSaved(listing.id) ? '?' : '?';

  detailContent.innerHTML = `
    <div class="detail-heading-row">
      <h1>${listing.title}</h1>
      <span class="status-pill available">${listing.status}</span>
    </div>
    <div class="price-row">
      <strong>${formatCurrency(listing.price)} / day</strong>
      <span>${listing.distance} km away</span>
    </div>

    <div class="info-card">
      <h3>About</h3>
      <p>${listing.description}</p>
    </div>

    <div class="info-card">
      <h3>Availability</h3>
      <div class="calendar-block">
        <div class="calendar-legend">
          <span><i class="legend-dot available"></i>Available</span>
          <span><i class="legend-dot unavailable"></i>Unavailable</span>
          <span><i class="legend-dot borrowed"></i>Borrowed</span>
        </div>
        <div class="calendar-grid">${buildCalendarMarkup(listing)}</div>
      </div>
    </div>

    <div class="info-card">
      <h3>Good for</h3>
      <div class="tag-row">${listing.useCases.map((item) => `<span class="tag">${item}</span>`).join('')}</div>
    </div>

    <div class="info-card">
      <h3>Condition</h3>
      <p>${listing.condition}</p>
    </div>

    <div class="owner-card">
      <div class="owner-avatar">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" alt="${listing.owner}" />
      </div>
      <div>
        <div class="owner-name-row">
          <strong>${listing.owner}</strong>
          <span class="verified-badge">Verified</span>
        </div>
        <p>${listing.trust}</p>
      </div>
    </div>

    <div class="info-card">
      <h3>Pickup</h3>
      <p>${listing.pickup}</p>
    </div>

    <div class="info-card">
      <h3>You may also need</h3>
      <div class="tag-row">${listing.recommended.map((item) => `<span class="tag">${item}</span>`).join('')}</div>
    </div>

    <div class="info-card">
      <h3>Notify me when available</h3>
      <button class="secondary-button full" id="notify-available" type="button">Notify me when available</button>
    </div>
  `;

  const notifyButton = document.getElementById('notify-available');
  if (notifyButton) {
    notifyButton.addEventListener('click', () => {
      appState.notifications.unshift({ id: `n${Date.now()}`, title: 'Availability alert saved', message: `You'll be notified when ${listing.title} becomes available.`, read: false });
      persistState();
      renderNotifications();
      showToast('Alert created');
    });
  }

  saveButton.onclick = () => {
    toggleSavedItem(listing.id);
    renderDetailScreen();
    renderExplore();
    renderSavedScreen();
    renderProfile();
  };

  requestButton.textContent = listing.status.toLowerCase().includes('available') ? 'Request to borrow' : 'Notify me when available';
  requestButton.onclick = () => {
    if (listing.status.toLowerCase().includes('available')) {
      prepareBorrowRequest(listing);
      showScreen('borrow-screen');
      return;
    }
    appState.notifications.unshift({ id: `n${Date.now()}`, title: 'Availability alert saved', message: `You'll be notified when ${listing.title} becomes available.`, read: false });
    persistState();
    renderNotifications();
    showToast('Alert created');
  };

  document.getElementById('detail-action-price').textContent = `${formatCurrency(listing.price)}/day`;
}

function buildCalendarMarkup(listing) {
  const days = [];
  for (let day = 1; day <= 30; day += 1) {
    const iso = `2026-09-${String(day).padStart(2, '0')}`;
    const isUnavailable = listing.unavailableDates.includes(iso);
    const isBorrowed = listing.borrowedDates.includes(iso);
    const className = isBorrowed ? 'day borrowed' : isUnavailable ? 'day unavailable' : 'day available';
    days.push(`<span class="${className}" title="${iso}">${day}</span>`);
  }

  return days.join('');
}

function prepareBorrowRequest(listing) {
  appState.selectedListingId = listing.id;
  const start = '2026-09-28';
  const end = '2026-09-30';
  const form = document.getElementById('borrow-form');
  if (!form) return;

  form.elements.startDate.value = start;
  form.elements.returnDate.value = end;
  document.getElementById('borrow-image').src = listing.image;
  document.getElementById('borrow-title').textContent = listing.title;
  document.getElementById('borrow-meta').textContent = `${formatCurrency(listing.price)} / day � ${listing.location}`;
  document.getElementById('borrow-duration').textContent = `${daysBetween(start, end)} days`;
  document.getElementById('borrow-total').textContent = formatCurrency(listing.price * daysBetween(start, end));
  document.getElementById('borrow-deposit').textContent = formatCurrency(listing.deposit);
}

function isSaved(listingId) {
  return appState.savedItems.includes(listingId);
}

function toggleSavedItem(listingId) {
  if (isSaved(listingId)) {
    appState.savedItems = appState.savedItems.filter((id) => id !== listingId);
    showToast('Removed from saved items');
  } else {
    appState.savedItems = [...new Set([...appState.savedItems, listingId])];
    showToast('Saved');
  }
  persistState();
}

function handleBorrowRequest(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const start = form.elements.startDate.value;
  const end = form.elements.returnDate.value;
  const listing = appState.listings.find((item) => item.id === appState.selectedListingId) || appState.listings[0];

  if (!start || !end || new Date(start) >= new Date(end)) {
    showToast('Please choose a valid date range.');
    return;
  }

  if (!isDateRangeAvailable(listing, start, end)) {
    showToast('Those dates are no longer available.');
    return;
  }

  const total = listing.price * daysBetween(start, end);
  const borrowRequest = {
    id: `br${Date.now()}`,
    listingId: listing.id,
    title: listing.title,
    status: 'Waiting for owner',
    startDate: start,
    endDate: end,
    summary: 'Request pending'
  };

  appState.borrowRequests.unshift(borrowRequest);
  appState.notifications.unshift({
    id: `n${Date.now()}`,
    title: 'Request sent',
    message: `${listing.title} request sent for ${start} to ${end}. Estimated total ${formatCurrency(total)}.`,
    read: false
  });
  persistState();
  renderActivity();
  renderNotifications();
  form.classList.add('hidden');
  document.getElementById('borrow-success').classList.remove('hidden');
  showToast('Request sent');
}

function isDateRangeAvailable(listing, startDate, endDate) {
  const range = [];
  const current = new Date(startDate);
  const end = new Date(endDate);
  while (current <= end) {
    range.push(current.toISOString().slice(0, 10));
    current.setDate(current.getDate() + 1);
  }
  return range.every((date) => !listing.unavailableDates.includes(date) && !listing.borrowedDates.includes(date));
}

function handleNeedRequest(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const payload = {
    id: `need${Date.now()}`,
    itemName: form.elements.itemName.value || 'Item',
    category: form.elements.category.value || 'General',
    requiredDate: form.elements.requiredDate.value || '2026-10-12',
    duration: form.elements.duration.value || '2 days',
    location: form.elements.location.value || 'Coimbatore',
    budget: form.elements.budget.value || '?500',
    note: form.elements.note.value || '',
    status: 'Live'
  };

  appState.needRequests.unshift(payload);
  appState.notifications.unshift({
    id: `n${Date.now()}`,
    title: 'Your need is live',
    message: `${payload.itemName} is now live in ${payload.location}.`,
    read: false
  });
  persistState();
  renderActivity();
  renderNotifications();
  form.classList.add('hidden');
  document.getElementById('need-success').classList.remove('hidden');
  showToast('Need request saved');
}

function handleListRequest(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const listingName = form.querySelector('input').value || 'New listing';
  const statusBadge = document.querySelector('#list-success h2');
  if (statusBadge) {
    statusBadge.textContent = `${listingName} is live`;
  }
  form.classList.add('hidden');
  document.getElementById('list-success').classList.remove('hidden');
  showToast('Your listing is live');
}

function handleSearchInput() {
  const homeSearch = document.getElementById('home-search');
  const exploreSearch = document.getElementById('explore-search');

  if (homeSearch) {
    homeSearch.addEventListener('input', (event) => {
      appState.currentSearch = event.target.value;
      if (exploreSearch) exploreSearch.value = event.target.value;
      renderHome();
      renderExplore();
    });
  }

  if (exploreSearch) {
    exploreSearch.addEventListener('input', (event) => {
      appState.currentSearch = event.target.value;
      if (homeSearch) homeSearch.value = event.target.value;
      renderHome();
      renderExplore();
    });
  }

  const saveSearchButton = document.getElementById('save-search-button');
  if (saveSearchButton) {
    saveSearchButton.addEventListener('click', () => {
      const query = appState.currentSearch.trim();
      if (!query) {
        showToast('Enter a search first');
        return;
      }
      const label = query.length > 28 ? `${query.slice(0, 28)}�` : query;
      const existing = appState.savedSearches.find((item) => item.query.toLowerCase() === query.toLowerCase());
      if (!existing) {
        appState.savedSearches.unshift({ id: `ss${Date.now()}`, label, query });
        persistState();
        renderSavedSearches();
        showToast('Search saved');
      } else {
        showToast('Search already saved');
      }
    });
  }
}

function bindMarketplaceControls() {
  const controls = [
    ['home-location-filter', 'location'],
    ['explore-location-filter', 'location'],
    ['home-sort-filter', 'sort'],
    ['explore-sort-filter', 'sort']
  ];

  controls.forEach(([id, type]) => {
    const control = document.getElementById(id);
    if (!control) return;
    control.value = type === 'location' ? appState.activeLocation : appState.sortBy;
    control.addEventListener('change', () => {
      if (type === 'location') appState.activeLocation = control.value;
      else appState.sortBy = control.value;
      controls.forEach(([otherId, otherType]) => {
        const otherControl = document.getElementById(otherId);
        if (otherControl && otherType === type) otherControl.value = control.value;
      });
      renderHome();
      renderExplore();
    });
  });
}

function openListing(listingId) {
  appState.selectedListingId = listingId;
  renderDetailScreen();
  showScreen('detail-screen');
}

function openTransaction(transactionId) {
  appState.selectedTransactionId = transactionId;
  renderTransaction();
  showScreen('transaction-screen');
}

function bindButtons() {
  document.querySelectorAll('[data-target]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;
      if (!target) return;
      if (target === 'detail-screen') {
        openListing(appState.selectedListingId);
        return;
      }
      if (target === 'transaction-screen') {
        const transaction = appState.transactions[0];
        if (transaction) openTransaction(transaction.id);
        return;
      }
      showScreen(target);
    });
  });

  document.querySelectorAll('[data-back="true"]').forEach((button) => {
    button.addEventListener('click', () => {
      showScreen('home-screen');
    });
  });

  document.querySelectorAll('.tab-button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-button').forEach((item) => item.classList.toggle('active', item === button));
      document.querySelectorAll('.activity-panel').forEach((panel) => {
        panel.classList.toggle('active', panel.dataset.tabPanel === button.dataset.tab);
      });
    });
  });
}

function bindForms() {
  const borrowForm = document.getElementById('borrow-form');
  const needForm = document.getElementById('need-form');
  const listForm = document.getElementById('list-form');
  const loginForm = document.getElementById('login-form');
  const returnSubmit = document.getElementById('return-submit');

  if (borrowForm) borrowForm.addEventListener('submit', handleBorrowRequest);
  if (needForm) needForm.addEventListener('submit', handleNeedRequest);
  if (listForm) listForm.addEventListener('submit', handleListRequest);
  if (loginForm) loginForm.addEventListener('submit', (event) => { event.preventDefault(); showScreen('profile-screen'); showToast('Logged in'); });
  if (returnSubmit) returnSubmit.addEventListener('click', () => { document.getElementById('return-success').classList.remove('hidden'); returnSubmit.classList.add('hidden'); showToast('Return recorded'); });

  document.querySelectorAll('.stars span').forEach((star) => {
    star.addEventListener('click', () => {
      const stars = [...document.querySelectorAll('.stars span')];
      const index = stars.indexOf(star);
      stars.forEach((item, idx) => item.classList.toggle('active', idx <= index));
    });
  });
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.toggle('active', screen.id === screenId);
  });

  document.querySelectorAll('.nav-link, .bottom-nav__item').forEach((button) => {
    const active = button.dataset.target === screenId;
    button.classList.toggle('active', active);
  });
}

function init() {
  renderCategories('home-categories');
  renderCategories('explore-categories');
  renderHome();
  renderExplore();
  renderSavedSearches();
  renderNotifications();
  renderActivity();
  renderProfile();
  renderSavedScreen();
  renderTransaction();
  bindButtons();
  bindForms();
  handleSearchInput();
  bindMarketplaceControls();
  showScreen('home-screen');
}

init();
