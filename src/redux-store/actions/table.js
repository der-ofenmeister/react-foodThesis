import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchDataRequest = () => {
    return {
        type: actionTypes.FETCH_DATA_REQUEST
    };
};
export const fetchDataSuccess = (results, columnHeaders) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        results,
        columnHeaders
    };
};
export const fetchDataFail = error => {
    return {
        type: actionTypes.FETCH_DATA_FAIL,
        error: error
    };
};

export const fetchData = () => async dispatch => {
    dispatch(fetchDataRequest())
    try {
        const { data } = await axios.get('https://www.flymine.org/flymine/service/query/results?query=%3Cquery+name%3D%22%22+model%3D%22genomic%22+view%3D%22Gene.description+Gene.length+Gene.name+Gene.primaryIdentifier+Gene.symbol%22+longDescription%3D%22%22+sortOrder%3D%22Gene.description+asc%22%3E%3Cconstraint+path%3D%22Gene%22+op%3D%22IN%22+value%3D%22PL+FlyTF_PWM_TFs%22%2F%3E%3C%2Fquery%3E&format=json&key=F1y7k0Pf68c9y6Xaick3')
        const columns = data.views.map(col => ({
            title: col,
            dataIndex: col,
            key: col,
            sorter:true,
            
        }))

        const rows = data.results.map((res, i) => ({
            
            key: i,
            ...columns.reduce(
                (acc, cur, i) => ({
                    ...acc,
                    [cur.dataIndex]: res[i],
                    }),
                {},
            ),
        }
        ))
        
        dispatch(fetchDataSuccess(rows, columns))
    } catch (error) {
        dispatch(fetchDataFail(error.message))
    }
}

