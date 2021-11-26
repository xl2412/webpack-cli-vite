import React from 'react';
import { inject, observer } from 'mobx-react';

// @ts-ignore
const Casual = ({store}) => {
  return (
    <> count:{store?.count}|double:{store?.double}
    <button onClick={() => store.increase()}>increase</button>
    <button onClick={() => store.decrease()}>decrease</button>
  </>);
};
export default inject('store')(observer(Casual));