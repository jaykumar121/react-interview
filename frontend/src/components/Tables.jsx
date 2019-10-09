import React from "react";

export const Table = ({ data: { header, body } }) => {
  return (
    <table className="table table-bordered table-hover table-striped table-responsive table-condensed">
      <thead>
        <tr>
          {header.map((h, i) => {
            return <th key={i}>{h}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {body.map((b, i) => {
          return (
            <tr key={i}>
              {b.map((d, j) => {
                return <td key={j}>{d}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
