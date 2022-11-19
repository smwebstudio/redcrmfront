import { Button, Select } from "antd";
import React from "react";
import SelectFilter from "@/components/Filters/select-filter";

function EstateEstimate(props) {
    return (

        <div className="container">
            <div className="estate-estimate d-flex flex-column justify-content-center pl-4">
                <div className="row mb-3 mt-5">
                    <div className="col-4">
                        <h5 className="text-white">Բնակարանի գնահատման հաշվիչ</h5>
                        <p className="small text-white">Այս հաշվիչը, հնարավորություն է տալիս որոշել Ձեր բնակարանի վաճառքի շուկայական գինը:</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <form className="bg-white d-flex p-3 mt-5 text-gray-50">
                            <div className="field-item border-right">
                                <small className="pl-2">Համայնք</small>
                                <SelectFilter type="evaluation_locations"/>
                            </div>
                            <div className="field-item border-right">
                                <small className="pl-2">Նախագիծ</small>
                                <SelectFilter type="evaluation_building_projects"/>
                            </div>
                            <div className="field-item border-right">
                                <small className="pl-2">Հարկ</small>
                                <SelectFilter type="evaluation_building_floors"/>
                            </div>
                            <div className="field-item pr-2 pl-2">
                                <Button
                                className="btn btn-main border-0 h-100 pr-5 pl-5">
                                    Գնահատել
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default EstateEstimate;
