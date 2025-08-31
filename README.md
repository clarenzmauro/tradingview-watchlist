# TradingView Watchlist

A modern, responsive trading watchlist application built with React, TypeScript, and Tailwind CSS. This application provides quick access to popular financial instruments across multiple asset classes, with direct links to TradingView charts.

## 🚀 Features

- **Comprehensive Asset Coverage**: Forex, Indices, Commodities, and Crypto
- **Organized Categories**:
  - Forex Majors (EURUSD, GBPUSD, AUDUSD, etc.)
  - JPY Cross Pairs (EURJPY, GBPJPY, etc.)
  - AUD/NZD Cross Pairs
  - CHF Cross Pairs
  - Major Indices Futures (S&P 500, NASDAQ, Dow Jones)
  - Commodities (Gold, Silver, Oil Futures)
  - Crypto Perpetuals (BTC, ETH)
- **Visual Currency Flags**: Country flags for easy currency identification
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Dark/Light Theme Support**: Built-in theme system
- **Fast Navigation**: One-click access to TradingView charts
- **Modern UI**: Clean, professional interface with hover effects

## 🛠️ Technologies Used

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icons
- **Bun** - Fast JavaScript runtime and package manager

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd tradingview-watchlist
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun run dev
   ```

4. **Build for production**
   ```bash
   bun run build
   ```

## 🎯 Usage

1. Open the application in your browser
2. Browse through different asset categories (Forex, Indices, Commodities, Crypto)
3. Click on any asset card to open its TradingView chart in a new tab
4. Use the responsive grid layout on any device

## 📁 Project Structure

```
tradingview-watchlist/
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── button.tsx          # Reusable button component
│   ├── lib/
│   │   └── utils.ts                # Utility functions
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   ├── index.css                   # Global styles and Tailwind imports
│   └── vite-env.d.ts               # Vite type definitions
├── public/
│   └── vite.svg                    # Vite logo
├── components.json                 # shadcn/ui configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.*.json                 # TypeScript configurations
├── vite.config.ts                  # Vite configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## 🎨 Customization

### Adding New Assets

To add new trading instruments, edit the asset arrays in `src/App.tsx`:

```typescript
const newAssets: Asset[] = [
  {
    ticker: "NEWASSET",
    baseCurrency: "New Asset Name",
    baseImage: "https://example.com/flag.svg",
    quoteImage: "https://example.com/quote-flag.svg", // optional
    link: "https://www.tradingview.com/chart/?symbol=EXCHANGE:SYMBOL"
  }
];
```

### Modifying Categories

Add new categories by creating new asset arrays and rendering sections in the JSX.

### Styling

The application uses Tailwind CSS for styling. Customize colors, spacing, and layout by modifying:
- `src/index.css` for global styles
- Component className props for local styling
- `tailwind.config.js` for theme customization

## 🔧 Development

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint

### Code Quality

The project includes:
- **TypeScript strict mode** for type safety
- **ESLint** for code linting
- **Prettier-ready** configuration
- **Responsive design** principles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Based on the watchlist shared in the TradingView Discord community
- Icons and flags provided by TradingView's symbol logo service
- UI components powered by shadcn/ui
- Built with modern web technologies for optimal performance

note: while I did make the AI type this readme, all code in App.tsx were mine.