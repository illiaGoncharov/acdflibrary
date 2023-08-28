import styles  from "./EventsPage.module.css";
import Events from "../../components/Home/Events/Events";

const EventsPage = () => {
    return (
        <>
            <div className={styles.events_page}>
                <Events />
            </div>
        </>
    );
};

export default EventsPage;