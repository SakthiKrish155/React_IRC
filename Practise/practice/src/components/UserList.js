import React, { useState, useEffect } from 'react'
import { Avatar, ListItem, List, ListItemAvatar, Typography, ListItemText } from '@mui/material'
import { getAllUsers } from '../services/UserApi';
const UserList = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const fetchData = () => getAllUsers()
            .then((res) => setUserList(res.data))
            .catch((error) => console.log(error))
        fetchData();
    }, [])
    return (
        <div>
            <List sx={{ width: '100%', maxwidth: '360', bgcolor: '#1d1d1d', transform: 'translate(-50%,-50%)' }}>
                {
                    userList.map((item) => {
                        <ListItem key={item.id} alignItems='flex-start'>
                            <ListItemAvatar>
                                <Avatar src={item.name} alt={item.name} />
                            </ListItemAvatar>
                            <ListItemText sx={{ display: 'flex', flexDirection: 'column' }}
                                primary={
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        variant='body2'
                                        component='span'
                                        color='#f1f1f1'>
                                        {item.name}
                                    </Typography>
                                }
                                secondary={
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        variant='body2'
                                        component='span'
                                        color='#f1f1f1'>
                                        {item.email}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    })
                }
            </List>
        </div>
    )
}

export default UserList