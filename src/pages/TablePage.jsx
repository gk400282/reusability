import SortableTable from "../components/SortableTable";
import Table from "../components/Table";

function TablePage() {
    const data = [
        { name: "Orange", color: "bg-orange-500", score: 2, food: "No" },
        { name: "Apple", color: "bg-red-500", score: 3, food: "Yes" },
        { name: "Banana", color: "bg-yellow-500", score: 4, food: "Yes" },
        { name: "Pear", color: "bg-green-500", score: 1, food: "No" },
    ]

    const config = [
        {
            label: "Fruits",
            render: (o) => o.name,
            sortValue: (o) => o.name,
        },
        {
            label: "Size",
            render: (o) => o.name.length,
            sortValue: (o) => o.name.length,
        },
        {
            label: "Color",
            render: (o) => <div className={`p-3 m-2 ${o.color}`}></div>,
        },
        {
            label: "Score",
            render: (o) => o.score,
            sortValue: (o) => o.score,
        },
        {
            label: "Score^2",
            render: (o) => o.score ** 2,
            sortValue: (o) => o.score ** 2,
        },
        {
            label: "Edible",
            render: (o) => o.food,
            sortValue: (o) => o.food,
        }
    ];

    const keyFunction = (o) => {
        return o.name;
    }
    return (
        <div>
            <Table data={data} config={config} keyFunction={keyFunction}/>
            <SortableTable data={data} config={config} keyFunction={keyFunction}/>
        </div>
    );
}

export default TablePage;