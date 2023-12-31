import { useState } from "react";
import Table from "./Table";
import { FaArrowsUpDown, FaArrowUp, FaArrowDown } from "react-icons/fa6";

function SortableTable(props) {
    const [ sortOrder, setSortOrder ] = useState(null);
    const [ sortBy, setSortBy ] = useState(null);
    const { config, data } = props;

    const handleHeaderClick = (label) => {
        if (sortBy && label !== sortBy)
        {
            setSortBy(label);
            setSortOrder('asc');
            return;
        }
        setSortOrder((currentOrder) => {
            if (currentOrder === null)
            {
                setSortBy(label);
                return 'asc';
            }
            else if (currentOrder === 'asc')
            {
                setSortBy(label);
                return 'desc';
            }
            else if (currentOrder === 'desc')
            {
                setSortBy(null);
                return null;
            }
            setSortBy(null);
            return null;
        });
    };

    const configWithUpdatedHeader = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
            <th className="p-2 text-left cursor-pointer hover:bg-gray-100 rounded-md" onClick={() => handleHeaderClick(column.label)}>
                <div className="flex flex-row items-center">
                    <div className="mr-0.1">
                        {getIcons(column.label, sortBy, sortOrder)}
                    </div>
                    {column.label}
                </div>
            </th>
            ),
        }
    });

    let sortedData = data;
    if (sortOrder && sortBy) 
    {
        const { sortValue } = config.find((column) => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string')
            {
                return valueA.localeCompare(valueB) * reverseOrder;
            }
            else
            {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }

    return (
        <div>
            <Table {...props} config={configWithUpdatedHeader} data={sortedData}/>
        </div>
    );
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy)
    {
        return <FaArrowsUpDown />;
    }

    if (sortOrder === null)
    {
        return <FaArrowsUpDown />;
    }
    else if (sortOrder === 'asc')
    {
        return <FaArrowUp />;
    }
    else if (sortOrder === 'desc')
    {
        return <FaArrowDown />;
    }
}

export default SortableTable;