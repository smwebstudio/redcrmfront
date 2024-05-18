import { Button, Modal, Upload } from 'antd'
import { useState } from 'react'
import { useTranslation } from '@/app/i18n/client'

const getBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file
        if (status !== 'uploading') {
            console.log(info.file, info.fileList)
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`)
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files)
    },
}

const UploadBlock = () => {
    const { t } = useTranslation('common')
    const [previewOpen, setPreviewOpen] = useState(false)
    const [previewImage, setPreviewImage] = useState('')
    const [previewTitle, setPreviewTitle] = useState('')
    const [fileList, setFileList] = useState([])
    const handleCancel = () => setPreviewOpen(false)
    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj)
        }
        setPreviewImage(file.url || file.preview)
        setPreviewOpen(true)
        setPreviewTitle(
            file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        )
    }
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList)
    const uploadButton = (
        <div>
            <svg
                width="42"
                height="35"
                viewBox="0 0 42 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_389_2751)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 9.03556C0 8.50714 0.209943 8.00037 0.583592 7.62672C0.957241 7.25307 1.46399 7.04315 1.99241 7.04315H31.9516C32.4801 7.04315 32.9868 7.25307 33.3605 7.62672C33.7341 8.00037 33.944 8.50714 33.944 9.03556V33.0043C33.944 33.5327 33.7341 34.0395 33.3605 34.4131C32.9868 34.7868 32.4801 34.9967 31.9516 34.9967H1.99906C1.47064 34.9967 0.963849 34.7868 0.590199 34.4131C0.21655 34.0395 0.00664785 33.5327 0.00664785 33.0043L0 9.03556ZM31.955 9.03556H1.99906V27.0104L7.69736 22.7367C8.0816 22.4475 8.55747 22.307 9.03718 22.3412C9.5169 22.3753 9.96806 22.5819 10.3074 22.9227L13.0569 25.6722L21.7239 18.7419C22.0778 18.4573 22.5184 18.3022 22.9725 18.3022C23.4266 18.3022 23.8672 18.4573 24.2211 18.7419L31.9583 24.935L31.955 9.03556ZM1.99906 33.0043V29.5076L8.89612 24.334L11.6457 27.0868C11.9926 27.4342 12.4557 27.6413 12.946 27.6682C13.4362 27.6952 13.9192 27.5402 14.3022 27.2329L22.9659 20.3026L31.955 27.4919V33.0043H1.99906ZM7.97629 15.0294C7.97629 14.6353 8.09315 14.2501 8.31208 13.9225C8.53101 13.5948 8.84219 13.3394 9.20626 13.1886C9.57032 13.0378 9.9709 12.9984 10.3574 13.0753C10.7439 13.1521 11.0989 13.3419 11.3776 13.6206C11.6562 13.8992 11.846 14.2542 11.9228 14.6407C11.9997 15.0272 11.9603 15.4278 11.8095 15.7919C11.6587 16.1559 11.4033 16.4671 11.0756 16.686C10.748 16.905 10.3628 17.0218 9.96869 17.0218C9.44258 17.0183 8.93921 16.8068 8.56843 16.4336C8.19765 16.0603 7.98957 15.5555 7.98958 15.0294H7.97629ZM9.96869 11.0446C9.18057 11.0446 8.41014 11.2783 7.75484 11.7161C7.09954 12.154 6.58881 12.7763 6.2872 13.5045C5.9856 14.2326 5.90669 15.0338 6.06045 15.8068C6.2142 16.5798 6.59373 17.2898 7.15102 17.8471C7.70831 18.4044 8.41832 18.7839 9.1913 18.9377C9.96428 19.0914 10.7655 19.0125 11.4936 18.7109C12.2218 18.4093 12.8441 17.8985 13.282 17.2432C13.7198 16.5879 13.9535 15.8175 13.9535 15.0294C13.9562 13.9743 13.5402 12.9612 12.797 12.2123C12.0537 11.4634 11.0437 11.0399 9.98864 11.0346L9.96869 11.0446Z"
                        fill="#959595"
                    />
                    <path
                        d="M39.9444 -0.00994585H9.9885C9.46008 -0.00994585 8.95329 0.199967 8.57965 0.573616C8.206 0.947265 7.99609 1.45404 7.99609 1.98246V2.70306C7.99609 2.96727 8.10104 3.22065 8.28787 3.40748C8.47469 3.5943 8.72809 3.69925 8.9923 3.69925C9.25651 3.69925 9.5099 3.5943 9.69673 3.40748C9.88355 3.22065 9.9885 2.96727 9.9885 2.70306V1.98246H39.9477V25.9478H38.2873C38.0231 25.9478 37.7698 26.0528 37.583 26.2396C37.3961 26.4264 37.2911 26.6798 37.2911 26.944C37.2911 27.2082 37.3961 27.4616 37.583 27.6485C37.7698 27.8353 38.0231 27.9402 38.2873 27.9402H39.9477C40.4761 27.9402 40.9829 27.7303 41.3565 27.3567C41.7302 26.983 41.9401 26.4762 41.9401 25.9478V1.99906C41.9423 1.73574 41.8923 1.47461 41.7929 1.23074C41.6936 0.986872 41.5469 0.765116 41.3613 0.578298C41.1757 0.391479 40.9549 0.243295 40.7117 0.142326C40.4685 0.0413581 40.2077 -0.0103939 39.9444 -0.00994585Z"
                        fill="#959595"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_389_2751">
                        <rect width="41.9402" height="35" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <div
                style={{
                    marginTop: 8,
                }}>
                <Button danger type={'danger'}>
                    {t('label.uploadImage')}
                </Button>
            </div>
        </div>
    )

    const uploadButtonAdded = (
        <div>
            <div
                style={{
                    marginTop: 8,
                }}>
                <Button danger type={'danger'}>
                    Ավելացնել նկարներ
                </Button>
            </div>
        </div>
    )

    return (
        <>
            <Upload
                {...props}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}>
                {fileList.length >= 1 ? uploadButtonAdded : uploadButton}
            </Upload>
            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal>
        </>
    )
}
export default UploadBlock
