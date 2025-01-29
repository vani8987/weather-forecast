import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from "react";
import FavoritesBlock from './FavoritBlock';

describe("FavoritBlock", () => {

    it("favoriteList empty", () => {
        const favoritСountries = null
        render(<FavoritesBlock favoritСountries={null} moreDetailed={() => {}} id={0} />)
        expect(favoritСountries).toBeNull;
    })

    it("favoriteList not empty", () => {
        render(<FavoritesBlock favoritСountries={"item"} moreDetailed={() => {}} id={0} />)
        expect(screen.getByText('item')).toBeInTheDocument();
    })
})