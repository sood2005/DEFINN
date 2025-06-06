��#   D E F I N N 
 
 # DEFINN

DEFINN is a modern web-based finance dashboard that offers users a seamless experience for managing digital assets, stock trading, and UPI-style peer-to-peer payments. Inspired by interfaces like Binance and Zerodha, DEFINN combines powerful features from multiple financial verticals into one integrated platform.

## 🌐 Live Modules

### 1. **Crypto Market Interface**
- Fetches real-time market data from the Binance API.
- Displays top crypto pairs in a styled table.
- Allows wallet connection via MetaMask for dummy buy/sell transactions.
- Includes integrated crypto news fetched from RSS feeds.

🔗 Page: [`crypto.html`](./crypto.html)

---

### 2. **Stock Trading Simulator**
- Simulated stock price updates with dynamic chart previews.
- Users can search stocks, view price trends, and execute buy/sell orders.
- Tracks orders and maintains a virtual portfolio.
- Includes a funds section for adding/withdrawing balance and reviewing holdings.

🔗 Page: [`stock.html`](./stock.html)

---

### 3. **UPI-Style Payment System**
- Simulates sending and receiving money via:
  - QR code
  - Contact selection
  - Payment ID
- HTML5 QR scanning and payment ID generation.
- Transaction history is stored and fetched from a Node.js + MongoDB backend.

🔗 Page: [`payment.html`](./payment.html)

---

## 🧠 Tech Stack

**Frontend:**
- HTML5, CSS3, TailwindCSS
- JavaScript (vanilla)
- Responsive UI with modern UX patterns

**Backend:**
- Node.js + Express
- MongoDB with Mongoose
- RESTful API for handling transactions

**Tools & APIs:**
- Binance API
- MetaMask Ethereum wallet integration
- Coindesk RSS feed (via allorigins proxy)
- html5-qrcode for QR scanning

---

## 🛠️ Project Structure

