/*
 * Copyright 2022 The Backstage Authors
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

import { RESOURCE_TYPE_SCAFFOLDER_STEP } from '@backstage/plugin-scaffolder-common';
import { createConditionExports } from '@backstage/plugin-permission-node';
import { scaffolderStepRules } from './rules';

// const {
//   conditions: scaffolderTemplateConditions,
//   createConditionalDecision: createScaffolderTemplateConditionalDecision,
// } = createConditionExports({
//   pluginId: 'scaffolder',
//   resourceType: RESOURCE_TYPE_SCAFFOLDER_TEMPLATE,
//   rules: scaffolderRules,
// });

// const {
//   conditions: scaffolderPropertyConditions,
//   createConditionalDecision: createScaffolderPropertyConditionalDecision,
// } = createConditionExports({
//   pluginId: 'scaffolder',
//   resourceType: RESOURCE_TYPE_SCAFFOLDER_TEMPLATE,
//   rules: scaffolderRules,
// });

const {
  conditions: scaffolderStepConditions,
  createConditionalDecision: createScaffolderStepConditionalDecision,
} = createConditionExports({
  pluginId: 'scaffolder',
  resourceType: RESOURCE_TYPE_SCAFFOLDER_STEP,
  rules: scaffolderStepRules,
});

export {
  // scaffolderTemplateConditions,
  // createScaffolderTemplateConditionalDecision,
  // scaffolderPropertyConditions,
  // createScaffolderPropertyConditionalDecision,
  scaffolderStepConditions,
  createScaffolderStepConditionalDecision,
};