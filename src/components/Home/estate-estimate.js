import { Button, Select } from "antd";
import React from "react";
import SelectFilter from "@/components/Filters/select-filter";
import EvaluationForm from "@/components/Filters/evaluation-form";

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
                        <EvaluationForm filtersData={props.filtersData}/>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default EstateEstimate;
