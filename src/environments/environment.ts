/* istanbul ignore file */

export const environment = {
    production: false,
    backendUrl: window['env'] && window['env']['backendUrl']
        ? window['env']['backendUrl']
        : 'https://online-portfolio-backend-dev.herokuapp.com',
    emailAddress: window['env'] && window['env']['emailAddress']
        ? window['env']['emailAddress']
        : 'rkumar181398@gmail.com',
    githubProfileLink: window['env'] && window['env']['githubProfileLink']
        ? window['env']['githubProfileLink']
        : 'https://github.com/rohit-chicmic',
    githubUsername: window['env'] && window['env']['githubUsername']
        ? window['env']['githubUsername']
        : 'rohit-chicmic',
    linkedInProfileLink: window['env'] && window['env']['linkedInProfileLink']
        ? window['env']['linkedInProfileLink']
        : 'https://www.linkedin.com/in/rkumar181298/',
    linkedInUsername: window['env'] && window['env']['linkedInUsername']
        ? window['env']['linkedInUsername']
        : 'rkumar181298',
    backendServiceToken: window['env'] && window['env']['backendServiceToken']
        ? window['env']['backendServiceToken']
        : '',
    cvDocumentUrl: window['env'] && window['env']['cvDocumentUrl']
        ? window['env']['cvDocumentUrl']
        : '',
}
