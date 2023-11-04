import * as d3 from "d3";
import data from "./sta-data/service-alerts.json";

export const ServiceAlert = () => {
    if (data && data.entity && data.entity.length > 0) {
        const entities = data.entity;
        const translations = [];

        entities.forEach((entity, entityIndex) => {
            if (entity.alert) {
                const entityTranslations = entity.alert.description_text.translation;
                if (entityTranslations && entityTranslations.length > 0) {
                    entityTranslations.forEach((translation, translationIndex) => {
                        translations.push(
                            <h2 key={`entity${entityIndex}-translation${translationIndex}`}>
                                {translation.text}
                            </h2>
                        );
                    });
                }
            }
        });

        if (translations.length > 0) {
            return (
                <div>
                    {translations}
                </div>
            );
        }
    }

    return <div>No data available.</div>;
};
