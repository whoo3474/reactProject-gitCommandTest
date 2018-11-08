// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { Component } from 'react';
import Counter from 'components/Counter';

class CounterContainer extends Component {
  render() {
    return (
      <Counter />
    );
  }
}

export default CounterContainer;