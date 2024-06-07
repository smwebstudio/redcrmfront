import styled from 'styled-components'
import { Tabs } from 'antd'
import React from 'react'

const StyledAppTabs = styled(Tabs)`
    border-bottom: 0px solid #eee !important;

    .ant-tabs-top > .ant-tabs-nav::before,
    .ant-tabs-bottom > .ant-tabs-nav::before,
    .ant-tabs-top > div > .ant-tabs-nav::before,
    .ant-tabs-bottom > div > .ant-tabs-nav::before {
        border-bottom: 0px solid #f0f0f0 !important;
    }

    .ant-tabs-tab {
        margin: 0 0 0 0px !important;
        padding: 4px 24px;
    }

    .ant-tabs-tab-active {
        border-bottom: 5px solid var(--main-color-one) !important;
    }

    .ant-tabs-tab-btn {
        padding-bottom: 7px !important;
        color: var(--dark-color);
    }
`

export default StyledAppTabs
