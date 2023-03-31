/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ShellType } from './ShellType';

/**
 * Application Shell object
 */
export type ApplicationShell = {
    /**
     * Application Shell Name
     */
    applicationShellName: string;
    /**
     * Installed Instance Code of the Application Shell.
     */
    installedInstanceCode: string;
    applicationShellType: ShellType;
    /**
     * Namespace of the item
     */
    namespace: string;
};

