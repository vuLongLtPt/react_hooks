import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination : PropTypes.object.isRequired,
    onPageChange : PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange : null,
}

function Pagination(props) {
    const { pagination , onPageChange } = props;
    const { _limit , _page , _totalRows } = pagination;
    const maxPage = Math.ceil( _totalRows / _limit);

    function handlePageChange(newPage){
        if(onPageChange){
            onPageChange(newPage);
        }
    }

    return (
        <div>
            <button
                disabled={ _page === 1}
                onClick={ () => handlePageChange( _page - 1 )}
            >
                Prev
            </button>
            <button
                disabled={ _page === maxPage}
                onClick={ () => handlePageChange( _page + 1 )}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;