import * as d3 from "d3";

export const ServiceAlert = () => {
    const loadServiceAlertData = () => {
        d3.json("sta-data/service-alerts.json")
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Error loading JSON data", error);
            });
    };

    // Call the function to load the data when needed
    loadServiceAlertData();

}