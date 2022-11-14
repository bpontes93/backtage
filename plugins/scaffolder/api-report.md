## API Report File for "@backstage/plugin-scaffolder"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiHolder } from '@backstage/core-plugin-api';
import { ApiRef } from '@backstage/core-plugin-api';
import { BackstagePlugin } from '@backstage/core-plugin-api';
import { ComponentType } from 'react';
import { DiscoveryApi } from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { Extension } from '@backstage/core-plugin-api';
import { ExternalRouteRef } from '@backstage/core-plugin-api';
import { FetchApi } from '@backstage/core-plugin-api';
import { FieldProps } from '@rjsf/core';
import { FieldProps as FieldProps_2 } from '@rjsf/utils';
import { FieldValidation } from '@rjsf/core';
import { FieldValidation as FieldValidation_2 } from '@rjsf/utils';
import type { FormProps } from '@rjsf/core';
import { IdentityApi } from '@backstage/core-plugin-api';
import { JsonObject } from '@backstage/types';
import { JSONSchema7 } from 'json-schema';
import { JsonValue } from '@backstage/types';
import { Observable } from '@backstage/types';
import { PathParams } from '@backstage/core-plugin-api';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';
import { RouteRef } from '@backstage/core-plugin-api';
import { ScmIntegrationRegistry } from '@backstage/integration';
import { SubRouteRef } from '@backstage/core-plugin-api';
import { TaskSpec } from '@backstage/plugin-scaffolder-common';
import { TaskStep } from '@backstage/plugin-scaffolder-common';
import { TemplateEntityV1beta3 } from '@backstage/plugin-scaffolder-common';
import { UIOptionsType } from '@rjsf/utils';
import { UiSchema } from '@rjsf/utils';

// @alpha
export function createNextScaffolderFieldExtension<
  TReturnValue = unknown,
  TInputProps extends UIOptionsType = {},
>(
  options: NextFieldExtensionOptions<TReturnValue, TInputProps>,
): Extension<FieldExtensionComponent<TReturnValue, TInputProps>>;

// @public
export function createScaffolderFieldExtension<
  TReturnValue = unknown,
  TInputProps = unknown,
>(
  options: FieldExtensionOptions<TReturnValue, TInputProps>,
): Extension<FieldExtensionComponent<TReturnValue, TInputProps>>;

// @public
export function createScaffolderLayout<TInputProps = unknown>(
  options: LayoutOptions,
): Extension<LayoutComponent<TInputProps>>;

// @public
export type CustomFieldValidator<TFieldReturnValue> = (
  data: TFieldReturnValue,
  field: FieldValidation,
  context: {
    apiHolder: ApiHolder;
  },
) => void | Promise<void>;

// @public
export const EntityNamePickerFieldExtension: FieldExtensionComponent<
  string,
  {}
>;

// @public
export const EntityPickerFieldExtension: FieldExtensionComponent<
  string,
  EntityPickerUiOptions
>;

// @public
export interface EntityPickerUiOptions {
  // (undocumented)
  allowArbitraryValues?: boolean;
  // (undocumented)
  allowedKinds?: string[];
  // (undocumented)
  defaultKind?: string;
  // (undocumented)
  defaultNamespace?: string | false;
}

// @public
export const EntityTagsPickerFieldExtension: FieldExtensionComponent<
  string[],
  EntityTagsPickerUiOptions
>;

// @public
export interface EntityTagsPickerUiOptions {
  // (undocumented)
  helperText?: string;
  // (undocumented)
  kinds?: string[];
  // (undocumented)
  showCounts?: boolean;
}

// @public
export type FieldExtensionComponent<_TReturnValue, _TInputProps> = () => null;

// @public
export interface FieldExtensionComponentProps<
  TFieldReturnValue,
  TUiOptions extends {} = {},
> extends FieldProps<TFieldReturnValue> {
  // (undocumented)
  uiSchema: FieldProps['uiSchema'] & {
    'ui:options'?: TUiOptions;
  };
}

// @public
export type FieldExtensionOptions<
  TFieldReturnValue = unknown,
  TInputProps = unknown,
> = {
  name: string;
  component: (
    props: FieldExtensionComponentProps<TFieldReturnValue, TInputProps>,
  ) => JSX.Element | null;
  validation?: CustomFieldValidator<TFieldReturnValue>;
};

// @public
export type LayoutComponent<_TInputProps> = () => null;

// @public
export interface LayoutOptions<P = any> {
  // (undocumented)
  component: LayoutTemplate<P>;
  // (undocumented)
  name: string;
}

// @public
export type LayoutTemplate<T = any> = FormProps<T>['ObjectFieldTemplate'];

// @public
export type ListActionsResponse = Array<{
  id: string;
  description?: string;
  schema?: {
    input?: JSONSchema7;
    output?: JSONSchema7;
  };
}>;

// @public
export type LogEvent = {
  type: 'log' | 'completion';
  body: {
    message: string;
    stepId?: string;
    status?: ScaffolderTaskStatus;
  };
  createdAt: string;
  id: string;
  taskId: string;
};

// @alpha
export type NextCustomFieldValidator<TFieldReturnValue> = (
  data: TFieldReturnValue,
  field: FieldValidation_2,
  context: {
    apiHolder: ApiHolder;
  },
) => void | Promise<void>;

// @alpha
export interface NextFieldExtensionComponentProps<
  TFieldReturnValue,
  TUiOptions = {},
> extends PropsWithChildren<FieldProps_2<TFieldReturnValue>> {
  // (undocumented)
  uiSchema?: UiSchema<TFieldReturnValue> & {
    'ui:options'?: TUiOptions & UIOptionsType;
  };
}

// @alpha
export type NextFieldExtensionOptions<
  TFieldReturnValue = unknown,
  TInputProps = unknown,
> = {
  name: string;
  component: (
    props: NextFieldExtensionComponentProps<TFieldReturnValue, TInputProps>,
  ) => JSX.Element | null;
  validation?: NextCustomFieldValidator<TFieldReturnValue>;
};

// @alpha (undocumented)
export const nextRouteRef: RouteRef<undefined>;

// @alpha
export type NextRouterProps = {
  components?: {
    TemplateCardComponent?: React_2.ComponentType<{
      template: TemplateEntityV1beta3;
    }>;
    TaskPageComponent?: React_2.ComponentType<{}>;
  };
  groups?: TemplateGroupFilter[];
};

// @alpha
export const NextScaffolderPage: (
  props: PropsWithChildren<NextRouterProps>,
) => JSX.Element;

// @alpha (undocumented)
export const nextSelectedTemplateRouteRef: SubRouteRef<
  PathParams<'/templates/:namespace/:templateName'>
>;

// @public
export const OwnedEntityPickerFieldExtension: FieldExtensionComponent<
  string,
  OwnedEntityPickerUiOptions
>;

// @public
export interface OwnedEntityPickerUiOptions {
  // (undocumented)
  allowArbitraryValues?: boolean;
  // (undocumented)
  allowedKinds?: string[];
  // (undocumented)
  defaultKind?: string;
  // (undocumented)
  defaultNamespace?: string | false;
}

// @public
export const OwnerPickerFieldExtension: FieldExtensionComponent<
  string,
  OwnerPickerUiOptions
>;

// @public
export interface OwnerPickerUiOptions {
  // (undocumented)
  allowArbitraryValues?: boolean;
  // (undocumented)
  allowedKinds?: string[];
  // (undocumented)
  defaultNamespace?: string | false;
}

// @public
export const repoPickerValidation: (
  value: string,
  validation: FieldValidation,
  context: {
    apiHolder: ApiHolder;
  },
) => void;

// @public
export const RepoUrlPickerFieldExtension: FieldExtensionComponent<
  string,
  RepoUrlPickerUiOptions
>;

// @public
export interface RepoUrlPickerUiOptions {
  // (undocumented)
  allowedHosts?: string[];
  // (undocumented)
  allowedOrganizations?: string[];
  // (undocumented)
  allowedOwners?: string[];
  // (undocumented)
  allowedRepos?: string[];
  // (undocumented)
  requestUserCredentials?: {
    secretsKey: string;
    additionalScopes?: {
      gerrit?: string[];
      github?: string[];
      gitlab?: string[];
      bitbucket?: string[];
      azure?: string[];
    };
  };
}

// @public (undocumented)
export const rootRouteRef: RouteRef<undefined>;

// @public
export type RouterProps = {
  components?: {
    TemplateCardComponent?:
      | ComponentType<{
          template: TemplateEntityV1beta3;
        }>
      | undefined;
    TaskPageComponent?: ComponentType<{}>;
  };
  groups?: Array<{
    title?: React_2.ReactNode;
    filter: (entity: Entity) => boolean;
  }>;
  defaultPreviewTemplate?: string;
  headerOptions?: {
    pageTitleOverride?: string;
    title?: string;
    subtitle?: string;
  };
  contextMenu?: {
    editor?: boolean;
    actions?: boolean;
  };
};

// @public
export interface ScaffolderApi {
  // (undocumented)
  dryRun?(options: ScaffolderDryRunOptions): Promise<ScaffolderDryRunResponse>;
  // (undocumented)
  getIntegrationsList(
    options: ScaffolderGetIntegrationsListOptions,
  ): Promise<ScaffolderGetIntegrationsListResponse>;
  // (undocumented)
  getTask(taskId: string): Promise<ScaffolderTask>;
  // (undocumented)
  getTemplateParameterSchema(
    templateRef: string,
  ): Promise<TemplateParameterSchema>;
  listActions(): Promise<ListActionsResponse>;
  // (undocumented)
  listTasks?(options: { filterByOwnership: 'owned' | 'all' }): Promise<{
    tasks: ScaffolderTask[];
  }>;
  scaffold(
    options: ScaffolderScaffoldOptions,
  ): Promise<ScaffolderScaffoldResponse>;
  // (undocumented)
  streamLogs(options: ScaffolderStreamLogsOptions): Observable<LogEvent>;
}

// @public
export const scaffolderApiRef: ApiRef<ScaffolderApi>;

// @public
export class ScaffolderClient implements ScaffolderApi {
  constructor(options: {
    discoveryApi: DiscoveryApi;
    fetchApi: FetchApi;
    identityApi?: IdentityApi;
    scmIntegrationsApi: ScmIntegrationRegistry;
    useLongPollingLogs?: boolean;
  });
  // (undocumented)
  dryRun(options: ScaffolderDryRunOptions): Promise<ScaffolderDryRunResponse>;
  // (undocumented)
  getIntegrationsList(
    options: ScaffolderGetIntegrationsListOptions,
  ): Promise<ScaffolderGetIntegrationsListResponse>;
  // (undocumented)
  getTask(taskId: string): Promise<ScaffolderTask>;
  // (undocumented)
  getTemplateParameterSchema(
    templateRef: string,
  ): Promise<TemplateParameterSchema>;
  // (undocumented)
  listActions(): Promise<ListActionsResponse>;
  // (undocumented)
  listTasks(options: { filterByOwnership: 'owned' | 'all' }): Promise<{
    tasks: ScaffolderTask[];
  }>;
  scaffold(
    options: ScaffolderScaffoldOptions,
  ): Promise<ScaffolderScaffoldResponse>;
  // (undocumented)
  streamLogs(options: ScaffolderStreamLogsOptions): Observable<LogEvent>;
}

// @public (undocumented)
export interface ScaffolderDryRunOptions {
  // (undocumented)
  directoryContents: {
    path: string;
    base64Content: string;
  }[];
  // (undocumented)
  secrets?: Record<string, string>;
  // (undocumented)
  template: JsonValue;
  // (undocumented)
  values: JsonObject;
}

// @public (undocumented)
export interface ScaffolderDryRunResponse {
  // (undocumented)
  directoryContents: Array<{
    path: string;
    base64Content: string;
    executable: boolean;
  }>;
  // (undocumented)
  log: Array<Pick<LogEvent, 'body'>>;
  // (undocumented)
  output: ScaffolderTaskOutput;
  // (undocumented)
  steps: TaskStep[];
}

// @public
export const ScaffolderFieldExtensions: React_2.ComponentType;

// @public
export interface ScaffolderGetIntegrationsListOptions {
  // (undocumented)
  allowedHosts: string[];
}

// @public
export interface ScaffolderGetIntegrationsListResponse {
  // (undocumented)
  integrations: {
    type: string;
    title: string;
    host: string;
  }[];
}

// @public
export const ScaffolderLayouts: React.ComponentType;

// @public (undocumented)
export type ScaffolderOutputLink = {
  title?: string;
  icon?: string;
  url?: string;
  entityRef?: string;
};

// @public
export const ScaffolderPage: (props: RouterProps) => JSX.Element;

// @public
export const scaffolderPlugin: BackstagePlugin<
  {
    root: RouteRef<undefined>;
  },
  {
    registerComponent: ExternalRouteRef<undefined, true>;
    viewTechDoc: ExternalRouteRef<
      {
        name: string;
        kind: string;
        namespace: string;
      },
      true
    >;
  },
  {}
>;

// @public
export interface ScaffolderScaffoldOptions {
  // (undocumented)
  secrets?: Record<string, string>;
  // (undocumented)
  templateRef: string;
  // (undocumented)
  values: Record<string, JsonValue>;
}

// @public
export interface ScaffolderScaffoldResponse {
  // (undocumented)
  taskId: string;
}

// @public
export interface ScaffolderStreamLogsOptions {
  // (undocumented)
  after?: number;
  // (undocumented)
  taskId: string;
}

// @public
export type ScaffolderTask = {
  id: string;
  spec: TaskSpec;
  status: 'failed' | 'completed' | 'processing' | 'open' | 'cancelled';
  lastHeartbeatAt: string;
  createdAt: string;
};

// @public (undocumented)
export type ScaffolderTaskOutput = {
  links?: ScaffolderOutputLink[];
} & {
  [key: string]: unknown;
};

// @public
export type ScaffolderTaskStatus =
  | 'open'
  | 'processing'
  | 'failed'
  | 'completed'
  | 'skipped';

// @public
export interface ScaffolderUseTemplateSecrets {
  // (undocumented)
  setSecrets: (input: Record<string, string>) => void;
}

// @public (undocumented)
export const selectedTemplateRouteRef: SubRouteRef<
  PathParams<'/templates/:namespace/:templateName'>
>;

// @public
export const TaskPage: ({ loadingText }: TaskPageProps) => JSX.Element;

// @public
export type TaskPageProps = {
  loadingText?: string;
};

// @alpha (undocumented)
export type TemplateGroupFilter = {
  title?: React_2.ReactNode;
  filter: (entity: Entity) => boolean;
};

// @public
export type TemplateParameterSchema = {
  title: string;
  description?: string;
  steps: Array<{
    title: string;
    description?: string;
    schema: JsonObject;
  }>;
};

// @public
export const TemplateTypePicker: () => JSX.Element | null;

// @public
export const useTemplateSecrets: () => ScaffolderUseTemplateSecrets;
```