import React from 'react';
import { MetaplexModal, WRAPPED_SOL_MINT } from '@oyster/common';
import { AmountLabel } from "../AmountLabel";
import { useTokenList } from "../../contexts/tokenList";
import { Button } from "antd";

export const FundsIssueModal = (props: {
  message: string,
  isModalVisible: boolean,
  minimumFunds: any,
  currentFunds: any,
  onClose: () => void
}) => {
  const {currentFunds: balance, minimumFunds, message} = props
  const tokenInfo = useTokenList().mainnetTokens.filter(m=>m.address == WRAPPED_SOL_MINT.toBase58())[0]
  // asset prefix
  const {ASSET_PREFIX} = process.env;
  return (
      <MetaplexModal
        title={"Transaction Alert"}
        visible={props.isModalVisible}
        footer={null}
        onCancel={props.onClose}
        className={"fundsissue"}
        closeIcon={<img src={ASSET_PREFIX +'/modals/close.svg'} />}
      >
        <b className={"issue-title"}>Insufficient funds</b>
        <div className="card-bid-info">
          <AmountLabel
            containerStyle={{ flexDirection: 'row' }}
            title={"Your Balance"}
            displaySymbol={"SOL"}
            amount={balance}
            iconSize={24}
            tokenInfo={tokenInfo}
          />
        </div>
        <hr/>
        <div className="card-bid-info">
          <AmountLabel
            containerStyle={{ flexDirection: 'row' }}
            title={message}
            displaySymbol={"SOL"}
            amount={minimumFunds}
            iconSize={24}
            tokenInfo={tokenInfo}
          />
        </div>
        <hr/>
        <span className={"issue-desc"}>Deposit the minimum amount of SOL and try again.</span>
        <Button className={"secondary-btn width-100"} onClick={props.onClose}>
          Dismiss
        </Button>
      </MetaplexModal>
  );
};
