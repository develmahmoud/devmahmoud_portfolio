import React from "react";

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

const Achievements: React.FC = () => {
    return (
        <div className="p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-900 rounded-md shadow-md transition-transform transform ">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr className="text-gray-900 dark:text-white">
                            <th className="px-8 py-4 border-b transition-colors duration-300">ID</th>
                            <th className="px-8 py-4 border-b transition-colors duration-300">Name</th>
                            <th className="px-8 py-4 border-b transition-colors duration-300">Institution</th>
                            <th className="px-8 py-4 border-b transition-colors duration-300">Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {achievementsData.map((data) => (
                            <tr key={data.id} className="text-gray-900 dark:text-white transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                                <td className="px-8 py-4 border-b">{data.id}</td>
                                <td className="px-8 py-4 border-b">{data.name}</td>
                                <td className="px-8 py-4 border-b">{data.institution}</td>
                                <td className="px-8 py-4 border-b">{data.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Achievements;
