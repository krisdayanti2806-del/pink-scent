/* ===== PINK SCENT — script.js ===== */

// ===== NAVIGASI HALAMAN =====
function gotoPage(id) {
  ['home', 'produk', 'tentang', 'kontak'].forEach(p => {
    document.getElementById('page-' + p).classList.remove('aktif');
    document.getElementById('nav-' + p).classList.remove('aktif-nav');
  });
  document.getElementById('page-' + id).classList.add('aktif');
  document.getElementById('nav-' + id).classList.add('aktif-nav');
  window.scrollTo(0, 0);
  const nav = document.getElementById('navMenu');
  if (nav.classList.contains('show')) nav.classList.remove('show');
  if (id === 'produk') { renderKategori(); displayProducts(); }
}

// ===== DATA PRODUK =====
const kategori = [
  {
    id: "floral", label: "Floral", icon: "🌸",
    produk: [
      { name: "Sweet Blossom", desc: "Perpaduan bunga sakura & peony yang lembut dan feminin, cocok untuk penggunaan sehari-hari.", price: 100000, stok: "Tersedia", img: "sweet blossom.jpg", rating: 4.8, ulasan: 230,  terjual: 1200, notes: ["Sakura", "Peony", "White Musk"] },
      { name: "Rose Blush",    desc: "Aroma mawar merah muda yang romantis dan feminin dengan sentuhan powdery yang elegan.",        price: 65000,  stok: "Tersedia", img: "rose blush.jpg",    rating: 4.9, ulasan: 418,  terjual: 2300, notes: ["Rose", "Violet", "Musk"] },
      { name: "Jasmine Dream", desc: "Melati putih yang hangat dan membuai, memberikan kesan segar sekaligus sensual.",              price: 60000,  stok: "Tersedia", img: "jasmine dream.jpg", rating: 4.7, ulasan: 175,  terjual: 980,  notes: ["Jasmine", "Ylang", "Sandalwood"] },
      { name: "Lily Garden",   desc: "Bunga lily yang elegan berpadu musk putih yang bersih, ringan namun berkesan.",                price: 70000,  stok: "Tersedia", img: "cherry bloom.jpg",  rating: 4.8, ulasan: 142,  terjual: 760,  notes: ["Lily", "Green", "White Musk"] },
    ]
  },
  {
    id: "sweet", label: "Sweet", icon: "🍬",
    produk: [
      { name: "Pink Vanilla",  desc: "Vanilla creamy yang warm dan menggoda, memberikan kesan mewah dan tahan lama.",                price: 80000,  stok: "Tersedia", img: "pink vanilla.jpg",  rating: 4.9, ulasan: 512,  terjual: 3100, notes: ["Vanilla", "Caramel", "Musk"] },
      { name: "Candy Kiss",    desc: "Aroma permen kapas dan buah beri yang playful dan ceria, cocok untuk anak muda.",               price: 90000,  stok: "Tersedia", img: "candy kiss.jpg",    rating: 4.7, ulasan: 289,  terjual: 1800, notes: ["Berry", "Cotton Candy", "Sugar"] },
      { name: "Honey Caramel", desc: "Karamel manis dengan sentuhan madu hangat yang mewah dan tahan lama.",                         price: 75000,  stok: "Tersedia", img: "honey caramel.jpg", rating: 4.8, ulasan: 334,  terjual: 2100, notes: ["Honey", "Caramel", "Amber"] },
      { name: "Cotton Candy",  desc: "Permen kapas fluffy yang manis dan ceria, ringan dan segar sepanjang hari.",                   price: 110000, stok: "Tersedia", img: "cotton candy.jpg",  rating: 4.8, ulasan: 198,  terjual: 1100, notes: ["Cotton", "Peach", "Vanilla"] },
    ]
  },
  {
    id: "fresh", label: "Fresh", icon: "💧",
    produk: [
      { name: "Aqua Breeze",   desc: "Semilir angin laut yang sejuk dan bersih, sempurna untuk aktivitas di siang hari.",            price: 60000,  stok: "Tersedia", img: "aqua breeze.jpg",   rating: 4.8, ulasan: 267,  terjual: 1600, notes: ["Sea", "Citrus", "Aqua"] },
      { name: "Morning Dew",   desc: "Embun pagi yang bersih dengan sentuhan citrus ringan yang menyegarkan.",                       price: 55000,  stok: "Tersedia", img: "morning dew.jpg",   rating: 4.7, ulasan: 193,  terjual: 1050, notes: ["Dew", "Lemon", "Green Tea"] },
      { name: "Green Tea",     desc: "Teh hijau yang menenangkan dan menyegarkan, memberikan ketenangan sepanjang hari.",             price: 65000,  stok: "Tersedia", img: "green tea.jpg",     rating: 4.9, ulasan: 445,  terjual: 2700, notes: ["Green Tea", "Bamboo", "Cedar"] },
      { name: "White Linen",   desc: "Aroma kain bersih yang ringan dan elegan, memberikan kesan higienis dan modern.",              price: 70000,  stok: "Tersedia", img: "white linen.jpg",   rating: 4.8, ulasan: 156,  terjual: 870,  notes: ["Linen", "Powder", "Musk"] },
    ]
  },
  {
    id: "woody", label: "Woody", icon: "🌿",
    produk: [
      { name: "Oud Rose",      desc: "Oud mewah berpadu mawar yang sensual dan elegan, tahan lama hingga 12 jam.",                   price: 70000,  stok: "Tersedia", img: "oud rose.jpg",      rating: 4.9, ulasan: 623,  terjual: 4200, notes: ["Oud", "Rose", "Amber"] },
      { name: "Sandalwood",    desc: "Cendana hangat dan creamy yang menenangkan, cocok untuk acara formal maupun kasual.",           price: 85000,  stok: "Tersedia", img: "sandalwood.jpg",    rating: 4.8, ulasan: 389,  terjual: 2500, notes: ["Sandalwood", "Vanilla", "Musk"] },
      { name: "Amber Musk",    desc: "Amber dan musk yang dalam, hangat, dan tahan lama — aroma yang tak terlupakan.",               price: 55000,  stok: "Tersedia", img: "amber musk.jpg",    rating: 4.7, ulasan: 278,  terjual: 1700, notes: ["Amber", "Musk", "Patchouli"] },
      { name: "Forest Walk",   desc: "Aroma hutan setelah hujan yang earthy dan segar, membawa ketenangan alam.",                    price: 75000,  stok: "Tersedia", img: "forest walk.jpg",   rating: 4.8, ulasan: 201,  terjual: 1300, notes: ["Wood", "Moss", "Vetiver"] },
    ]
  }
];

let cart         = [];
let kategoriAktif = kategori[0].id;
let detailProduk  = null;
let detailQty     = 1;

const rp = n => n.toLocaleString('id-ID');

function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// ===== KATEGORI =====
function renderKategori() {
  document.getElementById("kategori-wrap").innerHTML = kategori.map(k => `
    <button class="kategori-btn ${k.id === kategoriAktif ? 'aktif' : ''}" onclick="pilihKategori('${k.id}')">
      <span class="kat-icon">${k.icon}</span>
      <span class="kat-label">${k.label}</span>
    </button>`).join("");
}

function pilihKategori(id) {
  kategoriAktif = id;
  renderKategori();
  displayProducts();
}

// ===== TAMPILKAN PRODUK =====
function displayProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  const kat = kategori.find(k => k.id === kategoriAktif);
  setTimeout(() => {
    list.innerHTML = kat.produk.map((p, i) => `
      <div class="col-md-3 col-sm-6 mb-2 produk-masuk" style="animation-delay:${i * 0.08}s">
        <div class="card-produk">
          <div class="img-wrap" onclick="bukaDetail('${kategoriAktif}', ${i})">
            <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/150/ffd6e0/e8537a?text=Parfum'">
          </div>
          <div class="card-body-custom">
            <div class="card-name" onclick="bukaDetail('${kategoriAktif}', ${i})" style="cursor:pointer">${p.name}</div>
            <div class="card-desc">${p.desc.substring(0, 55)}...</div>
            <div class="card-harga">Rp ${rp(p.price)}</div>
            <div class="card-actions">
              <button class="btn-outline-pink" onclick="addToCart('${kategoriAktif}', ${i}, this)">🛒 Keranjang</button>
              <button class="btn-pink" onclick="beliSekarang('${kategoriAktif}', ${i})">⚡ Beli</button>
            </div>
          </div>
        </div>
      </div>`).join("");
  }, 50);
}

// ===== MODAL DETAIL PRODUK =====
function bukaDetail(katId, idx) {
  const p = kategori.find(k => k.id === katId).produk[idx];
  detailProduk = p;
  detailQty    = 1;
  document.getElementById("detail-img").src              = p.img;
  document.getElementById("detail-img").onerror          = function () { this.src = 'https://via.placeholder.com/200/ffd6e0/e8537a?text=Parfum'; };
  document.getElementById("detail-name").innerText       = p.name;
  document.getElementById("detail-harga").innerText      = "Rp " + rp(p.price);
  document.getElementById("detail-desc").innerText       = p.desc;
  document.getElementById("detail-qty").innerText        = detailQty;
  document.getElementById("detail-notes").innerHTML      = p.notes.map(n => `<span class="aroma-note">${n}</span>`).join("");
  document.getElementById("detail-overlay").classList.add("aktif");
  document.body.style.overflow = "hidden";
}

function tutupDetail() {
  document.getElementById("detail-overlay").classList.remove("aktif");
  document.body.style.overflow = "";
  detailProduk = null;
  detailQty    = 1;
}

function detailTambah() { detailQty++; document.getElementById("detail-qty").innerText = detailQty; }
function detailKurang() { if (detailQty > 1) { detailQty--; document.getElementById("detail-qty").innerText = detailQty; } }

function addFromDetail() {
  if (!detailProduk) return;
  for (let i = 0; i < detailQty; i++) {
    const found = cart.find(c => c.name === detailProduk.name);
    if (found) { found.qty++; } else { cart.push({ ...detailProduk, qty: 1 }); }
  }
  renderCartPanel();
  updateBadge();
  showToast(`${detailProduk.name} x${detailQty} ditambahkan 🛒`);
  tutupDetail();
  bukaKeranjang();
}

function beliSekarangFromDetail() {
  if (!detailProduk) return;
  const tempCart = [{ ...detailProduk, qty: detailQty }];
  tutupDetail();
  bukaCheckoutLangsung(tempCart);
}

// ===== KERANJANG =====
function addToCart(katId, idx, btnEl) {
  const p     = kategori.find(k => k.id === katId).produk[idx];
  const found = cart.find(c => c.name === p.name);
  if (found) { found.qty++; } else { cart.push({ ...p, qty: 1 }); }
  if (btnEl) {
    btnEl.classList.remove('btn-bounce');
    void btnEl.offsetWidth;
    btnEl.classList.add('btn-bounce');
    const ori = btnEl.innerHTML;
    btnEl.innerHTML = "✅ Ditambah!";
    setTimeout(() => { btnEl.innerHTML = ori; }, 1200);
  }
  renderCartPanel();
  updateBadge();
  showToast(`${p.name} ditambahkan ke keranjang 🛒`);
  bukaKeranjang();
}

function beliSekarang(katId, idx) {
  const p = kategori.find(k => k.id === katId).produk[idx];
  bukaCheckoutLangsung([{ ...p, qty: 1 }]);
}

function renderCartPanel() {
  const emptyEl  = document.getElementById("cart-empty-panel");
  const itemsEl  = document.getElementById("cart-items-panel");
  const footerEl = document.getElementById("cart-panel-footer");
  if (cart.length === 0) {
    emptyEl.style.display  = "block";
    itemsEl.innerHTML      = "";
    footerEl.style.display = "none";
    return;
  }
  emptyEl.style.display  = "none";
  footerEl.style.display = "block";
  let total = 0;
  itemsEl.innerHTML = cart.map((p, i) => {
    const sub = p.price * p.qty;
    total += sub;
    return `
    <div class="cart-shopee-item">
      <img class="cart-shopee-img" src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/70/ffd6e0/e8537a?text=P'">
      <div class="cart-shopee-info">
        <div class="cart-shopee-name">${p.name}</div>
        <div class="cart-shopee-desc">${p.desc.substring(0, 40)}...</div>
        <div class="cart-shopee-price">Rp ${rp(sub)}</div>
        <div class="cart-shopee-qty">
          <button class="qty-btn" onclick="kurang(${i})">−</button>
          <span class="qty-num">${p.qty}</span>
          <button class="qty-btn" onclick="tambah(${i})">+</button>
        </div>
      </div>
      <button class="cart-delete-btn" onclick="hapusItem(${i})" title="Hapus">🗑</button>
    </div>`;
  }).join("");
  document.getElementById("cart-total").innerText = rp(total);
}

function tambah(i)    { cart[i].qty++; renderCartPanel(); updateBadge(); }
function kurang(i)    { cart[i].qty--; if (cart[i].qty <= 0) cart.splice(i, 1); renderCartPanel(); updateBadge(); }
function hapusItem(i) { cart.splice(i, 1); renderCartPanel(); updateBadge(); }

function updateBadge() {
  const badge = document.getElementById("cart-badge");
  const total = cart.reduce((s, p) => s + p.qty, 0);
  badge.innerText     = total;
  badge.style.display = total > 0 ? "flex" : "none";
}

function bukaKeranjang() {
  document.getElementById("cart-panel").classList.add("aktif");
  document.getElementById("cart-overlay").classList.add("aktif");
  document.body.style.overflow = "hidden";
}

function tutupKeranjang() {
  document.getElementById("cart-panel").classList.remove("aktif");
  document.getElementById("cart-overlay").classList.remove("aktif");
  document.body.style.overflow = "";
}

// ===== CHECKOUT =====
function bukaCheckout() {
  if (cart.length === 0) return;
  tutupKeranjang();
  isiModalCheckout(cart);
}

function bukaCheckoutLangsung(items) {
  tutupKeranjang();
  isiModalCheckout(items, true);
}

function isiModalCheckout(items, langsung = false) {
  let total = 0;
  document.getElementById("order-summary-items").innerHTML = items.map(p => {
    const sub = p.price * p.qty;
    total += sub;
    return `<div class="order-summary-item"><span>${p.name} x${p.qty}</span><span>Rp ${rp(sub)}</span></div>`;
  }).join("");
  document.getElementById("order-total-modal").innerText             = "Rp " + rp(total);
  document.getElementById("checkout-overlay").dataset.langsung       = langsung ? JSON.stringify(items) : "";
  document.getElementById("checkout-overlay").classList.add("aktif");
  document.body.style.overflow = "hidden";
}

function tutupCheckout() {
  document.getElementById("checkout-overlay").classList.remove("aktif");
  document.body.style.overflow = "";
}

function checkout() {
  const nama   = document.getElementById("nama").value.trim();
  const hp     = document.getElementById("hp").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const bayar  = document.getElementById("bayar").value;
  if (!nama || !hp || !alamat) { alert("❗ Lengkapi data dirimu dulu!\nNama, No HP, dan Alamat wajib diisi."); return; }
  if (!bayar) { alert("❗ Pilih metode pembayaran dulu!"); return; }

  const langsungData = document.getElementById("checkout-overlay").dataset.langsung;
  const items        = langsungData ? JSON.parse(langsungData) : cart;
  let total = 0, itemsHtml = "";
  items.forEach(p => {
    const sub = p.price * p.qty;
    total += sub;
    itemsHtml += `${p.name} x${p.qty}<br>Rp ${rp(sub)}<br>`;
  });

  const tgl     = new Date().toLocaleString('id-ID');
  const noOrder = "PS" + Date.now().toString().slice(-6);

  document.getElementById("notaIsi").innerHTML = `
<hr style="border:1px dashed #ffafc5;margin-bottom:10px">
<b>No. Order:</b> ${noOrder}<br><b>Tanggal:</b> ${tgl}<br>
<hr style="border:1px dashed #ffafc5">
<b>Data Pembeli:</b><br>Nama: ${nama}<br>HP: ${hp}<br>Alamat: ${alamat}<br>Pembayaran: ${bayar}<br>
<hr style="border:1px dashed #ffafc5">
<b>Pesanan:</b><br>${itemsHtml}
<hr style="border:1px dashed #ffafc5">
<b>TOTAL: Rp ${rp(total)}</b><br>
<hr style="border:1px dashed #ffafc5">
<center>Terima kasih sudah belanja! 💕</center>
<center>@pinkscent.id</center>`;

  if (!langsungData) { cart = []; renderCartPanel(); updateBadge(); }
  tutupCheckout();
  document.getElementById("notaPage").style.display = "block";
  window.scrollTo(0, 0);
}

function closeNota() {
  document.getElementById("notaPage").style.display = "none";
  ["nama", "hp", "alamat", "bayar"].forEach(id => document.getElementById(id).value = "");
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById("toast-notif");
  t.innerText = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

// Tutup detail saat klik luar modal
document.getElementById("detail-overlay").addEventListener("click", function (e) {
  if (e.target === this) tutupDetail();
});