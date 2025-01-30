import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import WeatherTemp from "./Weather";


describe("WeatherTemp", () => {

    it("WeatherApi empty the weather Temp", () => {
        render(<WeatherTemp  weatherApi={null} />)
        expect(screen.getByTestId("SkeletonTemp")).toBeInTheDocument
        expect(screen.getByTestId("SkeletonDescription")).toBeInTheDocument
        expect(screen.getByTestId("SkeletonItFeelsLike")).toBeInTheDocument
    })

    it("WeatherApi not empty the weather Temp", () => {
        render(<WeatherTemp  weatherApi={{weather: "облачно", temp: "23"}} />)
        expect(screen.getByTestId("dataTemp")).toBeInTheDocument
        expect(screen.getByTestId("dataDescription")).toBeInTheDocument
        expect(screen.getByTestId("dataItFeelsLike")).toBeInTheDocument
    })
})