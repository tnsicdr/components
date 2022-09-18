import { Meta } from '@storybook/react';
import { DataGrid, DataGridColumn } from './DataGrid';

export default {
  title: 'components/DataGrid',
  component: DataGrid,
} as Meta;

interface Car {
  make: string;
  year: string;
}

const carCols: DataGridColumn<Car>[] = [
  {
    key: 'make',
    title: 'Make'
  },
  {
    key: 'year',
    title: 'Year'
  }
]

const carRows = [
  {
    make: 'Toyota',
    year: '2020'
  }
];

export const Primary = () => {
  return (
    <DataGrid<Car> columns={carCols} rows={carRows} />
  );
}