import { HttpProviderOptions } from 'tonweb';
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

export type TonwebModuleOptions = {
  /**
   * Ton rpc url
   */
  host?: string;
  options?: HttpProviderOptions;
};

export interface TonwebModuleOptionsFactory {
  createWinstonModuleOptions():
    | Promise<TonwebModuleOptions>
    | TonwebModuleOptions;
}

export interface TonwebModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory?: (
    ...args: any[]
  ) => Promise<TonwebModuleOptions> | TonwebModuleOptions;
  inject?: any[];
  useClass?: Type<TonwebModuleOptionsFactory>;
}
