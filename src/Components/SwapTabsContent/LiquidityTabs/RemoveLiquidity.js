import { useState } from 'react';
import { computeRemoveTokens, removeLiquidity } from '../../../apis/swap/swap';

const RemoveLiquidity = (props) => {
  const [removableTokens, setRemovableTokens] = useState({});

  const removeLiquidityInput = (input) => {
    props.setFirstTokenAmount(input);
    let lpToken = props.swapData.lpToken;
    let lpTokenBalance = props.userBalances[lpToken];
    let removeAmount = (input * lpTokenBalance) / 100;

    let computedRemoveTokens = computeRemoveTokens(
      removeAmount,
      props.swapData.lpTokenSupply,
      props.swapData.tokenIn_supply,
      props.swapData.tokenOut_supply,
      props.slippage
    );
    computedRemoveTokens = {
      ...computedRemoveTokens,
      removeAmount: removeAmount,
    };
    setRemovableTokens(computedRemoveTokens);
  };

  const handleRemoveLiquidity = () => {
    props.setLoading(true);
    removeLiquidity(
      props.tokenIn.name,
      props.tokenOut.name,
      removableTokens.tokenFirst_Out,
      removableTokens.tokenSecond_Out,
      removableTokens.removeAmount,
      props.walletAddress
    ).then((data) => {
      if (data.success) {
        props.setLoading(false);
        props.handleLoaderMessage('success', 'Transaction confirmed');
      } else {
        props.setLoading(false);
        props.handleLoaderMessage('error', 'Transaction failed');
      }
    });
  };
  let swapContentButton = (
    <button className="swap-content-btn" onClick={props.connecthWallet}>
      <span className="material-icons-outlined">add</span> Connect Wallet
    </button>
  );

  if (props.walletAddress) {
    swapContentButton = (
      <button className="swap-content-btn enter-amount">Enter an amount</button>
    );
  }
  if (props.walletAddress && props.firstTokenAmount) {
    swapContentButton = (
      <button className="swap-content-btn" onClick={handleRemoveLiquidity}>
        Confirm Withdrawal
      </button>
    );
  }
  return (
    <>
      <div className="swap-content-box">
        <div className="swap-token-select-box" style={{ position: 'relative' }}>
          <div className="token-selector-balance-wrapper">
            <p className="remove-liquidity-token-info">Amount to remove</p>
          </div>

          <div className="token-user-input-wrapper">
            <input
              type="text"
              className="token-user-input"
              placeholder="0.00"
              onChange={(e) => removeLiquidityInput(parseFloat(e.target.value))}
              style={{ paddingRight: '14px' }}
            />
            <div className="percentage-icon" style={{ top: '11px' }}>
              %
            </div>
          </div>
          {props.walletConnected ? (
            <div className="flex justify-between" style={{ flex: '0 0 100%' }}>
              <p className="wallet-token-balance">Balance: 0 Plenty</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="swap-arrow-center">
        <span className="material-icons-outlined">south</span>
      </div>

      <div className="swap-content-box">
        <div className="swap-token-select-box">
          <div className="token-selector-balance-wrapper">
            <p className="remove-liquidity-token-info">You will recieve</p>
          </div>

          <div className="token-user-input-wrapper remove-liquidity-pair-wrapper flex">
            <button className="token-selector">
              <img src={props.tokenIn.image} className="button-logo" />
              {removableTokens.tokenFirst_Out
                ? parseFloat(
                    parseInt(removableTokens.tokenFirst_Out * 100) / 100
                  )
                : '0.00'}
              <span className="remove-liquidity-token-name">
                {props.tokenIn.name}
              </span>
            </button>

            <button className="token-selector">
              <img src={props.tokenOut.image} className="button-logo" />
              {removableTokens.tokenSecond_Out
                ? parseFloat(
                    parseInt(removableTokens.tokenSecond_Out * 100) / 100
                  )
                : '0.00'}
              <span className="remove-liquidity-token-name">
                {props.tokenOut.name}
              </span>
            </button>
          </div>
          {props.walletConnected ? (
            <div className="flex justify-between" style={{ flex: '0 0 100%' }}>
              <p className="wallet-token-balance">Balance: 0 Kalam</p>
            </div>
          ) : null}
        </div>
      </div>
      {swapContentButton}
    </>
  );
};

export default RemoveLiquidity;
