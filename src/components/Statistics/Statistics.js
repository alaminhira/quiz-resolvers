import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const { data } = useLoaderData();

    return (
        <div className='lg:w-6/12 md:w-9-12 mx-auto px-8'>
            <ResponsiveContainer width='100%' aspect={3}>
                <BarChart width={750} height={400} data={data}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
