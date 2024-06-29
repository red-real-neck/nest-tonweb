import TonWeb from 'tonweb';

import {
  TonwebModuleAsyncOptions,
  TonwebModuleOptions,
  TonwebModuleOptionsFactory,
} from './nest-tonweb.interface';
import {
  TONWEB_MODULE_OPTIONS,
  TONWEB_MODULE_PROVIDER,
} from './nest-tonweb.constants';
import { Provider, Type } from '@nestjs/common';

export function createTonwebProviders({ host, options }: TonwebModuleOptions) {
  return [
    {
      provide: TONWEB_MODULE_PROVIDER,
      useFactory: () => new TonWeb(new TonWeb.HttpProvider(host, options)),
    },
  ];
}

export function createTonwebAsyncProviders(
  moduleOptions: TonwebModuleAsyncOptions,
): Provider[] {
  const providers: Provider[] = [
    {
      provide: TONWEB_MODULE_PROVIDER,
      useFactory: ({ host, options }: TonwebModuleOptions) =>
        new TonWeb(new TonWeb.HttpProvider(host, options)),
      inject: [TONWEB_MODULE_OPTIONS],
    },
  ];

  if (moduleOptions.useClass) {
    const useClass = moduleOptions.useClass as Type<TonwebModuleOptionsFactory>;
    providers.push(
      ...[
        {
          provide: TONWEB_MODULE_OPTIONS,
          useFactory: async (optionsFactory: TonwebModuleOptionsFactory) =>
            await optionsFactory.createWinstonModuleOptions(),
          inject: [useClass],
        },
        {
          provide: useClass,
          useClass,
        },
      ],
    );
  }

  if (moduleOptions.useFactory) {
    providers.push({
      provide: TONWEB_MODULE_OPTIONS,
      useFactory: moduleOptions.useFactory,
      inject: moduleOptions.inject || [],
    });
  }

  return providers;
}
