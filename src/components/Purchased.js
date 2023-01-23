import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Purchased(){

  let history = useHistory();
  function handleClick() {
    history.push("/");
  }

  return(
    <div className="block row center">
      <div className="block-right background-white">
        <div className="block-inside">
          <p>注文が確定されました！</p>
          <p>ご購入ありがとうございます。</p>
          <div className="row-space">
            <p>お届け予定日：</p>
            <p className="text-green">
              2021年7月20日
            </p>
          </div>
        </div>
      </div>
      <div className="right-col">
        <div className="bottom-block">
          <button onClick={handleClick}>ホームに戻る</button>
        </div>
      </div>
    </div>
  );
}