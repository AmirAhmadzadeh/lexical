/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

import type {HistoryState} from './shared/useHistory';
import type {LexicalEditor} from 'lexical';

import {useHistory} from './shared/useHistory';

export {createEmptyHistoryState} from './shared/useHistory';

export type {HistoryState};

export function useLexicalHistory(
  editor: LexicalEditor,
  externalHistoryState?: HistoryState,
  delay?: number = 1000,
): void {
  return useHistory(editor, externalHistoryState, delay);
}