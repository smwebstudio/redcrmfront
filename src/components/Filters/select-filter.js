import React, { useEffect, useState } from "react";
import { Select } from "antd";
import axios from "axios";

function SelectFilter(props) {
    const [options, setOptions] = useState([]);
    const type = props.type;
    useEffect(() => {
        const results = [];
        fetch("http://redoc/api/" + type)
            .then(res => res.json())
            .then(response => {
                response.data.forEach((value) => {
                    results.push({
                        key: value.id,
                        value: value.name_arm
                    });
                });

                setOptions([...results]);
            }).catch((e) => {
            console.log(e);
        });
    }, []);

    return (
        <Select
            defaultValue="Ընտրել"
            bordered={false}
            name={"tes"}
            dropdownMatchSelectWidth={300}
            style={{ width: 120 }}
            options={options}
        />
    );
}

export default SelectFilter;
