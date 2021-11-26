/** @format */
import React from 'react'
import {Card} from 'antd'
import { observer, Provider, useLocalObservable } from 'mobx-react';
import Casual from './component/Casual';

const Apps = (): React.ReactElement => {
  const storeContext = useLocalObservable(() => ({
    count: 1,
    get double() {return this.count * 2;},
    increase() {this.count += 1;},
    decrease() {this.count -= 1;},
  }));
  return (
    <Provider>
      <Casual store={storeContext}/>
    </Provider>);
}

export default observer(Apps)
