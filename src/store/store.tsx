/** @format */

import {observer, Provider, useLocalObservable} from 'mobx-react'
import React from 'react'
import Casual from '../component/Casual'
const Parent = () => {
  //  也可以使用mobx创建一个store
  const storeContext = useLocalObservable(() => ({
    count: 1,
    get double() {
      return this.count * 2
    },
    increase() {
      this.count += 1
    },
    decrease() {
      this.count -= 1
    },
  }))
  return (
    <Provider store={storeContext}>
      <Casual store={storeContext} />
    </Provider>
  )
}
export default observer(Parent)
