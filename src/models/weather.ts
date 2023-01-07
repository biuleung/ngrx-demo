type WeatherElement = {
    time: {
        endTime?: string;
        startTime?: string;
        parameter: {
            parameterName: string;
        };
    }[];
};

export type City = {
    locationName: string;
    weatherElement: WeatherElement[];
};

type Record = {
    datasetDescription: string;
    location: City[];
};

export type Weather = {
    records: Record;
};
