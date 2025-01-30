import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from "react";
import FavoritesBlock from './FavoritBlock';

describe("FavoritBlock", () => {

    it("favoriteList empty", () => {
        render(<FavoritesBlock favoritСountries={null} moreDetailed={() => {}} id={0} />)
        const Block = screen.getByTestId("Block")
        expect(Block).not.toBeInTheDocument;
    })

    it("favoriteList not empty", () => {
        render(<FavoritesBlock favoritСountries={"item"} moreDetailed={() => {}} id={0} />)
        expect(screen.getByText('item')).toBeInTheDocument();
    })
    
})