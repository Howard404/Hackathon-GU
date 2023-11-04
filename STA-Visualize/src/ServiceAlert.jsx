import * as d3 from "d3";
import data from "./sta-data/service-alerts.json";

export const ServiceAlert = () => {
    const containerStyle = {
        padding: "2rem",
        backgroundColor: "#f0f0f0",
        fontFamily: "system-ui",
    };

    const titleStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
    };

    const alertStyle = {
        margin: "10px 0",
        padding: "2.3rem",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
    };

    const rowNumberStyle = {
        color: "whitesmoke",
        backgroundColor: "red",
        padding: "0.2rem 0.8rem 0.2rem 0.8rem",
    };

    if (data && data.entity && data.entity.length > 0) {
        const entities = data.entity;
        const translations = [];
        entities.forEach((entity, entityIndex) => {
            if (entity.alert) {
                const entityTranslations = entity.alert.description_text.translation;
                if (entityTranslations && entityTranslations.length > 0) {
                    entityTranslations.forEach((translation, translationIndex) => {
                        const lowerCaseText = translation.text.toLowerCase(); // Convert to lowercase
                        const rowNumber = (entityIndex * entityTranslations.length) + translationIndex + 1;
                        translations.push(
                            <p key={`entity${entityIndex}-translation${translationIndex}`} style={alertStyle}>
                                <span style={rowNumberStyle}>Message {rowNumber}</span>{"\n"}
                                {lowerCaseText}
                            </p>
                        );
                    });
                }
            }
        });

        if (translations.length > 0) {
            return (
                <div style={containerStyle}>
                    <h1 style={titleStyle}>Service Alerts</h1>
                    {translations}
                </div>
            );
        }
    }

    return <div style={containerStyle}>No data available.</div>;
};
