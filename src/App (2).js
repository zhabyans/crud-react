import './App.css';
import React, { useState } from 'react';
import JumbotronComponent from './components/JumbotronComponent';
import NavbarComponent from './components/NavbarComponent';
import TableComponent from './components/TableComponent';

function App() {
  const title = useState('CRUD With React JS');
  const users = useState(
    {
      id: 1,
      nama: 'budi',
      alamat: 'Bali',
      umur: 21,
      nphp: '082143387387'
    },
    {
      id: 2,
      nama: 'ani',
      alamat: 'Lumajang',
      umur: 30,
      nphp: '082467887387'
    },
    {
      id: 3,
      nama: 'caca',
      alamat: 'Surabaya',
      umur: 23,
      nphp: '081789787387'
    },
  )

  return (
    <div>
      <NavbarComponent />
      <JumbotronComponent title={title} />
      <TableComponent users={users} />
    </div>
  );
}

export default App;
