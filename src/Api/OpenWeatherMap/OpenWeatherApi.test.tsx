import HandlerApiWeather from "./OpenWeatherMap"

describe("HandlerApiWeather", () => {
    
    it("Getting data from the API", async () => {
        const mockSetMethod = jest.fn()
        const city = "шушенское"
        
        const mockFetchResponse = {
            ok: true,
            json: jest.fn().mockResolvedValue(
                {
                    main: {
                        temp: 20,
                    },
                    weather: [{
                        description: 'Облачно',
                        }],
                    }
            ),
        }

        global.fetch = jest.fn().mockResolvedValue(mockFetchResponse);

        await HandlerApiWeather(city, mockSetMethod)

        expect(global.fetch).toHaveBeenCalledTimes(1)
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

        global.fetch = jest.fn().mockResolvedValue({ ok: false });

        await HandlerApiWeather(city, mockSetMethod);

        expect(mockSetMethod).toHaveBeenCalledTimes(0)
    })
})