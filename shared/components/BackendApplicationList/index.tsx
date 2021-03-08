import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import Link from 'next/link'
import { color } from '../../constant';

const BackendApplicationList = () => {
    const { backendFacetNames } = useContext(AppContext);

    return <>
        <ul>
            {backendFacetNames?.map(backendFacet => {
                return <li key={backendFacet}>
                    <Link href={`backend/${backendFacet}`}>
                        <a style={{ color: color.white }}>{backendFacet}</a>
                    </Link>
                </li>
            })}
        </ul>
    </>
}

export default BackendApplicationList;