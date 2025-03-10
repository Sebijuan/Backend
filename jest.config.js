module.exports = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["lcov", "text"],
    collectCoverageFrom: [
      "src/**/*.{js,ts}",
      "!src/**/*.test.{js,ts}"
    ],
  };
  