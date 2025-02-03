import HandlerApiWeather from "./OpenWeatherMap"
import { render, screen, fireEvent } from '@testing-library/react';

describe("HandlerApiWeather", () => {
    
    it("Getting data from the API", async () => {
        const mockSetMethod = jest.fn()
        const city = "шушенское"

        const mockFetchResponse = {
            ok: true,
            status: 200,
            json: jest.fn().mockResolvedValue({
                main: {
                    temp: 20,
                },
                weather: [{
                    description: 'Облачно',
                }],
            }),
        };

        jest.spyOn(window, 'fetch').mockResolvedValue(mockFetchResponse);

        await HandlerApiWeather(city, mockSetMethod)

        expect(mockSetMethod).toHaveBeenCalledTimes(1)
        expect(mockSetMethod).toHaveBeenCalledWith({
            main: {
              temp: 20,
            },
            weather: [{
              description: 'Облачно',
            }],
        })
    })
    
    it("error receiving data", async () => {
        const mockSetMethod = jest.fn()
        const city = "шушенское"

        jest.spyOn(window, 'fetch').mockRejectedValue(new Error("Сетевая ошибка"));

        await HandlerApiWeather(city, mockSetMethod);

        expect(mockSetMethod).toHaveBeenCalledTimes(0)
        expect(mockSetMethod).toHaveBeenCalledWith({})
    })
})