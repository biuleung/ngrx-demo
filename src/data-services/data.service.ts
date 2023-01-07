import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, map, Observable, of } from "rxjs";
import { Weather } from "src/models/weather";

@Injectable({
    providedIn: "root",
})
export class DataService {
    constructor(private httpClient: HttpClient) {}

    getWeather(location?: string): Observable<Weather> {
        // const httpParams = new HttpParams({
        //     fromObject: {
        //         limit: location ? 1 : 10,
        //         Authorization: "",
        //         locationName: location || "",
        //         elementName: "Wx",
        //     },
        // });

        // return this.httpClient
        //     .get<Weather>(
        //         "http://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001",
        //         {
        //             params: httpParams,
        //         }
        //     )
        //     .pipe(map((res) => res));

        if (location) {
            const result: Weather = {
                records: {
                    datasetDescription: "6 hours weather forecast",
                    location: [
                        {
                            locationName: location,
                            weatherElement: [
                                {
                                    time: [
                                        {
                                            parameter: {
                                                parameterName: [
                                                    "Mostly sunny",
                                                    "Mostly clear",
                                                    "High level clouds",
                                                    "A few showers",
                                                ][
                                                    Math.floor(
                                                        Math.random() * 4
                                                    )
                                                ],
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            };
            return of(result);
        } else {

            const result: Weather = {
                records: {
                    datasetDescription: "6 hours weather forecast",
                    location: [
                        {
                            locationName: "Taipei city",
                            weatherElement: [
                                {
                                    time: [
                                        {
                                            parameter: {
                                                parameterName: [
                                                    "Mostly sunny",
                                                    "Mostly clear",
                                                    "High level clouds",
                                                    "A few showers",
                                                ][
                                                    Math.floor(
                                                        Math.random() * 4
                                                    )
                                                ],
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            locationName: "Tainan city",
                            weatherElement: [
                                {
                                    time: [
                                        {
                                            parameter: {
                                                parameterName: [
                                                    "Mostly sunny",
                                                    "Mostly clear",
                                                    "High level clouds",
                                                    "A few showers",
                                                ][
                                                    Math.floor(
                                                        Math.random() * 4
                                                    )
                                                ],
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            locationName: "Kaosiong city",
                            weatherElement: [
                                {
                                    time: [
                                        {
                                            parameter: {
                                                parameterName: [
                                                    "Mostly sunny",
                                                    "Mostly clear",
                                                    "High level clouds",
                                                    "A few showers",
                                                ][
                                                    Math.floor(
                                                        Math.random() * 4
                                                    )
                                                ],
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            locationName: "Chiayi city",
                            weatherElement: [
                                {
                                    time: [
                                        {
                                            parameter: {
                                                parameterName: [
                                                    "Mostly sunny",
                                                    "Mostly clear",
                                                    "High level clouds",
                                                    "A few showers",
                                                ][
                                                    Math.floor(
                                                        Math.random() * 4
                                                    )
                                                ],
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            };
            return of(result);
        }
    }
}
