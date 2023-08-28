import styles from "./EventPage.module.css";

const EventPage = ({customClass, children}) => {
    return (
        <>
            <div className={customClass}>
                {children}
            </div>
        </>
    );
};

export default EventPage;