import { Button } from "./components/ui/button";

// asset data structure
interface Asset {
  ticker: string;
  baseCurrency: string;
  baseImage: string;
  quoteImage?: string;
  link: string;
}

const forexMajors: Asset[] = [
  {
    ticker: "DXY",
    baseCurrency: "U.S. Dollar Index",
    baseImage: "https://s3-symbol-logo.tradingview.com/indices/u-s-dollar-index--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=TVC%3ADXY",
  },
  {
    ticker: "EURUSD",
    baseCurrency: "Euro / U.S. Dollar",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/EU--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/US--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AEURUSD"
  },
  {
    ticker: "GBPUSD",
    baseCurrency: "British Pound / U.S. Dollar",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/GB--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/US--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AGBPUSD"
  },
  {
    ticker: "AUDUSD",
    baseCurrency: "Australian Dollar / U.S. Dollar",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/AU--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/US--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AAUDUSD"
  },
  {
    ticker: "NZDUSD",
    baseCurrency: "New Zealand Dollar / U.S. Dollar",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/NZ--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/US--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3ANZDUSD"
  },
  {
    ticker: "USDCAD",
    baseCurrency: "U.S. Dollar / Canadian Dollar",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/US--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/CA--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AUSDCAD"
  },
  {
    ticker: "USDCHF",
    baseCurrency: "U.S. Dollar / Swiss Franc",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/US--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/CH--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AUSDCHF"
  },
  {
    ticker: "USDJPY",
    baseCurrency: "U.S. Dollar / Japanese Yen",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/US--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/JP--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AUSDJPY"
  },
];

const forexJPY: Asset[] = [
  {
    ticker: "EURJPY",
    baseCurrency: "Euro / Japanese Yen",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/EU--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/JP--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AEURJPY"
  },
  {
    ticker: "GBPJPY",
    baseCurrency: "British Pound / Japanese Yen",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/GB--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/JP--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AGBPJPY"
  },
  {
    ticker: "AUDJPY",
    baseCurrency: "Australian Dollar / Japanese Yen",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/AU--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/JP--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AAUDJPY"
  },
  {
    ticker: "NZDJPY",
    baseCurrency: "New Zealand Dollar / Japanese Yen",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/NZ--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/JP--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3ANZDJPY"
  },
  {
    ticker: "CADJPY",
    baseCurrency: "Canadian Dollar / Japanese Yen",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/CA--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/JP--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3ACADJPY"
  },
  {
    ticker: "CHFJPY",
    baseCurrency: "Swiss Franc / Japanese Yen",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/CH--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/JP--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3ACHFJPY"
  },
];

const forexAUDNZD: Asset[] = [
  {
    ticker: "EURAUD",
    baseCurrency: "Euro / Australian Dollar",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/EU--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/AU--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AEURAUD"
  },
  {
    ticker: "GBPAUD",
    baseCurrency: "British Pound / Australian Dollar",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/GB--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/AU--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AGBPAUD"
  },
  {
    ticker: "AUDNZD",
    baseCurrency: "Australian Dollar / New Zealand Dollar",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/AU--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/NZ--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AAUDNZD"
  },
  {
    ticker: "EURNZD",
    baseCurrency: "Euro / New Zealand Dollar",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/EU--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/NZ--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AEURNZD"
  },
  {
    ticker: "GBPNZD",
    baseCurrency: "British Pound / New Zealand Dollar",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/GB--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/NZ--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AGBPNZD"
  },
];

const forexCHF: Asset[] = [
  {
    ticker: "EURCHF",
    baseCurrency: "Euro / Swiss Franc",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/EU--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/CH--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AEURCHF"
  },
  {
    ticker: "AUDCHF",
    baseCurrency: "Australian Dollar / Swiss Franc",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/AU--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/CH--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3AAUDCHF"
  },
  {
    ticker: "NZDCHF",
    baseCurrency: "New Zealand Dollar / Swiss Franc",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/NZ--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/CH--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3ANZDCHF"
  },
  {
    ticker: "CADCHF",
    baseCurrency: "Canadian Dollar / Swiss Franc",
    baseImage: "https://s3-symbol-logo.tradingview.com/country/CA--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/country/CH--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=OANDA%3ACADCHF"
  },
];

const indices: Asset[] = [
  {
    ticker: "ES1!",
    baseCurrency: "S&P 500 E-mini Futures",
    baseImage: "https://s3-symbol-logo.tradingview.com/indices/s-and-p-500--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=CME_MINI%3AES1!"
  },
  {
    ticker: "NQ1!",
    baseCurrency: "NASDAQ 100 E-mini Futures",
    baseImage: "https://s3-symbol-logo.tradingview.com/indices/nasdaq-100--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=CME_MINI%3ANQ1!"
  },
  {
    ticker: "YM1!",
    baseCurrency: "Dow Jones Futures, E-mini",
    baseImage: "https://s3-symbol-logo.tradingview.com/indices/dow-30--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=CBOT_MINI%3AYM1!"
  },
];

const commodities: Asset[] = [
  {
    ticker: "GC1!",
    baseCurrency: "Gold Futures",
    baseImage: "https://s3-symbol-logo.tradingview.com/metal/gold--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=COMEX%3AGC1!"
  },
  {
    ticker: "SI1!",
    baseCurrency: "Silver Futures",
    baseImage: "https://s3-symbol-logo.tradingview.com/metal/silver--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=COMEX%3ASI1!"
  },
  {
    ticker: "CL1!",
    baseCurrency: "Light Crude Oil Futures",
    baseImage: "https://s3-symbol-logo.tradingview.com/crude-oil--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=NYMEX%3ACL1!"
  },
];

const crypto: Asset[] = [
  {
    ticker: "BTCUSDT.P",
    baseCurrency: "BTCUSDT Perpetual Contract",
    baseImage: "https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/crypto/XTVCUSDT--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=BYBIT%3ABTCUSDT.P"
  },
  {
    ticker: "ETHUSDT.P",
    baseCurrency: "ETHUSDT Perpetual Contract",
    baseImage: "https://s3-symbol-logo.tradingview.com/crypto/XTVCETH--big.svg",
    quoteImage: "https://s3-symbol-logo.tradingview.com/crypto/XTVCUSDT--big.svg",
    link: "https://www.tradingview.com/chart/?symbol=BYBIT%3AETHUSDT.P"
  },
]

function App() {
  const handleAssetClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  // render the base / quote currency images
  const renderCurrencyImages = (asset: Asset) => {
    if (asset.quoteImage) {
      // pair assets
      return (
        <div className="flex items-center gap-1">
          <img
            src={asset.baseImage}
            alt={`${asset.baseCurrency} logo`}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
            loading="lazy"
          />
          <span className="text-xs text-muted-foreground">/</span>
          <img
            src={asset.quoteImage}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
            loading="lazy"
          />
        </div>
      );
    } else {
      // non-pair assets
      return (
        <img
          src={asset.baseImage}
          alt={`${asset.baseCurrency} logo`}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          loading="lazy"
        />
      );
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Trading Watchlist by m27oflegend
          </h1>
          <p>
            This watchlist is based on <a href="https://discord.com/channels/1146276386458304614/1146276389830529105/1177711051958136952" className="underline">this watchlist</a>
          </p>
          <p className="text-muted-foreground">
            Click on any asset to view its chart
          </p>
        </header>

        {/* forex majors */}
        <h1 className="text-2xl md:text-2xl font-bold text-foreground mb-2">
            Forex
        </h1>
        <h1 className="text-xl text-foreground mb-2">
            Majors
        </h1>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {forexMajors.map((asset, index) => (
            <Button
              key={`${asset.ticker}-${index}`}
              variant="outline"
              size="lg"
              className="h-auto p-3 md:p-4 flex flex-col items-center gap-1 md:gap-2 hover:bg-accent transition-colors text-sm md:text-base"
              onClick={() => handleAssetClick(asset.link)}
            >
              {renderCurrencyImages(asset)}
              <div className="text-center">
                <div className="font-semibold text-foreground">
                  {asset.ticker}
                </div>
                <div className="text-[10px] md:text-[12px] text-muted-foreground">
                  {asset.baseCurrency}
                </div>
              </div>
            </Button>
          ))}
        </div>

        <br />

        {/* jpy pairs */}
        <h1 className="text-xl text-foreground mb-2">
            JPY Pairs
        </h1>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {forexJPY.map((asset, index) => (
            <Button
              key={`${asset.ticker}-${index}`}
              variant="outline"
              size="lg"
              className="h-auto p-3 md:p-4 flex flex-col items-center gap-1 md:gap-2 hover:bg-accent transition-colors text-sm md:text-base"
              onClick={() => handleAssetClick(asset.link)}
            >
              {renderCurrencyImages(asset)}
              <div className="text-center">
                <div className="font-semibold text-foreground">
                  {asset.ticker}
                </div>
                <div className="text-[9px] md:text-[12px] text-muted-foreground">
                  {asset.baseCurrency}
                </div>
              </div>
            </Button>
          ))}
        </div>

        <br />

        {/* aud/nzd pairs */}
        <h1 className="text-xl text-foreground mb-2">
            AUD & NZD Pairs
        </h1>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {forexAUDNZD.map((asset, index) => (
            <Button
              key={`${asset.ticker}-${index}`}
              variant="outline"
              size="lg"
              className="h-auto p-3 md:p-4 flex flex-col items-center gap-1 md:gap-2 hover:bg-accent transition-colors text-sm md:text-base"
              onClick={() => handleAssetClick(asset.link)}
            >
              {renderCurrencyImages(asset)}
              <div className="text-center">
                <div className="font-semibold text-foreground">
                  {asset.ticker}
                </div>
                <div className="text-[8px] md:text-[12px] text-muted-foreground">
                  {asset.baseCurrency}
                </div>
              </div>
            </Button>
          ))}
        </div>

        <br />

        {/* chf pairs */}
        <h1 className="text-xl text-foreground mb-2">
            CHF Pairs
        </h1>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {forexCHF.map((asset, index) => (
            <Button
              key={`${asset.ticker}-${index}`}
              variant="outline"
              size="lg"
              className="h-auto p-3 md:p-4 flex flex-col items-center gap-1 md:gap-2 hover:bg-accent transition-colors text-sm md:text-base"
              onClick={() => handleAssetClick(asset.link)}
            >
              {renderCurrencyImages(asset)}
              <div className="text-center">
                <div className="font-semibold text-foreground">
                  {asset.ticker}
                </div>
                <div className="text-[9px] md:text-[12px] text-muted-foreground">
                  {asset.baseCurrency}
                </div>
              </div>
            </Button>
          ))}
        </div>

        <br />

        {/* indices */}
        <h1 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Indices
        </h1>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {indices.map((asset, index) => (
            <Button
              key={`${asset.ticker}-${index}`}
              variant="outline"
              size="lg"
              className="h-auto p-3 md:p-4 flex flex-col items-center gap-1 md:gap-2 hover:bg-accent transition-colors text-sm md:text-base"
              onClick={() => handleAssetClick(asset.link)}
            >
              {renderCurrencyImages(asset)}
              <div className="text-center">
                <div className="font-semibold text-foreground">
                  {asset.ticker}
                </div>
                <div className="text-[12px] text-muted-foreground">
                  {asset.baseCurrency}
                </div>
              </div>
            </Button>
          ))}
        </div>

        <div className="mb-6 md:mb-8"></div>

        {/* commodities */}
        <h1 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Commodities
        </h1>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {commodities.map((asset, index) => (
            <Button
              key={`${asset.ticker}-${index}`}
              variant="outline"
              size="lg"
              className="h-auto p-3 md:p-4 flex flex-col items-center gap-1 md:gap-2 hover:bg-accent transition-colors text-sm md:text-base"
              onClick={() => handleAssetClick(asset.link)}
            >
              {renderCurrencyImages(asset)}
              <div className="text-center">
                <div className="font-semibold text-foreground">
                  {asset.ticker}
                </div>
                <div className="text-[12px] text-muted-foreground">
                  {asset.baseCurrency}
                </div>
              </div>
            </Button>
          ))}
        </div>

        <br />

        {/* crypto */}
        <h1 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Crypto
        </h1>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {crypto.map((asset, index) => (
            <Button
              key={`${asset.ticker}-${index}`}
              variant="outline"
              size="lg"
              className="h-auto p-3 md:p-4 flex flex-col items-center gap-1 md:gap-2 hover:bg-accent transition-colors text-sm md:text-base"
              onClick={() => handleAssetClick(asset.link)}
            >
              {renderCurrencyImages(asset)}
              <div className="text-center">
                <div className="font-semibold text-foreground">
                  {asset.ticker}
                </div>
                <div className="text-[10px] md:text-[12px] text-muted-foreground">
                  {asset.baseCurrency}
                </div>
              </div>
            </Button>
          ))}
        </div>
        
      </div>

    </div>
  );
}

export default App;