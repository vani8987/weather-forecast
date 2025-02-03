module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
        "node_modules/(?!(react-loading-skeleton)/dist/skeleton.css)",
    ],
    "transform": {
     "^.+\\.css$": "jest-transform-stub"
    },
};
