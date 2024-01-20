import { bscTokens } from '@mixmarvelswap/tokens'

import { StableSwapPool } from './types'

export const pools: StableSwapPool[] = [
  {
    lpSymbol: 'HAY-BUSD LP',
    lpAddress: '0xB6040A9F294477dDAdf5543a24E5463B8F2423Ae',
    token: bscTokens.hay,
    quoteToken: bscTokens.busd,
    stableSwapAddress: '0x49079D07ef47449aF808A4f36c2a8dEC975594eC',
    infoStableSwapAddress: '0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6',
    stableLpFee: 0.0002,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    lpSymbol: 'USDT-BUSD LP',
    lpAddress: '0x36842F8fb99D55477C0Da638aF5ceb6bBf86aA98',
    token: bscTokens.usdt,
    quoteToken: bscTokens.busd,
    stableSwapAddress: '0x169F653A54ACD441aB34B73dA9946e2C451787EF',
    infoStableSwapAddress: '0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6',
    stableLpFee: 0.00005,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    lpSymbol: 'USDC-BUSD LP',
    lpAddress: '0x1A77C359D0019cD8F4d36b7CDf5a88043D801072',
    token: bscTokens.usdc,
    quoteToken: bscTokens.busd,
    stableSwapAddress: '0xc2F5B9a3d9138ab2B74d581fC11346219eBf43Fe',
    infoStableSwapAddress: '0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6',
    stableLpFee: 0.00005,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    lpSymbol: 'USDT-USDC LP',
    lpAddress: '0xee1bcc9F1692E81A281b3a302a4b67890BA4be76',
    token: bscTokens.usdt,
    quoteToken: bscTokens.usdc,
    stableSwapAddress: '0x3EFebC418efB585248A0D2140cfb87aFcc2C63DD',
    infoStableSwapAddress: '0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6',
    stableLpFee: 0.00005,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    lpSymbol: 'axlUSDC-USDT LP',
    lpAddress: '0x1c7e5a3A72b6D94DE5Ec20812E3e68713978a584',
    token: bscTokens.axlusdc,
    quoteToken: bscTokens.usdt,
    stableSwapAddress: '0x6D8fba276ec6F1EDa2344DA48565AdbCA7e4FFa5',
    infoStableSwapAddress: '0x150c8AbEB487137acCC541925408e73b92F39A50',
    stableLpFee: 0.0002,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    lpSymbol: 'WBNB-stkBNB LP',
    lpAddress: '0x9976f5c8BEfDee650226d5571d5F5551e8722b75',
    token: bscTokens.wbnb,
    quoteToken: bscTokens.stkbnb,
    stableSwapAddress: '0x0b03e3d6Ec0c5e5bBf993dED8D947C6fb6eEc18D',
    infoStableSwapAddress: '0x150c8AbEB487137acCC541925408e73b92F39A50',
    stableLpFee: 0.0002,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    lpSymbol: 'BNBx-BNB LP',
    lpAddress: '0x92357Ab9003CA881E08e32CDAE59B10B3161b05C',
    token: bscTokens.bnbx,
    quoteToken: bscTokens.wbnb,
    stableSwapAddress: '0x9c138bE1D76ee4C5162E0fe9D4eEA5542a23D1bD',
    infoStableSwapAddress: '0x150c8AbEB487137acCC541925408e73b92F39A50',
    stableLpFee: 0.0002,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    lpSymbol: 'HAY-USDT LP',
    lpAddress: '0xB2Aa63f363196caba3154D4187949283F085a488',
    token: bscTokens.hay,
    quoteToken: bscTokens.usdt,
    stableSwapAddress: '0xb1Da7D2C257c5700612BdE35C8d7187dc80d79f1',
    infoStableSwapAddress: '0x150c8AbEB487137acCC541925408e73b92F39A50',
    stableLpFee: 0.0004,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    lpSymbol: 'CAKE-sdCAKE LP',
    lpAddress: '0xB1D54d76E2cB9425Ec9c018538cc531440b55dbB',
    token: bscTokens.cake,
    quoteToken: bscTokens.sdcake,
    stableSwapAddress: '0xb8204D31379A9B317CD61C833406C972F58ecCbC',
    infoStableSwapAddress: '0x150c8AbEB487137acCC541925408e73b92F39A50',
    stableLpFee: 0.001,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    lpSymbol: 'CAKE-mCAKE LP',
    lpAddress: '0xb9dC6396AcFFD24E0f69Dfd3231fDaeB31514D02',
    token: bscTokens.cake,
    quoteToken: bscTokens.mcake,
    stableSwapAddress: '0xc54d35a8Cfd9f6dAe50945Df27A91C9911A03ab1',
    infoStableSwapAddress: '0x150c8AbEB487137acCC541925408e73b92F39A50',
    stableLpFee: 0.005,
    stableLpFeeRateOfTotalFee: 0.5,
  },
]
