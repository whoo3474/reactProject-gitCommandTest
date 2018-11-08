// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, {Component} from 'react';
import Todos from 'components/Todos';

class TodosContainer extends Component {
  render() {
    return (
      <Todos />
    );
  }
}

export default TodosContainer;
