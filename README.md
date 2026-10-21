# JobsRUS

An Ionic 5 / Angular 11 job-listing application. Users can browse jobs and categories, view job details, post and manage listings, maintain a profile, and contact a listing by SMS on a supported device.

Authentication uses Firebase through AngularFire, with email/password, Google, Facebook, and password-reset methods. Job and user data are accessed through external HTTP services.

## Local development

Use Node.js and npm compatible with this Angular 11 project; no Node version is pinned.

```sh
git clone https://github.com/Zoiku/jobsrus.git
cd jobsrus
npm install
npm start
```

Open Angular's printed development URL, normally `http://localhost:4200`.

## Required services

- Configure your Firebase project in `src/environments/environment.ts` and enable the authentication providers you intend to use.
- The production environment file currently contains only `production: true`. Add the Firebase configuration required by `app.module.ts` before a production build.
- Review the URLs in `src/app/services/`. Listing requests currently target `https://jobsrus.herokuapp.com/api/listings`; the backend is not included here. A working replacement service must support the existing service methods.
- SMS uses the Cordova SMS plugin and needs a compatible device/runtime and permissions. It is not available in a normal browser preview.

## Commands

- `npm run build`: web build; Angular configuration controls production replacements.
- `npm test`: Karma/Jasmine tests.
- `npm run lint`: configured Angular ESLint checks.
- `npm run e2e`: Protractor tests.

Android and browser Cordova targets are declared in `package.json`. Native builds require the separate Cordova/Ionic and platform SDK setup.

## Code guide

- `src/app/pages/`: listing, posting, account, and profile screens.
- `src/app/services/`: authentication, listings, users, and SMS.
- `src/app/interfaces/`: listing and user models.
- `src/environments/`: build-specific configuration.
- `Mobile App Final Report/`: coursework reports and an APK artifact.

External service availability and native SMS behavior must be checked separately from a successful web build.
