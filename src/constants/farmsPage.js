import plentyXtz from '../assets/images/farms/plenty-xtz.png';
import kalamXtz from '../assets/images/farms/kalam-xtz.png';
import plentyToken from '../assets/images/logo_small.png';
import plentyWUSDC from '../assets/images/farms/PLENTY-wUSDC.png';
import plentyWBUSD from '../assets/images/farms/PLENTY-wBUSD.png';
import plentyWWBTC from '../assets/images/farms/PLENTY-wWBTC.png';
import plentyUsdtz from '../assets/images/plenty-usdtz.png';
import plentyWmatic from '../assets/images/plenty-wmatic.png';
import plentyWlink from '../assets/images/plenty-wlink.png';
import hdaoLpFarm from '../assets/images/farms/hdaoLpFarm.png';
import ethtzLpFarm from '../assets/images/farms/ethtzLpFarm.png';
import wwethLpFarm from '../assets/images/farms/wwethLpFarm.png';
import kusdLpFarm from '../assets/images/farms/kusdLpFarm.png';
import quipuLpFarm from '../assets/images/farms/quipuLpFarm.png';
import kalamLpFarm from '../assets/images/farms/plenty-kalam.png';
import smakLpFarm from '../assets/images/farms/plenty-smak.png';
import tzbtcLpFarm from '../assets/images/farms/plenty-tzbtc.png';
import unoLpFarm from '../assets/images/farms/plenty-uno.png';
import wrapLpFarm from '../assets/images/farms/plenty-wrap.png';
import uusdLpFarm from '../assets/images/farms/uusdLpFarm.png';
import gifDualLpFarm from '../assets/images/plenty-gif-dual-lp.png';
import gifIcon from '../assets/images/gif-dao-token.png';
import wdaiLpFarm from '../assets/images/farms/wdaiLpFarm.png';
import wusdtLpFarm from '../assets/images/farms/wusdtLpFarm.png';

import youLpFarm from '../assets/images/farms/youLpFarm.png';
import ctezLpFarm from '../assets/images/farms/ctezLpFarm.png';

import wbusd from '../assets/images/busd.png';

import PropTypes from 'prop-types';

export const FARMS_CARD_DATA_PROPTYPES = PropTypes.shape({
  farmData: PropTypes.shape({
    LP_TOKEN: PropTypes.string,
    CONTRACT: PropTypes.string,
    DEX: PropTypes.string,
    TOKEN_ADDRESS: PropTypes.string,
    CARD_TYPE: PropTypes.string,
    TOKEN_DECIMAL: 6,
    TYPE: PropTypes.string,
    LP_DECIMAL: 18,
    TEMP_ADDRESS: PropTypes.string,
    DECIMAL: 18,
    withdrawalFeeType: PropTypes.array,
  }).isRequired,
  properties: PropTypes.shape({
    image: PropTypes.string,
    harvestImg: PropTypes.string,
    multi: PropTypes.string,
    title: PropTypes.string,
    apr: PropTypes.number,
    apy: PropTypes.string,
    earn: PropTypes.string,
    fee: PropTypes.string,
    earned: PropTypes.number,
    deposit: PropTypes.string,
    liquidity: PropTypes.string,
    withdrawalFee: PropTypes.string,
    balance: PropTypes.number,
    userBalance: PropTypes.number,
    URL: PropTypes.string,
    active: PropTypes.bool,
    source: PropTypes.string,
    rewards: PropTypes.string,
  }).isRequired,
  identifier: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  values: PropTypes.shape({
    identifier: PropTypes.string,
    APR: PropTypes.number,
    totalLiquidty: PropTypes.number,
    roiTable: PropTypes.arrayOf(
      PropTypes.shape({
        roi: PropTypes.number,
        PlentyPer1000dollar: PropTypes.number,
      })
    ),
    totalSupply: PropTypes.number,
    rewardRate: PropTypes.number,
  }),
});

export const FARM_PAGE_MODAL = {
  NULL: null,
  ROI: 'roi',
  STAKE: 'stake',
  UNSTAKE: 'unstake',
  WITHDRAWAL: 'withdrawal',
  TRANSACTION_SUCCESS: 'transaction-success',
};

export const FARMS_CARD_TYPE_LIST = {
  'PLENTY / XTZ LP': {
    image: plentyXtz,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / XTZ LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY - XTZ LP',
    liquidity: '100000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Quipuswap LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'KALAM / XTZ LP': {
    image: kalamXtz,
    harvestImg: plentyToken,
    multi: '100',
    title: 'KALAM / XTZ LP',
    apr: 3,
    apy: '1111',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'KALAM - XTZ LP',
    liquidity: '100000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Quipuswap LP',
    rewards: '1000 KALAM / DAY',
    isDualFarm: false,
  },
  'hDAO / PLENTY LP': {
    image: plentyXtz,
    multi: '100',
    title: 'hDAO / PLENTY LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY - XTZ LP',
    liquidity: '1000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'KALAM / PLENTY LP': {
    image: plentyXtz,
    harvestImg: plentyToken,
    multi: '100',
    title: 'KALAM / PLENTY LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY - XTZ LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / wUSDC LP': {
    image: plentyWUSDC,
    harvestImg: plentyToken,
    harvestImg1: wbusd,
    multi: '100',
    title: 'PLENTY / wUSDC LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / wUSDC LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / wBUSD LP': {
    image: plentyWBUSD,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / wBUSD LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / wBUSD LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / wWBTC LP': {
    image: plentyWWBTC,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / wWBTC LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / wWBTC LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / wMATIC LP': {
    image: plentyWmatic,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / wMATIC LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / wMATIC LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / wLINK LP': {
    image: plentyWlink,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / wLINK LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / wLINK LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / USDtz LP': {
    image: plentyUsdtz,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / USDtz LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / USDtz LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / hDAO LP': {
    image: hdaoLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / hDAO LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / hDAO LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / ETHtz LP': {
    image: ethtzLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / ETHtz LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / ETHtz LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / wWETH LP': {
    image: wwethLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / wWETH LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / wWETH LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / kUSD LP': {
    image: kusdLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / kUSD LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / kUSD LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / QUIPU LP': {
    image: quipuLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / QUIPU LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / QUIPU LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / WRAP LP': {
    image: wrapLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / WRAP LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / WRAP LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / UNO LP': {
    image: unoLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / UNO LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / UNO LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / SMAK LP': {
    image: smakLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / SMAK LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / SMAK LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / KALAM LP': {
    image: kalamLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / KALAM LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / KALAM LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / tzBTC LP': {
    image: tzbtcLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / tzBTC LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / tzBTC LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: false,
  },
  'PLENTY / uUSD LP': {
    image: uusdLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / uUSD LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / uUSD LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
  },
  'PLENTY / GIF Dual LP': {
    image: gifDualLpFarm,
    harvestImg: plentyToken,
    harvestImg1: gifIcon,
    multi: '100',
    title: 'PLENTY / GIF LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / GIF Dual LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
    isDualFarm: true,
  },
  'PLENTY / YOU LP': {
    image: youLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / YOU LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / YOU LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
  },
  'PLENTY / wDAI LP': {
    image: wdaiLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / wDAI LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / wDAI LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
  },
  'PLENTY / wUSDT LP': {
    image: wusdtLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / wUSDT LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / wUSDT LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
  },
  'PLENTY / cTez LP': {
    image: ctezLpFarm,
    harvestImg: plentyToken,
    multi: '100',
    title: 'PLENTY / ctez LP',
    apr: 0,
    apy: '2621',
    earn: 'PLENTY',
    fee: '0%',
    earned: 0,
    deposit: 'PLENTY / ctez LP',
    liquidity: '5000',
    withdrawalFee: '0%',
    balance: 0,
    userBalance: 0,
    URL: '',
    active: true,
    source: 'Plenty LP',
    rewards: '1000 PLENTY / DAY',
  },
};
