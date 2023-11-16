import React, { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import LanguageDropdown from "./languageDropdown";

interface ConfigModalProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const ConfigModal = (props: ConfigModalProps) => {
    useEffect(() => {
        //@ts-ignore
        if (!navigator.gpu) {
            props.setIsModalOpen(true);
            return;
        }
    }, []);

    const [selected, setSelected] = useState("");

    const handleModalClose = () => {
        props.setIsModalOpen(false);
    };

    const closeIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="50"
            height="50"
            viewBox="0 0 78 97.5"
            fill="currentColor"
        >
            <g>
                <rect x="54" y="54" width="6" height="6" />
                <rect x="36" y="36" width="6" height="6" />
                <rect x="30" y="42" width="6" height="6" />
                <rect x="24" y="48" width="6" height="6" />
                <rect x="18" y="54" width="6" height="6" />
                <rect x="42" y="30" width="6" height="6" />
                <rect x="48" y="24" width="6" height="6" />
                <rect x="54" y="18" width="6" height="6" />
                <rect x="42" y="42" width="6" height="6" />
                <rect x="48" y="48" width="6" height="6" />
                <rect x="30" y="30" width="6" height="6" />
                <rect x="18" y="18" width="6" height="6" />
                <rect x="24" y="24" width="6" height="6" />
            </g>
        </svg>
    );

    return (
        <>
            <Modal
                classNames={{
                    modal: "!bg-pop-orange !outline h-3/4 w-3/4 md:w-3/4 xl:w-1/2 2xl:w-1/3 overflow-x-hidden !text-white",
                }}
                open={props.isModalOpen}
                onClose={handleModalClose}
                center
                closeIcon={closeIcon}
            >
                <div
                    className="flex flex-col text-2xl h-full text-center"
                    style={{
                        fontFamily: "__VT323_2a9463",
                    }}
                >
                    <div className="flex flex-col p-8 mx-auto w-full">
                        <LanguageDropdown />
                    </div>
                </div>
            </Modal>
            )
        </>
    );
};

export default ConfigModal;
