import { createGlobalStyle } from 'styled-components'

export const PlanModalGlobalStyles = createGlobalStyle`

    .ant-modal-content {
        width: 800px;

        .thumb .ant-image {
            width: 100%;
            height: 100%;
            max-height: 100%;
        }
    }

    @media (max-width: 768px) {
        .ant-modal-content {
            width: 100%;
        }
    }
`

export default PlanModalGlobalStyles
