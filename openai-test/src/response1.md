我们可以通过以下方式在 React 中创建一个表格。 这只是一个基本示例，根据需要添加或删除定义的属性。

```jsx
import React from 'react';

class TableComponent extends React.Component {
    render() {
        return (
            <table className="tableName">
                <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                    </tr>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default TableComponent;
```

这个 TableComponent 可表示为表格形式的数据，数据硬编码在组件中。 如果您要呈现的数据是动态的，请使用组件的状态或从 props 获得数据。
