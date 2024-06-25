<p align="center">
  <a href="http://nestjs.com"><img alt="Nest Logo" src="https://nestjs.com/img/logo-small.svg" width="120"></a>
</p>

<h1 align="center">
  nest-tonweb
</h1>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### Installation

```bash
npm install --save nest-tonweb
```

## Quick start

Import `TonwebModule` into the root `AppModule` and use the `forRoot()` method to configure it. This method accepts the same options object as [`Tonweb.HttpProvider()`](https://github.com/toncenter/tonweb/blob/76dfd0701714c0a316aee503c2962840acaf74ef/src/providers/index.js#L16) function from the tonweb package:

```typescript
import { Module } from '@nestjs/common';
import { TonwebModule } from 'nest-tonweb';
import * as winston from 'winston';

@Module({
  imports: [
    TonwebModule.forRoot({
      // options
    }),
  ],
})
export class AppModule {}
```

## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Contributing

Contributions welcome! See [Contributing](CONTRIBUTING.md).

## Author

**Ruslan Sorokin | [Telegram](https://t.me/red_real_neck)**

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
