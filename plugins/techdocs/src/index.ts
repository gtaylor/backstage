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

/**
 * The Backstage plugin that renders technical documentation for your components
 *
 * @packageDocumentation
 */

export * from './api';
export { techdocsApiRef, techdocsStorageApiRef } from './api';
export type { TechDocsApi, TechDocsStorageApi } from './api';
export { TechDocsClient, TechDocsStorageClient } from './client';
export type { DocsTableRow, PanelType } from './home/components';
export {
  EntityListDocsTable,
  DefaultTechDocsHome,
  TechDocsPageWrapper,
  TechDocsPicker,
} from './home/components';
export * from './components/DocsResultListItem';
export {
  DocsCardGrid,
  DocsTable,
  EntityTechdocsContent,
  TechDocsCustomHome,
  TechDocsIndexPage,
  TechdocsPage,
  techdocsPlugin as plugin,
  techdocsPlugin,
  TechDocsReaderPage,
} from './plugin';
export * from './reader';
export { EmbeddedDocsRouter, Router } from './Router';
