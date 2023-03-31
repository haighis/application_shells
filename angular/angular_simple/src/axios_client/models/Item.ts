/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Artifact } from './Artifact';

/**
 * Item object
 */
export type Item = {
    id?: string;
    name?: string;
    description?: string;
    status?: string;
    namespace?: string;
    artifacts?: Array<Artifact>;
};

