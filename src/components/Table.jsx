import { Fragment } from "react";

function Table({ data, config, keyFunction }) {
    if (data.length === 0)
    {
        return <table></table>
    }

    // Render Header Cells
    const headerCells = config.map((columnConfig) => {
        if (columnConfig.header)
        {
            return <Fragment key={columnConfig.label}>{columnConfig.header()}</Fragment>;
        }
        return <th className="p-2 text-left" key={columnConfig.label}>{columnConfig.label}</th>;
    });

    // Render Rows
    const bodyRows = data.map((row) => {
        // const rowCells = Object.keys(row).map((cell, index) => {
        //     const dataCell = (cell) => {
        //         if (cell === "color")
        //         {
        //             return <div className={`p-3 m-2 ${row[cell]}`}></div>
        //         }
        //         else
        //         {
        //             return row[cell];
        //         }
        //     }
        //     return (
        //     <td className="p-3" key={index}>
        //         {dataCell(cell)}
        //     </td>
        //     );
        // });

        const rowCells = config.map((columnConfig) => {
            let textAlignment = "text-left"
            if (typeof columnConfig.render(row) !== 'string')
            {
                textAlignment = "text-right";
            }
            return (
                <td className={`p-2 border-r ${textAlignment}`} key={columnConfig.label}>
                    {columnConfig.render(row)}
                </td>
            );
        });

        return (
            <tr className="border-t" key={keyFunction(row)}>
                {rowCells}
            </tr>
        );
    });

    // Assemble the table
    return (
    <table className="mb-10">
        <thead>
            <tr>
                {headerCells}
            </tr>
        </thead>
        <tbody>
            {bodyRows}
        </tbody>
    </table>
    );
}

export default Table;