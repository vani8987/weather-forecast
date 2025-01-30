import IconWeather from "./IconWeather";

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("IconWeather", () => {

    it("WeatherApi empty", () => {
        const weatherApi = null
        render(<IconWeather  weatherApi={weatherApi} />)
        expect(screen.getByTestId("SkeletonIcon")).toBeInTheDocument
    })

    it("WeatherApi not empty", () => {
        render(<IconWeather  weatherApi={{weather: "облачно", temp: "23"}} />)
        expect(screen.getByTestId("ImgWeather")).toBeInTheDocument
    })
})