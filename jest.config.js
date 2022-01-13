module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  testMatch: [
    "**/__tests__/**/*.(test).[jt]s?(x)",
    "**/?(*.)+(test).[jt]s?(x)",
  ],
  testPathIgnorePatterns: ["/build/"],
};
