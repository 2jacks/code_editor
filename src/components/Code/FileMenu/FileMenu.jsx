import React, {useState, useEffect, useMemo} from 'react';
import styles from './FileMenu.module.css'

import {Menu} from 'antd'

export function FileMenu({filenames, selectedFile, onSelect}) {
   const menuItems = useMemo(() => filenames.map(fn => ({label: fn, key: fn})), [filenames])

   return (
     <div className={styles['menu']}>
        <Menu style={{height: '100%'}} items={menuItems} selectedKeys={[selectedFile]} onSelect={onSelect}/>
     </div>

)
}
