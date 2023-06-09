/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Config, ConfigReader } from '@backstage/config';
import { loadConfigSchema } from '@backstage/config-loader';
import {
  AzureIntegrationConfig,
  readAzureIntegrationConfig,
  readAzureIntegrationConfigs,
} from './config';

describe('readAzureIntegrationConfig', () => {
  function buildConfig(data: Partial<AzureIntegrationConfig>): Config {
    return new ConfigReader(data);
  }

  async function buildFrontendConfig(
    data: Partial<AzureIntegrationConfig>,
  ): Promise<Config> {
    const fullSchema = await loadConfigSchema({
      dependencies: ['@backstage/integration'],
    });
    const serializedSchema = fullSchema.serialize() as {
      schemas: { value: { properties?: { integrations?: object } } }[];
    };
    const schema = await loadConfigSchema({
      serialized: {
        ...serializedSchema, // only include schemas that apply to integrations
        schemas: serializedSchema.schemas.filter(
          s => s.value?.properties?.integrations,
        ),
      },
    });
    const processed = schema.process(
      [{ data: { integrations: { azure: [data] } }, context: 'app' }],
      { visibility: ['frontend'] },
    );
    return new ConfigReader((processed[0].data as any).integrations.azure[0]);
  }

  it('reads all values when using a token', () => {
    const output = readAzureIntegrationConfig(
      buildConfig({
        host: 'a.com',
        token: 't',
      }),
    );

    expect(output).toEqual({
      host: 'a.com',
      token: 't',
    });
  });

  it('reads all values when using a credential', () => {
    const output = readAzureIntegrationConfig(
      buildConfig({
        host: 'dev.azure.com',
        credential: {
          clientId: 'id',
          clientSecret: 'secret',
          tenantId: 'tenant',
        },
      }),
    );

    expect(output).toEqual({
      host: 'dev.azure.com',
      credential: {
        clientId: 'id',
        clientSecret: 'secret',
        tenantId: 'tenant',
      },
    });
  });

  it('inserts the defaults if missing', () => {
    const output = readAzureIntegrationConfig(buildConfig({}));
    expect(output).toEqual({ host: 'dev.azure.com' });
  });

  it('rejects funky configs', () => {
    const valid: any = {
      host: 'dev.azure.com',
    };

    expect(() =>
      readAzureIntegrationConfig(buildConfig({ ...valid, host: 7 })),
    ).toThrow(/host/);

    expect(() =>
      readAzureIntegrationConfig(buildConfig({ ...valid, token: 7 })),
    ).toThrow(/token/);

    expect(() =>
      readAzureIntegrationConfig(buildConfig({ ...valid, credential: 7 })),
    ).toThrow(/credential/);

    expect(() =>
      readAzureIntegrationConfig(
        buildConfig({ ...valid, credential: { clientId: 7 } }),
      ),
    ).toThrow(/credential/);

    expect(() =>
      readAzureIntegrationConfig(
        buildConfig({ ...valid, credential: { clientSecret: 7 } }),
      ),
    ).toThrow(/credential/);

    expect(() =>
      readAzureIntegrationConfig(
        buildConfig({ ...valid, credential: { tenantId: 7 } }),
      ),
    ).toThrow(/credential/);

    expect(() =>
      readAzureIntegrationConfig(buildConfig({ ...valid, credential: {} })),
    ).toThrow(/credential/);

    expect(() =>
      readAzureIntegrationConfig(
        buildConfig({ ...valid, credential: { clientSecret: 'secret' } }),
      ),
    ).toThrow(/credential/);

    expect(() =>
      readAzureIntegrationConfig(
        buildConfig({ ...valid, credential: { tenantId: 'tenant' } }),
      ),
    ).toThrow(/credential/);

    expect(() =>
      readAzureIntegrationConfig(
        buildConfig({
          ...valid,
          credential: { clientId: 'id', clientSecret: 'secret' },
        }),
      ),
    ).toThrow(/credential/);

    expect(() =>
      readAzureIntegrationConfig(
        buildConfig({
          ...valid,
          credential: { clientId: 'id', tenantId: 'tenant' },
        }),
      ),
    ).toThrow(/credential/);

    expect(() =>
      readAzureIntegrationConfig(
        buildConfig({
          ...valid,
          host: 'a.com',
          credential: {
            clientId: 'id',
            tenantId: 'tenant',
            clientSecret: 'secret',
          },
        }),
      ),
    ).toThrow(/credential/);
  });

  it('works on the frontend', async () => {
    expect(
      readAzureIntegrationConfig(
        await buildFrontendConfig({
          host: 'a.com',
          token: 't',
        }),
      ),
    ).toEqual({
      host: 'a.com',
    });
  });
});

describe('readAzureIntegrationConfigs', () => {
  function buildConfig(data: Partial<AzureIntegrationConfig>[]): Config[] {
    return data.map(item => new ConfigReader(item));
  }

  it('reads all values when using a token', () => {
    const output = readAzureIntegrationConfigs(
      buildConfig([
        {
          host: 'a.com',
          token: 't',
        },
      ]),
    );
    expect(output).toContainEqual({
      host: 'a.com',
      token: 't',
    });
  });

  it('reads all values when using a credential', () => {
    const output = readAzureIntegrationConfigs(
      buildConfig([
        {
          host: 'dev.azure.com',
          credential: {
            clientId: 'id',
            clientSecret: 'secret',
            tenantId: 'tenant',
          },
        },
      ]),
    );
    expect(output).toContainEqual({
      host: 'dev.azure.com',
      credential: {
        clientId: 'id',
        clientSecret: 'secret',
        tenantId: 'tenant',
      },
    });
  });

  it('adds a default entry when missing', () => {
    const output = readAzureIntegrationConfigs(buildConfig([]));
    expect(output).toEqual([
      {
        host: 'dev.azure.com',
      },
    ]);
  });
});
