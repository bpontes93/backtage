## API Report File for "@backstage/plugin-permission-node"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { ExtensionPoint } from '@backstage/backend-plugin-api';
import { PermissionPolicy } from '@backstage/plugin-permission-node';

// @alpha
export type PolicyExtensionPoint = {
  setPolicy(policy: PermissionPolicy): void;
};

// @alpha
export const policyExtensionPoint: ExtensionPoint<PolicyExtensionPoint>;

// (No @packageDocumentation comment for this package)
```
