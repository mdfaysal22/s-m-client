import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import People from './People/People';

const Peoples = () => {
    const { data: peoples = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/users')
            return res.data
        }

    })
    return (
        <div>
            {
                peoples.map(people => <People key={people._id} refetch={refetch} people={people}></People>)
            }
        </div>
    );
};

export default Peoples;