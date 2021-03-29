import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://rumstaking.com/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://rumstaking.com/farms'
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: 'https://rumstaking.com/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xCd33351638a9E9f9E507d3448e239063C69C6b99',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x35f4e1af8d76f33ce8b051b6c15050afab9e83e2',
      },
      /* {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/rum-swap',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/rum-swap/',
      },
       */
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/rumstaking/",
      },
      {
        label: "Docs",
        href: "https://docs.rumstaking.com/",
      },
      {
        label: "Blog",
        href: "https://rumstaking.medium.com",
      },
    ],
  },
  /* {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://rumstaking.com/files/hackenAudit.pdf',
  }, */
]

export default config
