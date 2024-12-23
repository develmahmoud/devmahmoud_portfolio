import React from "react";
import Table from "./Table";
interface Achievement {
    id: number;
    name: string;
    institution: string;
    year: string;
}

const achievementsData: Achievement[] = [
    { id: 1, name: 'Best Graduating Student', institution: 'Department of Software Engineering', year: '2024' },
    { id: 2, name: 'Best Graduating Student', institution: 'Faculty of Computing', year: '2024' },
    { id: 3, name: 'Second Best Graduating Student', institution: 'Federal University Dutse', year: '2024' },
    { id: 4, name: 'VC Award List', institution: 'Federal University Dutse', year: '2019-2024' },
    { id: 5, name: 'NNPC-Chevron Scholarship Award', institution: 'NNPC/Chevron', year: '2020-2023' },
    { id: 6, name: 'Kano State Government Indigenous Scholarship', institution: 'Kano State Government', year: '2020' },
];
const columns = [
    {header: 'ID', accessor: 'id'},
    { header: 'Name', accessor: 'name' },
    { header: 'Institution', accessor: 'inst' },
    { header: 'Date Year', accessor: 'year' }
];
const Achievements: React.FC = () => {
    return (
        <div className="p-4">
            <div className="overflow-x-auto">
                <Table columns={columns} data={achievementsData} />
                
            </div>
        </div>
    );
};

export default Achievements;
