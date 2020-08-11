import React from 'react';
import numeral from 'numeral';
import '../css/Table.css';

function Table({ countries }) {
    return (
        <div className="table">
            {countries.map(({ country, cases }) => (
                <div className="table__row" key={country}>
                    <span>{country}</span>
                    <span>
                        <strong>{numeral(cases).format('0,0')}</strong>
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Table;
