import React from 'react';
import {Search} from '@site/src/components/Molecules/Search';
import { Dropdown } from '@site/src/components/Atoms/Dropdown';
import { Board } from '@site/src/components/Atoms/Board';
import styles from './styles.module.css';
import { Spacer } from '@site/src/components/Atoms/Spacer';
import {REGIONS} from "@site/src/constants/regions";
import { STANDARD_REGIONS_API_KEYS } from '@site/src/Api/types';
import { covertRegionValue2Label } from './utils';
import { IBan } from '@site/src/components/Molecules/IBan';
import { POOL_NAME_ENUM } from '@site/src/enums/poolName.enum';

interface IHeader {
    defaultRegion?: STANDARD_REGIONS_API_KEYS
    onSearch?: (searchQuery:string) => void
    children?:React.ReactNode
    iban?:string
    isLoading?: boolean
    boardItems?:Array<{
        desc: string
        value: string
        prefix: string
        suffix: string
    }>
    onChangeRegion?: (id:unknown) => void
    pageTitleComponent?: React.ReactNode
    layout?:{
        search:boolean,
        dropdown:boolean,
        boards:boolean
    }
}

const Header = ({onSearch, boardItems, onChangeRegion, defaultRegion, iban, children, isLoading=false,
    pageTitleComponent,layout = {boards:true, dropdown:true, search:true,}}:IHeader) => {
    
    return(
        <>
            <Spacer variant='xl' />
            {pageTitleComponent}
            {layout.search && (
                <>
                <Spacer variant='xl' />
                    <div className='col col--12'>
                        <Search onSearch={onSearch} />
                    </div>
                </>
            )}
            {layout.dropdown && (
            <>
            <Spacer variant='xl' />
                <div className='col col--12'>
                    <Dropdown isLoading={isLoading} defaultValue={covertRegionValue2Label(defaultRegion)} className={styles.boardDropdown}
                    items={
                            [
                                {label:REGIONS.EU.label, value:POOL_NAME_ENUM.EU}, 
                                {label:REGIONS.EU_BACKUP.label, value:POOL_NAME_ENUM.EU_BACKUP},
                                {label:REGIONS.AS.label, value:POOL_NAME_ENUM.AS},
                                {label:REGIONS.AS_BACKUP.label, value:POOL_NAME_ENUM.AS_BACKUP},
                                {label:REGIONS.US.label, value:POOL_NAME_ENUM.US},
                                {label:REGIONS.US_BACKUP.label, value:POOL_NAME_ENUM.US_BACKUP},
                            ]
                    } 
                    onChange={onChangeRegion} />
                </div>
            </>
            )}
            <Spacer variant='xl' />
            {iban && <IBan iBan={iban} />}
            {layout.boards && (
                <>
                <Spacer variant='lg' />
                    <div className={styles.boardRoot}>
                        {
                            boardItems?.map((boardItem, index) => 
                                <Board isLoading={isLoading} key={index} description={boardItem.desc} value={boardItem.value}
                                suffix={boardItem.suffix} prefix={boardItem.prefix} />
                            )
                        }
                    </div>
                </>
                )}
            {children}
            <Spacer variant='md' />
        </>
    )
}

export default Header;