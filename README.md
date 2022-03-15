# automation-store-test
This project performs automated UI tests against the [Automation Practice](http://automationpractice.com/) website

### Prerequisites
* NPM pre-installed

### Usage
1. Clone the repository
2. Navigate to the project root directory
3. Open a command window and enter the following:
    ```
    npm install
    ```
4. To execute the tests:
 	```
    $(npm bin)/cypress run
    ```
The execution results will be printed in the console output. Video and screenshots are stored in cypress/videos and cypress/screenshots respectively.


**Note**: the tests run in Headless mode by default. This can be overridden via command line argument:
```
$(npm bin)/cypress run --headed
```