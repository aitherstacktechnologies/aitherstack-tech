import React, { useState, useEffect } from 'react';
import { ShoppingBag, CreditCard, Sparkles, CheckCircle2, X, ArrowRight, Minus, Plus, ChevronDown, Zap, Menu, SlidersHorizontal } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Chronos Elite X1',
    category: 'Chronographs',
    description: 'Swiss automatic movement, sapphire crystal, 100m water resistance',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    stock: 'In Stock',
    delivery: 'Priority Delivery',
    tag: 'Limited Edition',
  },
  {
    id: 2,
    name: 'Sonic Pearl Pro',
    category: 'Audio Gear',
    description: 'Active noise cancelling, 40hr battery, spatial audio',
    price: 449,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    stock: 'In Stock',
    delivery: 'Priority Delivery',
    tag: 'New Arrival',
  },
  {
    id: 3,
    name: 'Vision Arc 4K',
    category: 'Eyewear',
    description: 'Smart AR glasses, spatial audio, 8hr continuous use',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1574253126836-5e4a5c9e0572?auto=format&fit=crop&w=800&q=80',
    stock: 'In Stock',
    delivery: 'Priority Delivery',
    tag: 'Best Seller',
  },
  {
    id: 4,
    name: 'Horizon Duo',
    category: 'Audio Gear',
    description: 'True wireless, spatial audio, adaptive sound',
    price: 299,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    stock: 'Pre-Order',
    delivery: 'Priority Delivery',
    tag: 'Exclusive',
  },
];

const currencies = [
  { code: 'USD', symbol: '$', multiplier: 1 },
  { code: 'EUR', symbol: '€', multiplier: 0.92 },
  { code: 'GBP', symbol: '£', multiplier: 0.79 },
];

const categories = ['All', 'Chronographs', 'Audio Gear', 'Eyewear'];

export default function NexusEcomRealEngine() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currency, setCurrency] = useState(currencies[0]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('idle');
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', card: '' });

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product.price * item.quantity);
  }, 0);

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const convertPrice = (price) => {
    const converted = price * currency.multiplier;
    return `${currency.symbol}${converted.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  const addToCart = (productId) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.card) return;
    
    setCheckoutStep('processing');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setCheckoutStep('success');
  };

  const resetCheckout = () => {
    setCheckoutStep('idle');
    setCart([]);
    setFormData({ name: '', email: '', card: '' });
    setIsCartOpen(false);
  };

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="mobile-motion-lite absolute top-[-30%] left-[-20%] w-[70%] h-[70%] bg-amber-500/5 rounded-full blur-[180px]" />
        <div className="mobile-motion-lite absolute bottom-[-30%] right-[-20%] w-[80%] h-[80%] bg-amber-600/5 rounded-full blur-[200px]" />
        <div className="mobile-motion-lite absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-amber-400/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#050505]/80 border-b border-amber-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-amber-500/20 blur-lg rounded-full" />
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold tracking-widest text-lg text-white">NEXUS LUX</h1>
                    <p className="text-[9px] font-mono text-amber-400/60 tracking-[0.3em]">// 02</p>
                  </div>
                </div>

                <nav className="hidden lg:flex items-center gap-8 ml-12">
                  {['Collection', 'Engineering'].map(link => (
                    <a key={link} href="#" className="text-sm font-medium text-white/60 hover:text-amber-400 transition-colors tracking-wide">
                      {link}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <button
                    onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                    className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-amber-500/20 hover:border-amber-500/40 transition-all text-sm font-mono text-white/80"
                  >
                    <span>{currency.symbol} {currency.code}</span>
                    <ChevronDown className="w-4 h-4 text-amber-400/60" />
                  </button>

                  {isCurrencyDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-amber-500/20 bg-[#0a0a0a] shadow-2xl shadow-black/50">
                      {currencies.map(curr => (
                        <button
                          key={curr.code}
                          onClick={() => {
                            setCurrency(curr);
                            setIsCurrencyDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-sm font-mono hover:bg-amber-500/10 transition-colors ${
                            currency.code === curr.code ? 'text-amber-400 bg-amber-500/5' : 'text-white/70'
                          }`}
                        >
                          {curr.symbol} {curr.code}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-amber-500/20 text-white/60 hover:text-amber-400 transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30 hover:border-amber-500/60 transition-all"
                >
                  <ShoppingBag className="w-5 h-5 text-amber-400" />
                  <span className="hidden sm:block text-sm font-medium text-white">Cart</span>
                  {totalItems > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-amber-400 text-black text-xs font-bold flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {isMobileMenuOpen && (
              <div className="lg:hidden py-4 border-t border-amber-500/20">
                <nav className="flex flex-col gap-2">
                  {['Collection', 'Engineering', 'About', 'Contact'].map(link => (
                    <a key={link} href="#" className="px-4 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-amber-400 hover:bg-white/5 transition-colors">
                      {link}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </header>

        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">New Collection 2025</span>
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="text-white">Engineered for </span>
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">Excellence</span>
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Discover our curated collection of premium timepieces, audio gear, and smart eyewear. Each piece meticulously crafted for those who demand perfection.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 overflow-x-auto pb-4">
              <SlidersHorizontal className="w-4 h-4 text-amber-400/60" />
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/25'
                      : 'bg-white/5 border border-amber-500/20 text-white/60 hover:text-amber-400 hover:border-amber-500/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E12] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-amber-500 text-black font-bold">
                      {product.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-white/50 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {product.stock} • {product.delivery}
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400/80 uppercase tracking-widest">
                      {product.category}
                    </span>
                    <h3 className="font-bold tracking-tight text-lg text-white mt-1 group-hover:text-amber-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-white/40 line-clamp-2 mt-1">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-amber-400">
                      {convertPrice(product.price)}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(product.id)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm hover:shadow-lg hover:shadow-amber-500/30 active:scale-[0.98] transition-all"
                  >
                    + Quick Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="border-t border-amber-500/20 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="font-mono text-sm text-white/40">NEXUS LUX // 02</span>
            </div>
            <p className="text-sm text-white/30">© 2025 Nexus Lux. Engineered for Excellence.</p>
          </div>
        </footer>
      </div>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 transform-gpu will-change-transform">
          <div
            className="absolute inset-0 bg-black/90"
            onClick={() => checkoutStep === 'idle' && setIsCartOpen(false)}
          />

          <div className={`absolute right-0 top-0 bottom-0 w-full max-w-md border-l border-amber-500/20 bg-[#080808] shadow-2xl transition-transform duration-500 ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-amber-500/20">
                <h2 className="font-bold tracking-tight text-xl text-white">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-16">
                    <ShoppingBag className="w-16 h-16 mx-auto text-white/10 mb-4" />
                    <p className="text-white/40">Your cart is empty</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium hover:bg-amber-500/20 transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  cart.map(item => {
                    const product = products.find(p => p.id === item.id);
                    return (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-white text-sm">{product.name}</h4>
                          <p className="font-mono text-amber-400 text-sm mt-1">
                            {convertPrice(product.price)}
                          </p>

                          <div className="flex items-center gap-3 mt-3">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-mono text-sm w-8 text-center text-white">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-amber-500/20 space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-white/60">
                      <span>Subtotal</span>
                      <span className="font-mono">{convertPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>Tax (8%)</span>
                      <span className="font-mono">{convertPrice(tax)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t border-white/10">
                      <span className="text-white">Total</span>
                      <span className="font-mono text-amber-400">{convertPrice(total)}</span>
                    </div>
                  </div>

                  {checkoutStep === 'idle' && (
                    <form onSubmit={handleCheckout} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 transition-colors text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 transition-colors text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Card Number"
                        value={formData.card}
                        onChange={e => setFormData({...formData, card: e.target.value})}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 transition-colors text-sm font-mono"
                      />
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                      >
                        <CreditCard className="w-5 h-5" />
                        Complete Checkout
                        <Zap className="w-4 h-4" />
                      </button>
                    </form>
                  )}

                  {checkoutStep === 'processing' && (
                    <button
                      disabled
                      className="w-full py-4 rounded-xl bg-white/10 text-white font-bold flex items-center justify-center gap-2"
                    >
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing Payment...
                    </button>
                  )}

                  {checkoutStep === 'success' && (
                    <div className="space-y-4 text-center py-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Order Confirmed!</h3>
                      <p className="text-sm text-white/50">Thank you, {formData.name}. Check {formData.email} for details.</p>
                      <button
                        onClick={resetCheckout}
                        className="w-full py-4 rounded-xl bg-green-500 text-black font-bold flex items-center justify-center gap-2"
                      >
                        Continue Shopping
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
