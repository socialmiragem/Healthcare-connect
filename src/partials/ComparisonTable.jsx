import React from "react";
import { table_data } from "../assets/data/data";

const ComparisonTable = () => {
    return (
        <div className="comparison-table mt-3">
            <table className="table table-bordered text-center" style={{borderRadius : "10px"}}>
                <thead className="bg-light-blue">
                    <tr className="bg-light-blue">
                        <th className="bg-light-blue border-0"></th>
                        <th className="bg-light-blue text-secondary border-0 text-start fs-32 font_mobile ">Private Healthcare</th>
                        <th className="bg-light-blue text-grey text-start fs-32 font_mobile border-0">Traditional Insurance</th>
                    </tr>
                </thead>
                <tbody>
                    {table_data.map((item, index) => (
                        <tr key={index}>
                            <td className="text-center title_table fs-24 ">{item.feature}</td>
                            <td className="text-start ">
                                <div className="">
                                    {item.privateHealthcare.available ? (
                                        <span className="text-primary">
                                            <span className="me-0 me-md-2 d-md-inline d-block"><img src="/images/check.png" alt="" className="img-fluid" /></span> {item.privateHealthcare.value}
                                        </span>
                                    ) : (
                                        <span className="text-grey">
                                            <span className="me-0 me-md-2 d-md-inline d-block"><img src="/images/cross.png" alt="" className="img-fluid" /></span> {item.privateHealthcare.value}
                                        </span>
                                    )}
                                </div>
                            </td>
                            <td className="text-start">
                                <div className="">
                                    {item.traditionalInsurance.available ? (
                                        <span className="text-primary">
                                            <span className="me-0 me-md-2 d-md-inline d-block"><img src="/images/check.png" alt="" className="img-fluid" /></span> {item.traditionalInsurance.value}
                                        </span>
                                    ) : (
                                        <span className="text-grey">
                                            <span className="me-0 me-md-2 d-md-inline d-block"><img src="/images/cross.png" alt="" className="img-fluid" /></span> {item.traditionalInsurance.value}
                                        </span>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComparisonTable;
