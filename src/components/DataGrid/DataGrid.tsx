export interface DataGridColumn<T> {
  key: keyof T;
  title: string;
}

export interface DataGridProps<T> {
  className?: string;
  rows: T[];
  columns: DataGridColumn<T>[];
}

export const DataGrid = <T extends unknown>(props: DataGridProps<T>) => {
  const { className, rows, columns } = props;

  return (
    <div className={className}>
      <table data-testid='data-grid-table'>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (<tr key={idx}>
            {columns.map((col) => (
              <td key={String(col.key)}>
                {row[col.key]}
              </td>
            ))}
          </tr>))}
        </tbody>
      </table>
    </div>
  );
};
