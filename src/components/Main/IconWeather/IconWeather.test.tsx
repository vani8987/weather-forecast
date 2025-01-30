import IconWeather from "./IconWeather";
import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("IconWeather", () => {

    it("WeatherApi empty", () => {
        const weatherApi = null
        render(<IconWeather  weatherApi={weatherApi} />)
        const Skeleton = screen.getByTestId("Skeleton")
        expect(Skeleton).not.toBeInTheDocument
    })

    it("WeatherApi not empty", () => {
        const weatherApi = {weather: "облачно", temp: "23"}
        render(<IconWeather  weatherApi={weatherApi} />)
        const weatherIcon = screen.getByTestId("ImgWeather")
        expect(weatherIcon).toBeInTheDocument
    })
})