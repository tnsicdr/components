import { render, screen } from '@testing-library/react';
import { DataGrid, DataGridColumn } from './DataGrid';

interface Car {
  make: string;
  year: string;
}

const carCols: DataGridColumn<Car>[] = [
  {
    key: 'make',
    title: 'Make',
  },
  {
    key: 'year',
    title: 'Year',
  },
];

const carRows = [
  {
    make: 'Toyota',
    year: '2020',
  },
];

describe(`<DataGrid />`, () => {
  it('should render', () => {
    render(<DataGrid columns={carCols} rows={carRows} />);
  });

  expect(screen.queryByTestId('data-grid-table')).toBeTruthy();
});
