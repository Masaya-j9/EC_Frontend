import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.1;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;


  let history = useHistory();
  function handleClick() {
    history.push("/purchased");
  }

  return (
    <aside className="block col-1">
      <h2>カート内商品</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2 text-margin">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>
            <div className="col-2 text-right">
              {item.qty} x ¥{item.price}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">商品の小計</div>
              <div className="col-1 text-right">¥{itemsPrice}</div>
            </div>
            <div className="row">
              <div className="col-2">消費税</div>
              <div className="col-1 text-right">¥{taxPrice}</div>
            </div>
            <div className="row">
              <div className="col-2">配送料</div>
              <div className="col-1 text-right">
                ¥{shippingPrice}
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>ご請求額</strong>
              </div>
              <div className="col-1 text-right">
                <strong>¥{totalPrice}</strong>
              </div>
            </div>
            <hr />
            <div className="">
              <div className="col-2">
                <strong>クレジットカード</strong>
              </div>
              <div className="row shadow">
                <p>xxxx-xxxx-xxxx-1234</p>
                <p>↓</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <button
                onClick={handleClick}
              >
                ご注文を確定する
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
