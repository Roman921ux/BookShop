import React, { useState } from 'react'
// ui
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'; FormControlLabel
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Header() {

  const [open, setOpen] = useState(false)
  return (
    <div className="header flex justify-between items-center">
      <img src="Logo.svg" alt="" />
      <div className="flex gap-[0.2rem]">
        {/* <FormControlLabel control={<Switch defaultChecked />} /> */}
        {open && <Link to={`/`}><Button onClick={() => setOpen(prev => prev = false)} variant="contained">Назад</Button></Link>}
        <Link to={`/basket`}><Button onClick={() => setOpen(prev => prev = true)} variant="contained">Корзина</Button></Link>
      </div>

    </div>
  )
}

export default Header