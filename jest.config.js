export default {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json',
        },
    },
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },

    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^.+\\.svg$": "jest-transformer-svg",
        '^@/(.*)$': '<rootDir>/src/$1',
    },

    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};