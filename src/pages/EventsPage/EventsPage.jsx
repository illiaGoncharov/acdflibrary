import styles  from "./EventsPage.module.css";
import Events from "../../components/Events/Events";

const EventsPage = () => {
    return (
        <>
            <div className={styles.events_page}>
                <Events customStyles={styles}/>
            </div>
        </>
    );
};

export default EventsPage;