/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Artifact object
 */
export type Artifact = {
    /**
     * Name of the Artifact.
     */
    name: string;
    url?: string;
    version?: string;
    isCurrent?: boolean;
    status?: string;
    namespace?: string;
    itemId?: string;
};

