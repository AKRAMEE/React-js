import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';
function HeaderOption({ avatar, Icon, title }) {
    return (
        <div className='headerOption'>
            {Icon && <Icon className="headerOption__Icon" />}
            {avatar && <Avatar className="headerOption__Icon" src={avatar} />}
            <h4 className='headerOption__title'>{title}</h4>

        </div>
    )
}

export default HeaderOption
