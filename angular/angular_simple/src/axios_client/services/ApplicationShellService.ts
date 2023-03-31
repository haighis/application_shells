/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplicationShell } from '../models/ApplicationShell';
import type { Install } from '../models/Install';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ApplicationShellService {

    /**
     * Find application shell by ID
     * Returns a single applicationShell
     * @param id ID of Application Shell
     * @returns Install successful operation
     * @throws ApiError
     */
    public static findById1(
        id: string,
    ): CancelablePromise<Install> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applicationshells/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `ApplicationShell not found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns ApplicationShell OK
     * @throws ApiError
     */
    public static updateApplicationShell(
        id: string,
        requestBody: ApplicationShell,
    ): CancelablePromise<ApplicationShell> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/applicationshells/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    public static deleteApplicationShell(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/applicationshells/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns ApplicationShell OK
     * @throws ApiError
     */
    public static patchApplicationShell(
        id: string,
        requestBody: ApplicationShell,
    ): CancelablePromise<ApplicationShell> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/applicationshells/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get Application Shell
     * Returns a Application Shell collection
     * @returns ApplicationShell OK
     * @throws ApiError
     */
    public static findApplicationShells(): CancelablePromise<Array<ApplicationShell>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applicationshells/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create Application Shell
     * @param requestBody Created Application Shell object
     * @returns ApplicationShell successful operation
     * @throws ApiError
     */
    public static postApplicationShell(
        requestBody: ApplicationShell,
    ): CancelablePromise<ApplicationShell> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/applicationshells/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns ApplicationShell OK
     * @throws ApiError
     */
    public static headApplicationShell(): CancelablePromise<ApplicationShell> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/applicationshells/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
