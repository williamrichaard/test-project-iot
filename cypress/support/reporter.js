const report = require('multiple-cucumber-html-reporter')

report.generate({
    jsonDir: 'report/json',
    reportPath: 'report/html',
    displayDuration: true,
    pageTitle: 'System-Test Report',
    reportName: `System-Test Report - ${new Date().toLocaleString()}`,
    metadata: {
        browser: {
            name: 'chrome'
        },
        device: 'remote',
        platform: {
            name: 'windows'
        }
    }
})