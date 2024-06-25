import TonWeb from 'tonweb';
import { DynamicModule, Module } from '@nestjs/common';

import {
  TonwebModuleAsyncOptions,
  TonwebModuleOptions,
} from './nest-tonweb.interface';
import {
  createTonwebAsyncProviders,
  createTonwebProviders,
} from './nest-tonweb.provider';

@Module({})
export class TonwebModule {
  public static forRoot(options: TonwebModuleOptions): DynamicModule {
    const providers = createTonwebProviders(options);

    return {
      module: TonwebModule,
      providers: providers,
      exports: providers,
    };
  }

  public static forRootAsync(options: TonwebModuleAsyncOptions): DynamicModule {
    const providers = createTonwebAsyncProviders(options);

    return {
      module: TonwebModule,
      imports: options.imports,
      providers: providers,
      exports: providers,
    } as DynamicModule;
  }
}
