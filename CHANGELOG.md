## [1.0.3] - 2024-06-29

### Fixed

- Fixed an issue with the `forRootAsync` method in `TonwebModule` that caused the error `Cannot destructure property 'host' of 'undefined' as it is undefined`. The `TONWEB_MODULE_OPTIONS` is now correctly used and passed to the `useFactory`.

RELEASE 1.0.0
