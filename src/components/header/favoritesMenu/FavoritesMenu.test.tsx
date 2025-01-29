import FavoritesMenu from "./FavoritesMenu";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from "react";

describe("Favorites menu", () => {
    
    it("opening menu", () => {
        render(<FavoritesMenu   favoritСountries={[]} moreDetailed={() => {}} /> )
        const btnOpen = screen.getByRole("button")
        expect(screen.getByTestId('menu')).not.toBeVisible
        fireEvent.click(btnOpen)
        expect( screen.getByTestId('menu')).toBeVisible
    })

    it("closing the menu", () => {
        render(<FavoritesMenu  favoritСountries={[]} moreDetailed={() => {}} /> )
        const btnOpen = screen.getByRole("button")
        expect( screen.getByTestId('menu')).toBeVisible
        fireEvent.click(btnOpen)
        expect(screen.getByTestId('menu')).not.toBeVisible
        fireEvent.click(btnOpen)
        expect( screen.getByTestId('menu')).toBeVisible
    })

    it("empty menu", () => {
        render(<FavoritesMenu  favoritСountries={[]} moreDetailed={() => {}} /> )
        const emptyList = screen.getByText(/Список пуст/i)
        expect(emptyList).toBeInTheDocument()
    })

    it("No empty menu", () => {
        const City = ["Москва", "Вологда", "Пермь"]
        render(<FavoritesMenu  favoritСountries={City} moreDetailed={() => {}} /> )
        City.map(item => {
            const itemCity = screen.getByText(item)
            expect(itemCity).toBeInTheDocument
        })
    })
    
})