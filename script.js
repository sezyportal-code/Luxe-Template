 // Product Data
    const products = [
      { id: 1, name: "Chronograph Elite", category: "Watches", price: 4850, badge: "New Arrival", rating: 4.9, reviews: 127, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop" },
      { id: 2, name: "Milano Tote", category: "Bags", price: 2290, originalPrice: 2890, badge: "Sale", rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop" },
      { id: 3, name: "Aviator Noir", category: "Eyewear", price: 680, rating: 4.7, reviews: 156, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop" },
      { id: 4, name: "Oud Mystique", category: "Fragrance", price: 320, badge: "Bestseller", rating: 4.9, reviews: 243, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop" },
      { id: 5, name: "Executive Cardholder", category: "Accessories", price: 195, rating: 4.6, reviews: 78, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop" },
      { id: 6, name: "Diamond Cuff", category: "Jewelry", price: 8900, badge: "Limited", rating: 5.0, reviews: 34, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop" }
    ];

    const categories = [
      { name: "Watches", count: 24, icon: "⌚" },
      { name: "Bags & Leather", count: 18, icon: "👜" },
      { name: "Eyewear", count: 12, icon: "🕶️" },
      { name: "Fragrance", count: 15, icon: "🧴" },
      { name: "Accessories", count: 32, icon: "💼" },
      { name: "Jewelry", count: 21, icon: "💎" }
    ];

    const testimonials = [
      { name: "Alexandra M.", title: "Art Collector", text: "LUXE has transformed my appreciation for fine craftsmanship. Every piece I've acquired tells a story of exceptional artistry.", avatar: "A" },
      { name: "James R.", title: "CEO", text: "The attention to detail and personalized service sets LUXE apart. My go-to destination for meaningful gifts and personal indulgences.", avatar: "J" },
      { name: "Sophie L.", title: "Fashion Editor", text: "In an industry saturated with options, LUXE curates with impeccable taste. Their collection is always ahead of trends yet timelessly elegant.", avatar: "S" }
    ];

    // Render Products
    function renderProducts() {
      const grid = document.getElementById('productsGrid');
      grid.innerHTML = products.map(p => `
        <div class="product-card">
          <div class="product-image">
            <img src="${p.image}" alt="${p.name}">
            ${p.badge ? `<span class="product-badge ${p.badge === 'Sale' ? 'sale' : p.badge === 'Limited' ? 'limited' : ''}">${p.badge}</span>` : ''}
          </div>
          <div class="product-info">
            <div class="product-category">${p.category}</div>
            <h3 class="product-name">${p.name}</h3>
            <div class="product-price">
              <span class="current">$${p.price.toLocaleString()}</span>
              ${p.originalPrice ? `<span class="original">$${p.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <div class="product-rating">
              <span class="stars">★★★★★</span>
              <span>${p.rating} (${p.reviews})</span>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Render Categories
    function renderCategories() {
      const grid = document.getElementById('categoriesGrid');
      grid.innerHTML = categories.map(c => `
        <div class="category-card">
          <div class="category-icon">${c.icon}</div>
          <div class="category-name">${c.name}</div>
          <div class="category-count">${c.count} Products</div>
        </div>
      `).join('');
    }

    // Render Testimonials
    function renderTestimonials() {
      const grid = document.getElementById('testimonialsGrid');
      grid.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"${t.text}"</p>
          <div class="testimonial-author">
            <div class="author-avatar">${t.avatar}</div>
            <div>
              <div class="author-name">${t.name}</div>
              <div class="author-title">${t.title}</div>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Cart Modal
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');

    cartBtn.addEventListener('click', () => cartModal.classList.add('active'));
    closeCart.addEventListener('click', () => cartModal.classList.remove('active'));
    cartModal.addEventListener('click', (e) => {
      if (e.target === cartModal) cartModal.classList.remove('active');
    });

    // Newsletter
    function handleSubscribe(e) {
      e.preventDefault();
      alert('Thank you for subscribing to LUXE!');
      e.target.reset();
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        cartModal.classList.remove('active');
      });
    });

    // Initialize
    renderProducts();
    renderCategories();
    renderTestimonials();