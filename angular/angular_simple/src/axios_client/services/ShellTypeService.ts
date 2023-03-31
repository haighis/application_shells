/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShellType } from '../models/ShellType';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ShellTypeService {

    /**
     * Find shell type by ID
     * Returns a single shell type
     * @param id ID of ShellType
     * @returns ShellType successful operation
     * @throws ApiError
     */
    public static findById7(
        id: string,
    ): CancelablePromise<ShellType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/shelltypes/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `shell type not found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns ShellType OK
     * @throws ApiError
     */
    public static updateShellType(
        id: string,
        requestBody: ShellType,
    ): CancelablePromise<ShellType> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/shelltypes/{id}',
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
    public static deleteShellType(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/shelltypes/{id}',
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
     * @returns ShellType OK
     * @throws ApiError
     */
    public static patchShellType(
        id: string,
        requestBody: ShellType,
    ): CancelablePromise<ShellType> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/shelltypes/{id}',
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
     * Get Shell Type
     * Returns a Shell Type collection
     * @returns ShellType OK
     * @throws ApiError
     */
    public static findShellTypes(): CancelablePromise<Array<ShellType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/shelltypes/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create ShellType
     * @param requestBody Created ShellType object
     * @returns ShellType successful operation
     * @throws ApiError
     */
    public static postShellType(
        requestBody: ShellType,
    ): CancelablePromise<ShellType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/shelltypes/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns ShellType OK
     * @throws ApiError
     */
    public static headShellType(): CancelablePromise<ShellType> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/shelltypes/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
