## API Report File for "@backstage/plugin-octopus-deploy"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiRef } from '@backstage/core-plugin-api';
import { BackstagePlugin } from '@backstage/core-plugin-api';
import { DiscoveryApi } from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { FetchApi } from '@backstage/core-plugin-api';

// @public (undocumented)
export const EntityOctopusDeployContent: (props: {
  defaultLimit?: number | undefined;
}) => JSX.Element;

// @public (undocumented)
export const isOctopusDeployAvailable: (entity: Entity) => boolean;

// @public (undocumented)
export const OCTOPUS_DEPLOY_PROJECT_ID_ANNOTATION = 'octopus.com/project-id';

// @public (undocumented)
export interface OctopusDeployApi {
  // (undocumented)
  getReleaseProgression(
    projectId: string,
    releaseHistoryCount: number,
  ): Promise<OctopusProgression>;
}

// @public (undocumented)
export const octopusDeployApiRef: ApiRef<OctopusDeployApi>;

// @public (undocumented)
export class OctopusDeployClient implements OctopusDeployApi {
  constructor(options: {
    discoveryApi: DiscoveryApi;
    fetchApi: FetchApi;
    proxyPathBase?: string;
  });
  // (undocumented)
  getReleaseProgression(
    projectId: string,
    releaseHistoryCount: number,
  ): Promise<OctopusProgression>;
}

// @public (undocumented)
export type OctopusDeployment = {
  State: string;
};

// @public (undocumented)
export const octopusDeployPlugin: BackstagePlugin<{}, {}, {}>;

// @public (undocumented)
export type OctopusEnvironment = {
  Id: string;
  Name: string;
};

// @public (undocumented)
export type OctopusProgression = {
  Environments: OctopusEnvironment[];
  Releases: OctopusReleaseProgression[];
};

// @public (undocumented)
export type OctopusRelease = {
  Id: string;
  Version: string;
};

// @public (undocumented)
export type OctopusReleaseProgression = {
  Release: OctopusRelease;
  Deployments: {
    [key: string]: OctopusDeployment[];
  };
};

// (No @packageDocumentation comment for this package)
```