import {Selector, RequestLogger} from 'testcafe';

// 1 ° Fixture
fixture.skip `Testing 1 : GitHub User`
    .page `https://github.com/`
    .meta({
        'author':'medaimane',
        'creationDate':'21-10-2018'
    })
    .before(async ctx => {  /* fixture hooks */ })
    .after(async ctx => {})
    .beforeEach( async t => { /* test hooks*/ })
    .afterEach( async t => {});

// 1° test
test
    .meta('testID', 't001')
    .meta('creationDate', '21-10-2018')
    
    // Some test hooks
    .before( async t => {
        /* test initialization code */
        // await t
        //     .expect(await Selector('a').withText('Sign up').exists).ok()
        //     .click(await Selector('a').withText('Sign up'));
    })
    ('Create the user', async t => {

        // Observing Page State | Access the DOM elements
        // Inputs
        const username = await Selector('input[id="user[login]"]');
        const email = await Selector('input[id="user[email]"]');
        const password = await Selector('input[id="user[password]"]');
        
        // Submit button
        const signupbtn = await Selector('button').withText('Sign up for GitHub');

        // Performing Actions on the Page
        await t
            .setTestSpeed(0.1)
            
            .expect(username.exists).ok()
            .expect(email.exists).ok()
            .expect(password.exists).ok()
            .expect(submitbtn.exists).ok()
            
            .typeText(username, 'testcafeUsername') // tape username
            .typeText(email, 'testcafeEmail@email.com') // tape email
            .typeText(password, 'testcafePassword123') // tape password
            
            .click(signupbtn)  // submit a form
            .catch((reason) => {
                console.error(reason.type);
            });
    })
    .after( async t => {});

// 2° test
test
    .meta('testId', 'test002')
    .before( async t => {})
    ('Choosen plan', async t => {
        const freeplan_rbtn = await Selector('input[value="free"]');
        // const proplan_rbtn = await Selector('input[value="pro"]');
        const setup_organization = await Selector('#setup_organization');
        const send_me_update = await Selector('#all_emails');
        
        const submitbtn = await Selector('.js-choose-plan-submit');

        await t
            .setTestSpeed(0.1)
            .click(freeplan_rbtn)
            click(send_me_update)
            click(submitbtn)
            .catch((reason) => {
                console.error(reason.type);
            });
    })
    .after( async t => {});


// 2 ° Fixture
fixture `Testing 2 : GitHub Login`
    .page `https://github.com/`
    .meta({
        'author':'medaimane',
        'creationDate':'21-10-2018'
    })
    .before(async ctx => {})
    .after(async ctx => {})
    .beforeEach( async t => {})
    .afterEach( async t => {});

// 3° test
test
    .meta('testId', 'test003')
    .before( async t => {

        const login_link = await Selector('a').withText('Sign in');
        await t
            .expect(login_link.exists).ok()
            .click(login_link)
            .catch((reason) => {
                console.error(reason.type);
            });

    })
    ('Login', async t => {

        const username = await Selector('input[id="login_field"]');
        const password = await Selector('input[id="password"]');

        const loginbtn = await Selector('input[type="submit"]');

        await t
            .setTestSpeed(0.1)
            
            .expect(username.exists).ok()
            .expect(password.exists).ok()
            .expect(loginbtn.exists).ok()
            
            .typeText(username, 'testcafeUsername') // tape username
            .typeText(password, 'testcafePassword123') // tape password
            
            .click(loginbtn)
            .catch((reason) => {
                console.error(reason.type);
            });
    })
    .after( async t => {

        const user_links_dropdown = await Selector('#user-links').child('li').nth(2);
        const get_logged_username = await Selector('strong[class="css-truncate-target"]').textContent;
        const logoutbtn = await Selector('button[type="submit"]').withText('Sign out');

        await t
            .expect(user_links_dropdown.exists).ok()
            .click(user_links_dropdown)
            
            .setTestSpeed(0.2)
            .expect(get_logged_username).eql('testcafUsername')
            .expect(logoutbtn.exists).ok()
            
            .setTestSpeed(0.1)
            .click(logoutbtn)
            .catch((reason) => {
                console.error(reason.type);
            });
    });