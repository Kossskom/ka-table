import React from 'react';
import ReactDOM from 'react-dom';

import EmptyCells, { IEmptyCellsProps } from './EmptyCells';

const props: IEmptyCellsProps = {
  count: 1,
};

it('renders without crashing', () => {
  const element = document.createElement('tr');
  ReactDOM.render(<EmptyCells {...props} />, element);
  ReactDOM.unmountComponentAtNode(element);
});

it('renders without crashing with shouldUseTh', () => {
  const element = document.createElement('tr');
  ReactDOM.render(<EmptyCells {...props} shouldUseTh={true}/>, element);
  ReactDOM.unmountComponentAtNode(element);
});
