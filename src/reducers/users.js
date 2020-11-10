let initialState = {
    users: [
        {
            id: 1,
            nama: 'budis',
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
    ],
    error: false,
    title: 'CRUD With React JS',
}

const users = (state = initialState, action) => {
    return state
}

export default users
