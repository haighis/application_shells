/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Install } from '../models/Install';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InstallService {

    /**
     * Find Install by ID
     * Returns a single Install
     * @param id ID of Install
     * @returns Install successful operation
     * @throws ApiError
     */
    public static findById3(
        id: string,
    ): CancelablePromise<Install> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/installs/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `Install not found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns Install OK
     * @throws ApiError
     */
    public static updateApplicationInstall(
        id: string,
        requestBody: Install,
    ): CancelablePromise<Install> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/installs/{id}',
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
    public static deleteApplicationInstall(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/installs/{id}',
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
     * @returns Install OK
     * @throws ApiError
     */
    public static patchApplicationInstall(
        id: string,
        requestBody: Install,
    ): CancelablePromise<Install> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/installs/{id}',
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
     * Get Install
     * Returns a Install collection
     * @returns Install OK
     * @throws ApiError
     */
    public static findApplicationInstalls(): CancelablePromise<Array<Install>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/installs/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create Install
     * @param requestBody Created Install object
     * @returns Install successful operation
     * @throws ApiError
     */
    public static postApplicationInstall(
        requestBody: Install,
    ): CancelablePromise<Install> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/installs/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns Install OK
     * @throws ApiError
     */
    public static headApplicationInstall(): CancelablePromise<Install> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/installs/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
