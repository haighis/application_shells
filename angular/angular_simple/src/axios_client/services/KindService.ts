/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Kind } from '../models/Kind';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class KindService {

    /**
     * Find Kind by ID
     * Returns a single kind
     * @param id ID of Kind
     * @returns Kind successful operation
     * @throws ApiError
     */
    public static findById5(
        id: string,
    ): CancelablePromise<Kind> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/kinds/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid ID supplied`,
                404: `kind not found`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns Kind OK
     * @throws ApiError
     */
    public static updateKind(
        id: string,
        requestBody: Kind,
    ): CancelablePromise<Kind> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/kinds/{id}',
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
    public static deleteKind(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/kinds/{id}',
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
     * @returns Kind OK
     * @throws ApiError
     */
    public static patchKind(
        id: string,
        requestBody: Kind,
    ): CancelablePromise<Kind> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/kinds/{id}',
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
     * Get Kind
     * Returns a Kind collection
     * @returns Kind OK
     * @throws ApiError
     */
    public static findKinds(): CancelablePromise<Array<Kind>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/kinds/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create Kind
     * @param requestBody Created Kind object
     * @returns Kind successful operation
     * @throws ApiError
     */
    public static postKind(
        requestBody: Kind,
    ): CancelablePromise<Kind> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/kinds/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns Kind OK
     * @throws ApiError
     */
    public static headKind(): CancelablePromise<Kind> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/kinds/',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
