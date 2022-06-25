## MIT Licence
# GitHub Explorer integration with GitHub API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) `typescript` template. Redux support was added manually.

## GitHub Explroer features
- Designed to display trending repositories within last 7 days that have the highest star count. 
- Each repository can be starred (favoured) saving the information locally withing local storage
- Trending as well as favoured can be displayed at any point in time
- Search by language feature is available within the repositories
- List of languages is tracked locally as it is available witing lingust (https://github.com/github/linguist), only one language selection is currently supported
- Simple responsivnes is achievid via simple media query where the repositories are displayed with flex column based
- GitHub mark and GitHub free integration logos are being used
- Wanted to make a demo via Veed but couldn't due to workspace issues

## Development notes
- .nvmrc can be used for proper `node -v` selection
- .prettier
- package-lock.json is included
- package versions should be locked

## Further improvements
- Go with the path alias setup
- SCSS setup with better BEM notation following
- Project structuring with component folders instead of plain files
- Testing of components behaviour and reducers

## Tests
Work in progress

## External library packages used
- Axios 
- qs

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.