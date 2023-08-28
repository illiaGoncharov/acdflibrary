// import styles from "./EventPage.module.css";
import { useParams } from 'react-router-dom';

function EventPage() {
    const { eventId } = useParams();
    let content;
    if (eventId === 'ceremony') {
        const Ceremony = require('../../components/Events/Ceremony/Ceremony').default; // Импорт модуля
        content = <Ceremony />;
    } else if (eventId === 'childhood') {
        const Childhood = require('../../components/Events/Childhood/Childhood').default; // Импорт модуля
        content = <Childhood />;
    } else {
        content = <>404</>;
    }

    return (
        <>
            {content}
        </>
    );
};

export default EventPage;