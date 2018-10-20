import { Selector, t } from 'testcafe';
import _ from 'lodash';

// Declare a fixture and create a test for the index page
fixture `Getting Started Example`
    .page `http://localhost:3000/`;

// Create a test
test('My first test', async t => {
    
    // Performing Actions on the Page
    await t // test controller object
        .setTestSpeed(0.1)
        .typeText('#username', 'TestCafe') // for the username input.
        .typeText('#task', 'This is a new task from TestCafe') // for the task input
        .click('#submitbtn') // submit a form
        .click(_.sample([true, false]) ? '.confirmbtn' : '.cancelbtn'); // for the alert
});